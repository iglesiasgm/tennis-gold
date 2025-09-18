const projects = [
  { id: 1, title: "Proy. 1", img: "/public/mock.jpg" },
  { id: 2, title: "Proy. 2", img: "/public/mock.jpg" },
  { id: 3, title: "Proy. 3", img: "/public/mock.jpg" },
  { id: 4, title: "Proy. 4", img: "/public/mock.jpg" },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-10">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="text-gray-600">Algunos proyectos destacados</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
