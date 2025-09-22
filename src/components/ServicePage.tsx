import Header from "../components/Header";
import Footer from "../components/Footer";

type Service = {
  id: number;
  title: string;
  badge?: "Popular" | "New" | "Pro";
  image?: string; // puedes reemplazar por una imagen real
  category: string; // etiqueta inferior
};

const topServices: Service[] = [
  {
    id: 1,
    title: "Web Development",
    badge: "Popular",
    image: "/mock.jpg",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Graphic Design",
    badge: "New",
    image: "/mock.jpg",
    category: "Graphic Design",
  },
  {
    id: 3,
    title: "SEO Optimizations",
    image: "/mock.jpg",
    category: "SEO Services",
  },
];

const updates: Service[] = [
  {
    id: 101,
    title: "Instagram post",
    image: "/mock.jpg",
    category: "Launch • Teasing",
  },
  {
    id: 102,
    title: "Instagram post",
    image: "/mock.jpg",
    category: "Feedback • Showcase",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          {/* Team header */}
          <div className="mb-10 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gray-200 overflow-hidden">
              {/* avatar opcional */}
              <img
                src="/public/mock.jpg"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium leading-none">Service Team</div>
              <div className="text-xs text-gray-500 leading-tight">
                Dedicated Professionals
              </div>
            </div>
          </div>

          {/* Our Top Services */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-4">Our Top Services</h2>

            <div className="space-y-4">
              {topServices.map((s) => (
                <article
                  key={s.id}
                  className="rounded-xl border border-gray-200 overflow-hidden bg-white"
                >
                  {/* Badge */}
                  {s.badge && (
                    <div className="px-4 pt-3">
                      <span className="inline-block rounded-full border border-white px-2.5 py-0.5 text-xs text-white bg-green-700">
                        {s.badge}
                      </span>
                    </div>
                  )}

                  {/* Imagen / placeholder con título centrado */}
                  <div className="mx-4 mt-3 rounded-lg bg-gray-100 overflow-hidden">
                    <div className="relative h-56 md:h-64">
                      <img
                        src={s.image ?? ""}
                        alt={s.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 grid place-items-center">
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 bg-white/70 px-3 py-1.5 rounded">
                          {s.title}
                        </h3>
                      </div>
                    </div>
                    {/* Etiqueta inferior tipo “caption” */}
                    <div className="border-t border-gray-200 bg-white px-4 py-2 text-xs text-gray-600 font-medium">
                      {s.category}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Latest Updates (solo las cards, sin newsletter/cta inferior) */}
          <section className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Latest Updates
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {updates.map((u) => (
                <article
                  key={u.id}
                  className="rounded-xl border border-gray-200 overflow-hidden bg-white"
                >
                  <div className="h-40 bg-gray-100 relative">
                    <img
                      src={u.image ?? ""}
                      alt={u.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="text-sm font-medium bg-white/80 px-2.5 py-1 rounded">
                        {u.title}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 bg-white px-4 py-2 text-xs text-gray-600">
                    {u.category}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* (No agregamos el bloque de newsletter/cta de abajo) */}
        </section>
      </main>

      <Footer />
    </div>
  );
}
