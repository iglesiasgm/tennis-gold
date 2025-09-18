const features = [
  {
    title: "Rápido de implementar",
    desc: "Integración sencilla y sin fricción.",
  },
  { title: "Escalable", desc: "Crece con tu negocio sin sobresaltos." },
  { title: "Seguro", desc: "Mejores prácticas y estándares actuales." },
];

export default function Features() {
  return (
    <section id="features" className="container-responsive py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold">Características</h2>
        <p className="mt-3 text-gray-600">
          Bloque descriptivo introductorio de la sección.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition"
          >
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
