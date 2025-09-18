export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} TennisGold. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
