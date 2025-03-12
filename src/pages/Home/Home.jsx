import React from "react";
import { Link } from "react-router-dom";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <ParallaxProvider>
      <div className="bg-[#efe6d9]">
        {/* Hero Section con Video en Parallax */}
        <ParallaxBanner style={{ height: "80vh" }}>
          {/* Video en lugar de imagen */}
          <ParallaxBannerLayer speed={-50}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/VideoIGVivero.mp4" type="video/mp4" />
              {/* Fuente alternativa para mejor compatibilidad */}
              <source src="/VideoIGVivero.webm" type="video/webm" />
              {/* Imagen de fallback si el video no funciona */}
              <img
                src="/parallax.jpg"
                alt="Fallback"
                className="w-full h-full object-cover"
              />
            </video>
          </ParallaxBannerLayer>

          {/* Overlay oscuro para mejorar visibilidad del contenido */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Contenido centrado */}
          <div className="absolute inset-0 container mx-auto flex flex-col items-center justify-center text-center text-white px-4">
            <img
              src="/logoViveroBlanco.svg"
              alt="Vivero 55"
              className={`w-64 md:w-80 lg:w-96 mb-10 ${styles.logoAnimation}`}
            />
          </div>
        </ParallaxBanner>

        {/* Primera Sección: Imagen y texto debajo */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src="/parallax.jpg"
                alt="Nuestra Cocina"
                className="w-full h-auto md:h-96 object-cover rounded-lg shadow-lg mb-8"
              />
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Nuestra Filosofía Gastronómica
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  En Vivero 55, creemos en la conexión entre la naturaleza y la
                  gastronomía. Nuestros platos reflejan un profundo respeto por
                  los ingredientes locales y de temporada, transformándolos en
                  experiencias culinarias inolvidables.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Cada receta es una creación cuidadosamente elaborada por
                  nuestro chef, combinando técnicas tradicionales con toques
                  contemporáneos para resaltar los sabores auténticos de cada
                  ingrediente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Segunda Sección: Mesh Gradient con texto superpuesto */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-lg shadow-xl h-[500px]">
              {/* Mesh Gradient con clase CSS */}
              <div
                className={`absolute inset-0 w-full h-full ${styles.meshGradientAnimated}`}
              ></div>

              {/* Overlay con texto */}
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <h2 className="text-4xl font-bold mb-4">
                    Nuestras Especialidades
                  </h2>
                  <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                    Descubre platos únicos que fusionan tradición e innovación,
                    preparados con ingredientes frescos y de la más alta
                    calidad.
                  </p>
                  <Link
                    to="/restaurant"
                    className="inline-block border-2 border-white hover:bg-white/50 hover:text-black text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Ver Carta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tercera Sección: Texto y una imagen */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Un Entorno Único
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Nuestro restaurante está ubicado en un espacio privilegiado,
                  rodeado de vegetación y diseñado para ofrecerte una
                  experiencia multisensorial donde la gastronomía y la
                  naturaleza se unen.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  El ambiente tranquilo y acogedor es perfecto para cualquier
                  ocasión, desde una comida romántica hasta una celebración
                  especial con amigos y familia.
                </p>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                <img
                  src="/Vivero-6.jpg"
                  alt="Nuestro Ambiente"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
