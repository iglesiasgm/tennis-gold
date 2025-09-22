// src/pages/CrewPage.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

type Member = {
  id: number;
  name: string;
  role: string;
  photo: string; // ruta a la imagen (public/...)
  portfolio: string; // url al portfolio
};

const crew: Member[] = [
  {
    id: 1,
    name: "City S3x Pics (Juan Zalazar Stettler)",
    role: "Montajista, VFX artist, fotógrafo",
    photo: "/public/fotos-team/juan.jpg",
    portfolio:
      "https://www.behance.net/gallery/235093239/MONTAJE-EDICION-VFX-CITY-S3X-PICS-20232025",
  },
  {
    id: 2,
    name: "Kudde tg",
    role: "Director creativo, Artista musical, Stylist",
    photo: "/public/fotos-team/kudde.PNG",
    portfolio: "https://www.behance.net/exequierodrigu4",
  },
  {
    id: 3,
    name: "Natasha Filchel Skalany",
    role: "Diseñadora gráfica, Directora audiovisual, Directora de fotografía, Fotógrafa",
    photo: "/public/fotos-team/nacha.jpg",
    portfolio: "https://natashafilchelskalany.myportfolio.com/inicio",
  },
  {
    id: 4,
    name: "Candela Nardecchia Saint André",
    role: "Productora",
    photo: "/public/fotos-team/cande.JPG",
    portfolio: "https://www.behance.net/candelanardecc",
  },
  {
    id: 5,
    name: "Gabriel Mariano Iglesias",
    role: "Informático, Desarrollador de Software",
    photo: "/public/fotos-team/gabi.jpeg",
    portfolio: "https://gabrieliglesias.netlify.app/",
  },
];

export default function CrewPage() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-14">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold">Our Team</h1>
          <p className="mt-2 text-gray-600">Meet the team</p>
        </header>

        {/* Grid 2 columnas (1 en mobile) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {crew.map((m) => (
            <article
              key={m.id}
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition"
            >
              {/* Foto (tamaño medio) */}
              <div className="w-full h-120 bg-gray-100">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{m.role}</p>
                <hr className="my-4 border-gray-200" />
                <a
                  href={m.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                  Portfolio
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
