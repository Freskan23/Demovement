import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section - Fondo azul gradiente como el original */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4341EC] via-[#5951F0] to-[#4E36A3]">
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
                            ENTRENAR PARA<br />
                            SER <span className="relative inline-block">
                                CAPAZ
                                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                                    <path d="M0 6 Q50 0, 100 6 T200 6" stroke="white" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <div className="max-w-3xl mx-auto space-y-6 mb-10">
                            <p className="text-xl md:text-2xl text-white font-semibold">
                                READAPTACIÓN AVANZADA, ENTRENAMIENTO Y GRUPOS REDUCIDOS<br />
                                EN LAS ROZAS.
                            </p>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                Metodología eficiente, ciencia, empatía y un equipo experto que te acompaña en cada fase del camino.
                            </p>
                            <p className="text-lg md:text-xl text-white/90 italic">
                                Porque tu bienestar es nuestro máximo compromiso.
                            </p>
                        </div>

                        <a
                            href="#formulario-home"
                            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:scale-105 active:scale-95"
                        >
                            Contacta ahora
                        </a>
                    </motion.div>
                </div>

                {/* Botón de WhatsApp flotante */}
                <a
                    href="https://wa.me/34690285023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
                >
                    <img src="/imagenes/iconos/icon-whatsapp-button.png" alt="WhatsApp" className="w-12 h-12" />
                </a>
            </section>

            {/* Sección: ¿Para qué quieres entrenar? */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        Y TÚ, ¿PARA QUÉ QUIERES <span className="relative inline-block">
                            ENTRENAR?
                            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                                <path d="M0 4 Q50 0, 100 4 T200 4" stroke="#4341EC" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Recuerda que no todo el mundo entrena para cambiar su físico. Muchos buscamos <strong>calmar nuestra mente, hacernos más fuertes, volver a ser libres</strong> recuperando nuestra libertad de movimiento.
                    </p>
                    <a
                        href="#formulario-home"
                        className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:scale-105"
                    >
                        Contacta ahora
                    </a>
                </div>
            </section>

            {/* Sección: Nuestros Servicios */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                        NUESTROS SERVICIOS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Readaptación de lesiones',
                                desc: 'Fortalece tus estructuras, recupera su función y vuelve a sentirte libre.',
                                icon: '/imagenes/iconos/icon-servicios-readaptacion.svg',
                                link: '/servicios'
                            },
                            {
                                title: 'Entrenamiento personal',
                                desc: 'Aprende a entrenar y mejora todas tus capacidades físicas en un espacio más íntimo.',
                                icon: '/imagenes/iconos/icon-servicios-entrenamiento.svg',
                                link: '/servicios'
                            },
                            {
                                title: 'Grupos reducidos',
                                desc: 'Mejora tu adherencia, ponte muy fuerte y disfruta entrenando acompañado.',
                                icon: '/imagenes/iconos/icon-servicios-grupos.svg',
                                link: '/servicios'
                            },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <img src={service.icon} className="w-8 h-8" alt={service.title} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                                <Link
                                    to={service.link}
                                    className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
                                >
                                    Ver más <ChevronRight size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="#formulario-home"
                            className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-all shadow-lg"
                        >
                            Empieza hoy
                        </a>
                    </div>
                </div>
            </section>

            {/* Sección: ¿Por qué De Movement? */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                        ¿POR QUÉ NUESTROS USUARIOS PREFIEREN DE MOVEMENT?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Profesionales',
                                desc: 'titulados y colegiados con amplia experiencia'
                            },
                            {
                                title: 'Recuperación de la función',
                                desc: 'y fortalecimiento de las estructuras para ayudarte a ser libre y autónomo en tu movimiento.'
                            },
                            {
                                title: 'Entrenamientos individualizados',
                                desc: 'y adaptados, siempre con un trato cercano.'
                            },
                            {
                                title: 'Espacio libre de juicios',
                                desc: 'y sin aglomeraciones.'
                            },
                            {
                                title: 'Especialistas en readaptación',
                                desc: 'de personas con lesiones mediante el movimiento.'
                            },
                            {
                                title: 'Análisis de patrones de movimiento',
                                desc: 'y rangos de fuerza, con una atención integral a tu contexto biopsicosocial.'
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                                    <Check size={14} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="#formulario-home"
                            className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-all shadow-lg"
                        >
                            Entrena con nosotros
                        </a>
                    </div>
                </div>
            </section>

            {/* Sección: Testimonios */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
                        Testimonios que nos recuerdan por qué hacemos lo que hacemos
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        En DE MOVEMENT no trabajamos con números, trabajamos con personas. Cada historia que acompañamos es única.
                    </p>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            { num: '+7', label: 'años de experiencia' },
                            { num: '+300', label: 'personas readaptadas' },
                            { num: '95%', label: 'de tasa de retención' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl font-bold text-primary mb-2">{stat.num}</div>
                                <div className="text-gray-600 font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Videos de testimonios */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {[
                            { name: 'Juanjo', img: '/imagenes/testimonios/testimonio-video-juanjo.jpg' },
                            { name: 'Mamen', img: '/imagenes/testimonios/testimonio-video-mamen.jpg' },
                            { name: 'Patricia', img: '/imagenes/testimonios/testimonio-video-patricia.jpg' },
                            { name: 'David', img: '/imagenes/testimonios/testimonio-video-david.jpg' },
                        ].map((test, i) => (
                            <div key={i} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                                <img
                                    src={test.img}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    alt={`Testimonio de ${test.name}`}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <img src="/imagenes/iconos/icon-play-video.svg" className="w-8 h-8" alt="Play" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-white font-bold text-lg">{test.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a
                            href="#formulario-home"
                            className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-all shadow-lg"
                        >
                            Quiero ser el siguiente
                        </a>
                    </div>
                </div>
            </section>

            {/* Sección: Formulario de Contacto */}
            <section id="formulario-home" className="py-20 bg-white">
                <div className="max-w-2xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Escríbenos</h2>
                        <p className="text-gray-600">Nuestro equipo contesta en menos de 6 horas</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Nombre y Apellido*
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email*
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                ¿Tienes alguna lesión?*
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Teléfono*
                            </label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Mensaje
                            </label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                                placeholder="Déjanos tu mensaje"
                            ></textarea>
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                                required
                            />
                            <label htmlFor="privacy" className="text-sm text-gray-600">
                                He leído y acepto la <a href="/politica-de-privacidad" className="text-primary underline">Política de privacidad</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:scale-[1.02] active:scale-95"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </section>

            {/* Sección: ¿Te ayudamos? */}
            <section className="py-20 bg-gradient-to-br from-primary via-[#5951F0] to-primary-dark text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Te ayudamos?</h2>
                    <p className="text-xl mb-10 leading-relaxed opacity-90">
                        Nuestro equipo estará siempre a tu disposición: abierto a escucharte, comprender tu contexto y proponerte el camino más adecuado para ti.
                    </p>
                    <a
                        href="/contacto"
                        className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:scale-105"
                    >
                        Contáctanos
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
