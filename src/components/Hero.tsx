export default function Hero() {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-60 text-center">
        <h1 className="text-5xl font-extrabold">Hero Title</h1>
        <p className="mt-6 text-lg text-gray-600">
          Aquí va el subtítulo del Hero, con la propuesta principal.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-[var(--brand-primary)] text-gray-900 px-6 py-3 font-medium hover:opacity-90"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-gray-900 px-6 py-3 font-medium hover:bg-gray-900 hover:text-white"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
