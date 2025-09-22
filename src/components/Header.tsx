// src/components/Header.tsx

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#333]">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center text-white">
        {/* Lado izquierdo */}
        <ul className="flex items-center gap-8 mr-12 font-medium">
          <li>
            <Link to="/about-tennis" className="hover:text-gray-300">
              About Tennis
            </Link>
          </li>
          <li>
            {/* Crew → va a /crew */}
            <Link to="/crew" className="hover:text-gray-300">
              Crew
            </Link>
          </li>
        </ul>

        {/* Logo centrado */}
        <a
          href="#"
          className="font-extrabold text-xl tracking-tight flex flex-col items-center"
        >
          <Link to="/">
            <img
              src="/public/logo-header.png"
              alt="logo"
              className="h-8 w-auto"
            />
          </Link>
        </a>

        {/* Lado derecho */}
        <ul className="flex items-center gap-8 ml-12 font-medium">
          <li>
            <Link to="/services" className="hover:text-gray-300">
              Servicios
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
