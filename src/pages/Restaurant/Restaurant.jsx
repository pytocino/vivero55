import React, { useState } from "react";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import CTA from "../../components/CTA/CTA";

const Restaurant = () => {
  // Estado para controlar qué categorías están expandidas
  const [expandedCategories, setExpandedCategories] = useState([]); // Por defecto, la primera categoría está expandida

  // Función para alternar el estado de expansión de una categoría
  const toggleCategory = (index) => {
    if (expandedCategories.includes(index)) {
      setExpandedCategories(expandedCategories.filter((i) => i !== index));
    } else {
      setExpandedCategories([...expandedCategories, index]);
    }
  };

  // Datos del menú con imágenes incluidas
  const menuCategories = [
    {
      title: "Entrantes",
      items: [
        {
          name: "Carpaccio de calabacín",
          description: "Con pesto de albahaca y piñones tostados",
          price: "12€",
          image: "/dish-1.jpg", // Asegúrate de tener estas imágenes en tu carpeta public
        },
        {
          name: "Tartar de tomate",
          description: "Con stracciatella y aceite de albahaca",
          price: "14€",
          image: "/dish-2.jpg",
        },
        {
          name: "Ensalada de burrata",
          description: "Con tomates de temporada y rúcula fresca",
          price: "16€",
          image: "/dish-3.jpg",
        },
      ],
    },
    {
      title: "Principales",
      items: [
        {
          name: "Risotto de setas",
          description: "Elaborado con hongos silvestres y parmesano",
          price: "18€",
          image: "/dish-4.jpg",
        },
        {
          name: "Pesca del día",
          description: "Con verduras de temporada y emulsión cítrica",
          price: "24€",
          image: "/dish-5.jpg",
        },
        {
          name: "Solomillo de ternera",
          description: "Con puré de patata trufado y salsa de vino tinto",
          price: "28€",
          image: "/dish-6.jpg",
        },
      ],
    },
    {
      title: "Postres",
      items: [
        {
          name: "Tarta de queso",
          description: "Con compota de frutos rojos",
          price: "8€",
          image: "/dessert-1.jpg", // Deberás añadir estas imágenes
        },
        {
          name: "Coulant de chocolate",
          description: "Con helado de vainilla",
          price: "9€",
          image: "/dessert-2.jpg",
        },
        {
          name: "Frutas de temporada",
          description: "Con sorbete de limón",
          price: "7€",
          image: "/dessert-3.jpg",
        },
      ],
    },
  ];

  return (
    <ParallaxProvider>
      <div className="bg-[#efe6d9]">
        {/* Hero Section con Parallax */}
        <ParallaxBanner style={{ height: "60vh" }}>
          <ParallaxBannerLayer speed={-50}>
            <img
              src="/parallax.jpg"
              alt="Fallback"
              className="w-full h-full object-cover"
            />
          </ParallaxBannerLayer>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Nuestro Restaurante</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Una experiencia gastronómica única entre naturaleza
              </p>
            </div>
          </div>
        </ParallaxBanner>

        {/* Historia y Filosofía */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
              <div className="md:w-1/2">
                <img
                  src="/chef.jpg" /* Reemplazar con tu imagen */
                  alt="Nuestro Chef"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                  Nuestra Historia
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Fundado en 2020, Vivero 55 nació de la pasión por la
                  gastronomía y el respeto por los ingredientes de calidad.
                  Situado en un antiguo vivero restaurado, hemos creado un
                  espacio donde la naturaleza y la cocina se fusionan para
                  ofrecer una experiencia memorable.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nuestro chef ejecutivo ha diseñado una carta que evoluciona
                  con las estaciones, aprovechando lo mejor de cada temporada y
                  trabajando estrechamente con productores locales comprometidos
                  con prácticas sostenibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Menú modificada para ser desplegable */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Nuestra Carta
            </h2>

            <div className="max-w-6xl mx-auto">
              {menuCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="mb-8"
                >
                  <button
                    onClick={() => toggleCategory(index)}
                    className="w-full flex items-center justify-between bg-white p-6 rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-800 text-left">
                      {category.title}
                    </h3>
                    <div className="w-10 h-10 bg-[#567568]/10 rounded-full flex items-center justify-center">
                      {expandedCategories.includes(index) ? (
                        <ChevronUp size={24} className="text-[#567568]" />
                      ) : (
                        <ChevronDown size={24} className="text-[#567568]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedCategories.includes(index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-12">
                          {category.items.map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="bg-white rounded-xl shadow-md overflow-hidden"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className="h-48 overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                />
                              </div>
                              <div className="p-6">
                                <div className="flex justify-between items-baseline mb-3">
                                  <h4 className="text-xl font-medium text-gray-800">
                                    {item.name}
                                  </h4>
                                  <span className="text-lg font-medium text-[#567568]">
                                    {item.price}
                                  </span>
                                </div>
                                <p className="text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12 mx-2.5">
              <p className="text-gray-600 italic">
                La carta puede variar según la temporada y disponibilidad de
                productos.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Contacto */}
        <CTA />

        {/* Mapa o Ubicación */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Ubicación
            </h2>
            <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
              {/* Aquí podrías integrar un mapa de Google Maps o una imagen */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.3358131784894!2d-0.7258660244570622!3d37.64130837201933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6318798c780687%3A0x5ce7d9ef57d1b5cf!2sVivero%2055!5e0!3m2!1ses!2ses!4v1741783879020!5m2!1ses!2ses"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mapa ubicación Vivero 55"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
};

export default Restaurant;
