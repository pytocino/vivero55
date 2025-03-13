import React from "react";
import { motion } from "framer-motion";
import styles from "../Components.module.css"; // Importamos los estilos

const PageTransition = ({ children }) => {
  // Variantes para la animación con overlay
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  // Variantes para el contenido
  const contentVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      {/* Fondo estático con mesh gradient para prevenir flash blanco */}
      <div className={`fixed inset-0 -z-10 ${styles.meshGradient}`}>
        {/* Logo con baja opacidad como decoración */}
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: "url('/logoViveroBlanco.svg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.6, // Reducido para que se vea bien con el gradiente
          }}
        />
      </div>

      <motion.div
        initial="initial"
        animate="in"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.4 }}
        className="w-full min-h-full relative"
      >
        {/* Fondo de transición con mesh gradient */}
        <div className={`absolute inset-0 z-0 ${styles.meshGradient}`}>
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              backgroundImage: "url('/logoViveroBlanco.svg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50%", // Tamaño del logo más pequeño
              opacity: 0.2, // Logo con baja opacidad adaptado al gradiente
            }}
          />
        </div>

        {/* Contenido con animación */}
        <motion.div
          variants={contentVariants}
          className="w-full min-h-full relative z-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

export default PageTransition;
