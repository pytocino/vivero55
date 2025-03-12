import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import styles from "../Components.module.css";

const Footer = () => {
  return (
    <footer
      className={`flex flex-col items-center justify-center py-8 px-4 w-full ${styles.meshGradient} text-white`}
    >
      <div className="flex space-x-4 mb-6">
        <Link
          to="#"
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <Instagram size={40} />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link
          to="#"
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <Facebook size={40} />
          <span className="sr-only">Facebook</span>
        </Link>
      </div>

      <div className="flex flex-col items-center mb-6">
        {/* Usando la versión blanca del logo para mejor contraste */}
        <div className="w-24 h-24 mb-2">
          <img
            src="/logoViveroBlanco.svg"
            alt="VIVERO 55"
            className="w-full h-full"
          />
        </div>
        <div className="text-xl font-bold tracking-wider">VIVERO 55</div>
      </div>

      <div className="text-center mb-2">
        <p>Polígono Playa de los Alemanes, 56, 30380 La Manga, Cartagena</p>
      </div>

      <div className="text-xs text-center opacity-75">
        <p>
          Copyright © Vivero 55 · {new Date().getFullYear()}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
