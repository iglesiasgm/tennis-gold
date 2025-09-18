import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/** Plugin simple de autoplay */
function Autoplay(interval = 3000) {
  return (slider: any) => {
    let timeout: number | undefined;
    let mouseOver = false;

    function clearNextTimeout() {
      timeout && window.clearTimeout(timeout);
    }
    function nextTimeout() {
      clearNextTimeout();
      if (mouseOver) return;
      timeout = window.setTimeout(() => {
        slider.next();
      }, interval);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };
}

type Item = { id: number; img: string; alt?: string; caption?: string };

const items: Item[] = [
  { id: 1, img: "/public/mock.jpg", alt: "Proyecto 1", caption: "Proyecto 1" },
  { id: 2, img: "/public/mock.jpg", alt: "Proyecto 2", caption: "Proyecto 2" },
  { id: 3, img: "/public/mock.jpg", alt: "Proyecto 3", caption: "Proyecto 3" },
  { id: 4, img: "/public/mock.jpg", alt: "Proyecto 4", caption: "Proyecto 4" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 3,
        spacing: 16,
      },
      breakpoints: {
        "(max-width: 1024px)": { slides: { perView: 2, spacing: 16 } },
        "(max-width: 640px)": { slides: { perView: 1, spacing: 12 } },
      },
      slideChanged(s) {
        setCurrent(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [Autoplay(3500)]
  );

  // Accesibilidad: mover con flechas del teclado cuando el carrusel tiene foco
  useEffect(() => {
    const container = instanceRef.current?.container;
    if (!container) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") instanceRef.current?.next();
      if (e.key === "ArrowLeft") instanceRef.current?.prev();
    };
    container.addEventListener("keydown", onKey as any);
    return () => container.removeEventListener("keydown", onKey as any);
  }, [instanceRef]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Proyectos</h2>
          {loaded && instanceRef.current && (
            <div className="flex items-center gap-2">
              <button
                aria-label="Anterior"
                onClick={() => instanceRef.current?.prev()}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100"
              >
                ←
              </button>
              <button
                aria-label="Siguiente"
                onClick={() => instanceRef.current?.next()}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100"
              >
                →
              </button>
            </div>
          )}
        </header>

        {/* Contenedor Keen */}
        <div
          ref={sliderRef}
          className="keen-slider outline-none" // outline-none para evitar borde azul, pero sigue focusable
          tabIndex={0}
          aria-roledescription="carousel"
        >
          {items.map((item) => (
            <div key={item.id} className="keen-slider__slide">
              <article className="h-64 rounded-xl overflow-hidden border border-gray-200 bg-white">
                <img
                  src={item.img}
                  alt={item.alt ?? ""}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-3 text-sm font-medium">{item.caption}</div>
              </article>
            </div>
          ))}
        </div>

        {/* Dots */}
        {loaded && instanceRef.current && (
          <div className="mt-6 flex justify-center gap-2">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => (
              <button
                key={idx}
                aria-label={`Ir a slide ${idx + 1}`}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-2 w-2 rounded-full transition ${
                  current === idx ? "bg-gray-900 w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
