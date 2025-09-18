// src/components/Header.tsx
export default function Header() {
  return (
    <header className="bg-[#333]">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center text-white">
        {/* Lado izquierdo */}
        <ul className="flex items-center gap-8 mr-12 font-medium">
          <li>
            <a href="#about" className="hover:text-gray-300">
              About Tennis
            </a>
          </li>
          <li>
            <a href="#crew" className="hover:text-gray-300">
              Crew
            </a>
          </li>
        </ul>

        {/* Logo centrado */}
        <a
          href="#"
          className="font-extrabold text-xl tracking-tight flex flex-col items-center"
        >
          <span className="flex gap-1 text-xs mb-[-4px]">
            {/* Colocá los emojis o íconos aquí, o importá imágenes */}
            <span role="img" aria-label="tennis ball">
              🎾
            </span>
            <span role="img" aria-label="trophy">
              🏆
            </span>
            <span role="img" aria-label="medal">
              🥇
            </span>
          </span>
          <span>
            tennis <span className="text-yellow-400">GOLD</span>
          </span>
        </a>

        {/* Lado derecho */}
        <ul className="flex items-center gap-8 ml-12 font-medium">
          <li>
            <a href="#services" className="hover:text-gray-300">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
