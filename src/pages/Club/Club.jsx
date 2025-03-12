import React from "react";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Calendar, Users, Music, Wine, Star } from "lucide-react";
import GaleriaHorizontal from "../../components/GaleriaHorizontal/GaleriaHorizontal";

const Club = () => {
  // Beneficios del club
  const beneficios = [
    {
      icon: <Calendar size={24} />,
      title: "Eventos Exclusivos",
      description:
        "Acceso a eventos privados, catas de vino y talleres gastronómicos organizados mensualmente.",
    },
    {
      icon: <Users size={24} />,
      title: "Networking",
      description:
        "Conoce a personas con intereses similares en un ambiente relajado y exclusivo.",
    },
    {
      icon: <Music size={24} />,
      title: "Música en Vivo",
      description:
        "Disfruta de sesiones acústicas y DJ sets seleccionados especialmente para socios.",
    },
    {
      icon: <Wine size={24} />,
      title: "Selección Premium",
      description:
        "Carta de vinos y destilados exclusiva para miembros, con referencias difíciles de encontrar.",
    },
    {
      icon: <Star size={24} />,
      title: "Trato VIP",
      description:
        "Reserva prioritaria, atención personalizada y sorpresas especiales en días señalados.",
    },
  ];

  return (
    <ParallaxProvider>
      <div className="bg-[#efe6d9]">
        {/* Hero Section */}
        <ParallaxBanner style={{ height: "80vh" }}>
          <ParallaxBannerLayer speed={-20}>
            <img
              src="/club-hero.jpg"
              alt="Club Vivero 55"
              className="w-full h-full object-cover"
            />
          </ParallaxBannerLayer>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Club Vivero 55
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Una experiencia inigualable en el levante mediterráneo
              </p>
            </div>
          </div>
        </ParallaxBanner>

        {/* Introducción */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                Un Concepto Único
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Club Vivero 55 nace como un espacio exclusivo donde la
                gastronomía, el ocio y la cultura se entrelazan para crear
                experiencias memorables. Un lugar donde celebrar lo
                extraordinario en un ambiente distinguido pero relajado.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Beneficios Exclusivos
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {beneficios.map((beneficio, idx) => (
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
                      {beneficio.icon}
                    </div>
                    <h3 className="text-xl font-medium text-gray-800">
                      {beneficio.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{beneficio.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GaleriaHorizontal />
      </div>
    </ParallaxProvider>
  );
};

export default Club;
