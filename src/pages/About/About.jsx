import React from "react";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Heart, Leaf, Coffee, ThumbsUp, Users } from "lucide-react";
import CTA from "../../components/CTA/CTA";
import GaleriaHorizontal from "../../components/GaleriaHorizontal/GaleriaHorizontal";

const About = () => {
  const valores = [
    {
      icon: <Leaf size={24} />,
      title: "Sostenibilidad",
      description:
        "Trabajamos con productores locales y practicamos una gestión responsable de residuos, minimizando nuestro impacto ambiental.",
    },
    {
      icon: <Heart size={24} />,
      title: "Pasión",
      description:
        "Cada plato, cada bebida y cada experiencia está creada con absoluta pasión por la gastronomía.",
    },
    {
      icon: <Coffee size={24} />,
      title: "Autenticidad",
      description:
        "Respetamos las recetas tradicionales mientras innovamos con creatividad y personalidad propia.",
    },
    {
      icon: <ThumbsUp size={24} />,
      title: "Excelencia",
      description:
        "Buscamos la excelencia en cada detalle, desde la selección de ingredientes hasta el servicio.",
    },
    {
      icon: <Users size={24} />,
      title: "Comunidad",
      description:
        "Creamos un espacio donde nuestros clientes se sienten parte de una comunidad especial.",
    },
  ];

  const equipo = [
    {
      nombre: "María González",
      puesto: "Fundadora & Chef Ejecutiva",
      bio: "Con más de 15 años de experiencia en restaurantes de prestigio internacional, María ha creado Vivero 55 como expresión de su visión gastronómica única.",
      imagen: "/team-1.jpg",
    },
    {
      nombre: "Carlos Martínez",
      puesto: "Director de Operaciones",
      bio: "Carlos aporta su experiencia en gestión para asegurar que cada visita a Vivero 55 sea una experiencia fluida y memorable.",
      imagen: "/team-2.jpg",
    },
    {
      nombre: "Lucía Fernández",
      puesto: "Sumiller",
      bio: "Experta en vinos nacionales e internacionales, Lucía ha creado una carta que complementa perfectamente nuestra propuesta gastronómica.",
      imagen: "/team-3.jpg",
    },
  ];

  return (
    <ParallaxProvider>
      <div className="bg-[#efe6d9]">
        {/* Hero Section */}
        <ParallaxBanner style={{ height: "70vh" }}>
          <ParallaxBannerLayer speed={-20}>
            <img
              src="/about-hero.jpg"
              alt="Sobre Vivero 55"
              className="w-full h-full object-cover"
            />
          </ParallaxBannerLayer>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Nuestra Historia
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Un viaje gastronómico que comenzó con un sueño
              </p>
            </div>
          </div>
        </ParallaxBanner>

        {/* Historia y Orígenes */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                  Los Orígenes
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Vivero 55 nació en 2020, cuando encontramos este antiguo
                    vivero abandonado que databa de 1955. Lo que para muchos
                    parecía un espacio olvidado, para nosotros era un lienzo en
                    blanco lleno de posibilidades y conexión con la naturaleza.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Tras meses de cuidadosa restauración, respetando la esencia
                    y estructura original del espacio, transformamos este lugar
                    en un santuario gastronómico donde la naturaleza y la cocina
                    conviven en armonía.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nuestra filosofía desde el primer día ha sido clara: ofrecer
                    una experiencia culinaria excepcional en un entorno único,
                    utilizando ingredientes de la más alta calidad y técnicas
                    que respetan el producto.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 mt-10 lg:mt-0">
                <div className="relative">
                  <img
                    src="/about-history.jpg"
                    alt="Vivero 55 en sus inicios"
                    className="rounded-lg shadow-xl z-10 relative"
                  />
                  <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#567568] rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Línea de tiempo - Evolución */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Nuestra Evolución
            </h2>

            <div className="max-w-4xl mx-auto">
              {/* 2020 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row mb-20 relative"
              >
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8 text-right">
                  <h3 className="text-2xl font-bold text-[#567568]">2020</h3>
                  <p className="text-lg font-medium">El comienzo</p>
                </div>
                <div className="hidden md:block w-px bg-[#567568] absolute left-1/3 top-0 bottom-0 mx-auto"></div>
                <div className="md:w-2/3 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">
                      Adquisición y renovación del antiguo vivero. Primeros
                      diseños conceptuales y formación del equipo fundador.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2021 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col md:flex-row mb-20 relative"
              >
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8 text-right">
                  <h3 className="text-2xl font-bold text-[#567568]">2021</h3>
                  <p className="text-lg font-medium">Apertura</p>
                </div>
                <div className="hidden md:block w-px bg-[#567568] absolute left-1/3 top-0 bottom-0 mx-auto"></div>
                <div className="md:w-2/3 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">
                      Inauguración oficial de Vivero 55. Primera carta de
                      temporada y comienzo de las colaboraciones con productores
                      locales.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2022 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row mb-20 relative"
              >
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8 text-right">
                  <h3 className="text-2xl font-bold text-[#567568]">2022</h3>
                  <p className="text-lg font-medium">Reconocimiento</p>
                </div>
                <div className="hidden md:block w-px bg-[#567568] absolute left-1/3 top-0 bottom-0 mx-auto"></div>
                <div className="md:w-2/3 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">
                      Primera mención en la Guía Gastronómica Regional.
                      Expansión de la zona de terraza y lanzamiento de eventos
                      gastronómicos mensuales.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2023 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col md:flex-row relative"
              >
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8 text-right">
                  <h3 className="text-2xl font-bold text-[#567568]">2023</h3>
                  <p className="text-lg font-medium">Crecimiento</p>
                </div>
                <div className="hidden md:block w-px bg-[#567568] absolute left-1/3 top-0 bottom-0 mx-auto"></div>
                <div className="md:w-2/3 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">
                      Lanzamiento del Club Vivero 55 y renovación de la cocina.
                      Incorporación del equipo actual y consolidación de nuestra
                      filosofía gastronómica.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nuestros Valores */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Nuestros Valores
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {valores.map((valor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#567568]/10 rounded-full flex items-center justify-center mr-4 text-[#567568] flex-shrink-0">
                      {valor.icon}
                    </div>
                    <h3 className="text-xl font-medium text-gray-800">
                      {valor.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{valor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Nuestro Equipo
            </h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {equipo.map((persona, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="text-center"
                >
                  <div className="mb-6 relative mx-auto">
                    <div className="w-48 h-48 rounded-full overflow-hidden mx-auto border-4 border-white shadow-xl">
                      <img
                        src={persona.imagen}
                        alt={persona.nombre}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#567568] text-white px-6 py-1 rounded-full">
                      {persona.puesto.split("&")[0].trim()}
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-800 mb-2">
                    {persona.nombre}
                  </h3>
                  <p className="text-[#567568] font-medium mb-4">
                    {persona.puesto}
                  </p>
                  <p className="text-gray-600 max-w-xs mx-auto">
                    {persona.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería de imágenes */}
        <GaleriaHorizontal
          title="Nuestro Espacio a lo Largo del Tiempo"
          images={[
            { src: "/gallery-1.jpg", alt: "Vivero 55 - Restaurante" },
            { src: "/gallery-2.jpg", alt: "Vivero 55 - Interior" },
            { src: "/gallery-3.jpg", alt: "Vivero 55 - Terraza" },
            { src: "/gallery-4.jpg", alt: "Vivero 55 - Cocina" },
            { src: "/gallery-5.jpg", alt: "Vivero 55 - Eventos" },
            { src: "/gallery-6.jpg", alt: "Vivero 55 - Detalles" },
          ]}
        />

        {/* CTA */}
        <CTA
          message="¿Te gustaría formar parte de nuestra historia? Visítanos y vive la experiencia Vivero 55."
          phoneNumber="+34661669115"
          whatsappText="Reservar mesa"
          callText="Llamar ahora"
        />
      </div>
    </ParallaxProvider>
  );
};

export default About;
