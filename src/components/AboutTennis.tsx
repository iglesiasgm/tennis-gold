import Header from "../components/Header";
import Footer from "../components/Footer";

const IMG = "/mock.jpg"; // archivo en public/mock.jpg

export default function AboutTennis() {
  // 3 de arriba, la última se repite como primera de la columna derecha
  const topRow = [IMG, IMG, IMG];
  const rightCol = [IMG];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          {/* Fila superior: 3 fotos, mismo tamaño */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {topRow.map((src, i) => (
              <div
                key={i}
                className="h-44 md:h-48 rounded-xl overflow-hidden bg-gray-200"
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Título con avatar */}
          <header className="mb-8 flex items-center gap-3">
            <img
              src={IMG}
              alt="profile"
              className="h-10 w-10 rounded-full object-cover"
            />
            <h1 className="text-2xl md:text-3xl font-extrabold">
              WTF IS TNNIS GLD
            </h1>
          </header>

          {/* Texto + columna derecha (más separación con gap) */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8 md:gap-12 items-start">
            {/* Texto */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Who I Am</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur. Mi platea euismod turpis
                velit lobortis. Consectetur sollicitudin amet vivamus aliquet.
                Vel eget et quis feugiat. Malesuada ut ornare scelerisque
                tortor. Quam sit pretium vulputate semper pulvinar commodo
                viverra. Sed in diam commodo non est ultricies in eleifend.
                Risus nisi sed metus rutrum. Odio magna nullam vulputate nibh ac
                quis sit donec.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Placerat suscipit turpis dictum purus eu. Lorem ipsum dolor sit
                amet consectetur. Mi platea euismod turpis velit lobortis.
                Consectetur sollicitudin amet vivamus aliquet. Vel eget et quis
                feugiat. Malesuada ut ornare scelerisque tortor. Quam sit
                pretium vulputate semper pulvinar commodo viverra.
              </p>
              <div className="flex gap-2 text-xl mt-4">
                <span role="img" aria-label="trophy">
                  🏆
                </span>
                <span role="img" aria-label="pencil">
                  ✍️
                </span>
              </div>
            </div>

            {/* Columna derecha: 3 fotos, mismo tamaño; la 1ª es la 3ª de arriba */}
            <div className="grid gap-4">
              {rightCol.map((src, i) => (
                <div
                  key={i}
                  className="h-44 md:h-48 rounded-xl overflow-hidden bg-gray-200"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
