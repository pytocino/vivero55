import React, { useState } from "react";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Contact = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  // Estado para preguntas frecuentes
  const [openFAQ, setOpenFAQ] = useState(null);

  // Manejador de cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert(
      "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto."
    );
    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };

  // Preguntas frecuentes
  const faqs = [
    {
      pregunta: "¿Es necesario reservar mesa?",
      respuesta:
        "Aunque no es obligatorio, recomendamos reservar con antelación, especialmente para cenas de fin de semana y grupos de más de 4 personas.",
    },
    {
      pregunta: "¿Tienen opciones vegetarianas/veganas?",
      respuesta:
        "Sí, nuestra carta incluye opciones vegetarianas y veganas. Además, podemos adaptar muchos platos a necesidades dietéticas específicas si nos avisas con antelación.",
    },
    {
      pregunta: "¿Se puede celebrar eventos privados?",
      respuesta:
        "Disponemos de espacios para eventos privados como celebraciones, reuniones de empresa o presentaciones. Contáctanos para más información sobre capacidad y servicios adicionales.",
    },
    {
      pregunta: "¿Tienen parking?",
      respuesta:
        "Contamos con parking gratuito para clientes con capacidad limitada. También hay zonas de aparcamiento público cerca del establecimiento.",
    },
  ];

  return (
    <ParallaxProvider>
      <div className="bg-[#efe6d9]">
        {/* Hero Section */}
        <ParallaxBanner style={{ height: "60vh" }}>
          <ParallaxBannerLayer speed={-20}>
            <img
              src="/contact-hero.jpg"
              alt="Contacto Vivero 55"
              className="w-full h-full object-cover"
            />
          </ParallaxBannerLayer>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Contacto</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Estamos a tu disposición para cualquier consulta
              </p>
            </div>
          </div>
        </ParallaxBanner>

        {/* Información de contacto y formulario */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
              {/* Columna de información */}
              <div className="lg:w-2/5">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Información de Contacto
                </h2>

                <div className="space-y-8">
                  {/* Teléfono */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#567568]/10 rounded-full flex items-center justify-center mr-4 text-[#567568] flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        Teléfono
                      </h3>
                      <a
                        href="tel:+34661669115"
                        className="text-[#567568] hover:underline"
                      >
                        +34 661 669 115
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#567568]/10 rounded-full flex items-center justify-center mr-4 text-[#567568] flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        Email
                      </h3>
                      <a
                        href="mailto:info@vivero55.com"
                        className="text-[#567568] hover:underline"
                      >
                        info@vivero55.com
                      </a>
                    </div>
                  </div>

                  {/* Dirección */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#567568]/10 rounded-full flex items-center justify-center mr-4 text-[#567568] flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        Dirección
                      </h3>
                      <address className="not-italic text-gray-600">
                        Calle Artesanía, 11
                        <br />
                        30740 San Pedro del Pinatar
                        <br />
                        Murcia, España
                      </address>
                    </div>
                  </div>

                  {/* Horarios */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#567568]/10 rounded-full flex items-center justify-center mr-4 text-[#567568] flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        Horario
                      </h3>
                      <ul className="text-gray-600">
                        <li className="flex items-center">
                          <span className="w-24">Lunes</span>
                          <span className="italic text-gray-500">Cerrado</span>
                        </li>
                        <li className="flex flex-wrap">
                          <span className="w-24">Mar - Jue</span>
                          <span>16:00 - 00:00</span>
                        </li>
                        <li className="flex flex-wrap">
                          <span className="w-24">Vie - Sab</span>
                          <span>13:00 - 03:00</span>
                        </li>
                        <li className="flex flex-wrap">
                          <span className="w-24">Domingo</span>
                          <span>13:00 - 23:30</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="mt-12">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Síguenos
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/vivero55"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#567568] rounded-full flex items-center justify-center text-white hover:bg-[#3d5349] transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://facebook.com/vivero55"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#567568] rounded-full flex items-center justify-center text-white hover:bg-[#3d5349] transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://twitter.com/vivero55"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#567568] rounded-full flex items-center justify-center text-white hover:bg-[#3d5349] transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Columna del formulario */}
              <div className="lg:w-3/5">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Envíanos un mensaje
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="nombre"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#567568] focus:border-transparent transition"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#567568] focus:border-transparent transition"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="asunto"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#567568] focus:border-transparent transition"
                        placeholder="Asunto de tu mensaje"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#567568] focus:border-transparent transition"
                        placeholder="¿En qué podemos ayudarte?"
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#567568] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#3d5349] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#567568]"
                      >
                        Enviar mensaje
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Cómo llegar
              </h2>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.3358131784894!2d-0.7258660244570622!3d37.64130837201933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6318798c780687%3A0x5ce7d9ef57d1b5cf!2sVivero%2055!5e0!3m2!1ses!2ses!4v1741783879020!5m2!1ses!2ses"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Mapa ubicación Vivero 55"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Preguntas Frecuentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  >
                    <h3 className="text-lg font-medium text-gray-800">
                      {faq.pregunta}
                    </h3>
                    <div className="w-8 h-8 bg-[#567568]/10 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      {openFAQ === idx ? (
                        <ChevronUp size={18} className="text-[#567568]" />
                      ) : (
                        <ChevronDown size={18} className="text-[#567568]" />
                      )}
                    </div>
                  </button>

                  {openFAQ === idx && (
                    <div className="p-6 pt-0 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-600">{faq.respuesta}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-[#567568] rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                ¿Listo para visitarnos?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Haz tu reserva ahora y disfruta de una experiencia gastronómica
                única en el levante mediterráneo.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/+34661669115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#25D366] hover:bg-[#20BD5C] text-white px-6 py-3 rounded-lg transition-colors shadow-md"
                >
                  <Phone size={20} className="mr-2" />
                  Reservar ahora
                </a>
                <a
                  href="mailto:reservas@vivero55.com"
                  className="inline-flex items-center bg-white hover:bg-gray-100 text-[#567568] font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                  <Mail size={20} className="mr-2" />
                  Email para reservas
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
};

export default Contact;
