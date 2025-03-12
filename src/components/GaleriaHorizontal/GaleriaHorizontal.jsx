import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const GaleriaHorizontal = () => {
  // Estado para el índice activo
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const images = [1, 2, 3, 4, 5, 6];

  // Función para detectar la imagen visible
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    const scrollLeft = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.clientWidth;

    // Calcular qué imagen está más centrada en la vista
    const imageWidth = 300 + 24; // 300px de ancho + 24px de gap (6 * 4)
    const currentIndex = Math.round(scrollLeft / imageWidth);

    setActiveIndex(Math.min(currentIndex, images.length - 1));
  };

  // Función para ir a una imagen específica
  const scrollToImage = (index) => {
    if (!scrollContainerRef.current) return;

    const imageWidth = 300 + 24; // Ancho + gap
    const newScrollPosition = index * imageWidth;

    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  // Configurar el event listener para el scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Nuestro Espacio
        </h2>

        <div className="max-w-6xl mx-auto relative">
          {/* Indicador de desplazamiento interactivo */}
          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToImage(index)}
                className={`h-1 w-8 rounded-full transition-all duration-300 
                  ${
                    activeIndex === index
                      ? "bg-[#567568]"
                      : "bg-[#567568]/30 hover:bg-[#567568]/60"
                  }`}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Contenedor con scroll horizontal y scroll snap */}
          <div
            ref={scrollContainerRef}
            className="
              overflow-x-auto
              pb-8
              hide-scrollbar
              snap-x
              snap-mandatory
              scroll-smooth
            "
          >
            <div className="flex gap-6 w-max">
              {/* Imágenes */}
              {images.map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (num - 1) * 0.1 }}
                  className="
                    w-[300px]
                    h-[400px]
                    flex-shrink-0
                    snap-center
                  "
                >
                  <img
                    src={`/club-space-${num}.jpg`}
                    alt={`Club Vivero 55 - Espacio ${num}`}
                    className={`
                      w-full h-full 
                      object-cover 
                      rounded-lg 
                      shadow-lg 
                      transition-all 
                      duration-300
                      ${
                        activeIndex === num - 1
                          ? "ring-4 ring-[#567568]/30"
                          : ""
                      }
                    `}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaleriaHorizontal;
