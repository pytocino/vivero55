import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";
import styles from "../Components.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 ${styles.meshGradient} shadow-md z-50 w-full`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src="/logoViveroBlanco.svg"
              alt="Logo Vivero 55"
              className="h-16 w-auto"
            />
            {!menuOpen && (
              <h2 className="text-white text-2xl font-semibold ml-2">
                Vivero 55
              </h2>
            )}
          </Link>
        </div>
        {/* Menú Hamburguesa (visible en móvil) */}
        <button
          className="lg:hidden flex items-center p-2 rounded-md hover:bg-white/10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <AlignJustify className="h-8 w-auto text-white" />
        </button>
        {/* Overlay para cerrar el menú (visible solo cuando el menú está abierto) */}
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/25 z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
        )}
        {/* Navegación - Modificada para aparecer desde la derecha */}
        {/* Navegación - Sin mesh gradient en desktop */}
        <nav
          className={`fixed lg:static top-0 right-0 h-screen lg:h-auto w-4/5 lg:w-auto 
          ${!menuOpen ? "translate-x-full" : "translate-x-0"}
          lg:translate-x-0 lg:opacity-100 z-50
          shadow-lg lg:shadow-none 
          transition-all duration-300 transform
          ${window.innerWidth < 1024 ? styles.meshGradient : ""}`}
        >
          <div className="flex justify-between items-center p-4 lg:hidden">
            <h2 className="text-white text-xl font-semibold"></h2>
            <button
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Cerrar menú"
            >
              <X className="h-8 w-auto" />
            </button>
          </div>
          <ul className="flex flex-col lg:flex-row items-center justify-center lg:justify-center p-4 lg:p-0 w-full">
            {/* El resto del código permanece igual */}
            <li className="py-4 lg:py-0 lg:px-6 text-center">
              <Link
                to="/"
                className="text-white hover:text-amber-200 font-medium transition-colors block lg:inline text-2xl lg:text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li className="py-4 lg:py-0 lg:px-6 text-center">
              <Link
                to="/restaurant"
                className="text-white hover:text-amber-200 font-medium transition-colors block lg:inline text-2xl lg:text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Restaurante
              </Link>
            </li>
            <li className="py-4 lg:py-0 lg:px-6 text-center">
              <Link
                to="/club"
                className="text-white hover:text-amber-200 font-medium transition-colors block lg:inline text-2xl lg:text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Club
              </Link>
            </li>
            <li className="py-4 lg:py-0 lg:px-6 text-center">
              <Link
                to="/about"
                className="text-white hover:text-amber-200 font-medium transition-colors block lg:inline text-2xl lg:text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li className="py-4 lg:py-0 lg:px-6 text-center">
              <Link
                to="/contact"
                className="text-white hover:text-amber-200 font-medium transition-colors block lg:inline text-2xl lg:text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
