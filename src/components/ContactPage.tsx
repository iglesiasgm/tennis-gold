import Header from "../components/Header";
import Footer from "../components/Footer";

const EMAIL = "tennisg0ld.01@gmail.com"; // cámbialo por el real
const PHONE = "+54 9 (261) 59012729"; // cámbialo por el real
const PHONE_TEL = "+12345678900"; // versión para el enlace tel:

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 py-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Contáctanos</h1>
            <p className="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna izquierda: texto + tarjetas */}
            <div>
              <h2 className="text-xl font-semibold">Información de Contacto</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur
              </p>

              {/* Email */}
              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 flex items-start gap-3">
                {/* Icono Email (inline SVG) */}
                <div className="shrink-0 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="text-gray-700"
                  >
                    <path
                      d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 0 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-700">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 inline-block text-gray-900 font-medium hover:underline break-all"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 flex items-start gap-3">
                {/* Icono Phone (inline SVG) */}
                <div className="shrink-0 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="text-gray-700"
                  >
                    <path
                      d="M4.5 5.5c0-1.1.9-2 2-2h1.3c.8 0 1.5.5 1.8 1.3l.6 1.7a2 2 0 0 1-.5 2l-1 1c1 2.3 2.7 4 5 5l1-1a2 2 0 0 1 2-.5l1.7.6c.8.3 1.3 1 1.3 1.8V18.5c0 1.1-.9 2-2 2C9.8 20.5 4.5 15.2 4.5 8.5v-3Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-700">
                    Phone Number
                  </div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-1 inline-block text-gray-900 font-medium hover:underline"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Columna derecha: placeholder simple (sin horarios ni mapa) */}
            <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 flex items-center justify-center text-center">
              <div>
                <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-gray-200" />
                <p className="text-gray-700 font-medium">
                  We’re just a message away
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Email or call us and we’ll get back to you shortly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
