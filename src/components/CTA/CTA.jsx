import React from "react";
import { Clock, MessageCircle, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-[#567568]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">
            Horarios y Reservas
          </h2>

          {/* Contenedor principal con flex en escritorio */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Columna del horario */}
            <div className="p-8 md:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#567568]/20 flex items-center justify-center mr-4">
                  <Clock size={24} stroke="#567568" />
                </div>
                <h3 className="text-2xl font-medium text-gray-800">Horario</h3>
              </div>
              <ul className="space-y-4 text-gray-600 pl-1 max-w-md mx-auto">
                <li className="flex items-center">
                  <span className="w-24 font-medium">Lunes</span>
                  <span className="text-gray-500 italic">Cerrado</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="w-24 font-medium">Mar - Jue</span>
                  <span className="text-gray-800">16:00 - 00:00</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="w-24 font-medium">Vie - Sab</span>
                  <span className="text-gray-800">13:00 - 03:00</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="w-24 font-medium">Domingo</span>
                  <span className="text-gray-800">13:00 - 23:30</span>
                </li>
              </ul>
            </div>

            {/* Columna de la CTA */}
            <div className="md:w-1/2 bg-gradient-to-r from-[#567568]/90 to-[#567568] p-6 text-center flex flex-col justify-center">
              <p className="text-white mb-5 max-w-2xl mx-auto">
                Reserva tu mesa con antelación para garantizar la mejor
                experiencia gastronómica en Vivero 55
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/+34661669115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#25D366] hover:bg-[#20BD5C] text-white px-6 py-3 rounded-lg transition-colors shadow-md"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Reservar por WhatsApp
                </a>

                <a
                  href="tel:+34661669115"
                  className="inline-flex items-center bg-white hover:bg-gray-100 text-[#567568] font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                  <Phone size={20} className="mr-2" />
                  Llamar para reservar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
