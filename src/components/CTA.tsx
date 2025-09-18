export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="container-responsive">
        <div className="rounded-3xl bg-gray-900 text-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Listo para empezar</h3>
            <p className="mt-2 text-gray-300">
              Sumate hoy y probá el producto sin costo.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-white text-gray-900 px-5 py-3 font-medium hover:opacity-90"
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}
