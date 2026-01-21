import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4341EC] via-[#4E36A3] to-[#3B2A8A]">
                {/* Patrón de fondo sutil */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 text-white leading-tight tracking-tighter uppercase">
                            ENTRENAR PARA<br />
                            SER <span className="relative inline-block text-white italic">
                                CAPAZ
                                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-2 md:h-4 text-white/50" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                                    <path d="M0 10 Q50 0, 100 10 T200 10" stroke="currentColor" strokeWidth="4" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 mb-12 md:mb-16">
                            <p className="text-lg sm:text-xl md:text-3xl text-white font-bold tracking-tight uppercase">
                                READAPTACIÓN AVANZADA, ENTRENAMIENTO Y GRUPOS REDUCIDOS EN LAS ROZAS.
                            </p>
                            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-medium max-w-2xl mx-auto hidden sm:block">
                                Metodología eficiente, ciencia y empatía acompañándote en cada fase del camino. Tu bienestar es nuestro máximo compromiso.
                            </p>
                        </div>

                        <a
                            href="#formulario-home"
                            className="inline-block bg-white text-[#4341EC] px-10 py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-widest"
                        >
                            Contacta ahora
                        </a>
                    </motion.div>
                </div>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/34690285023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 transition-transform hover:scale-110 active:scale-95"
                >
                    <img src="/imagenes/iconos/icon-whatsapp-button.png" alt="WhatsApp" className="w-14 h-14 md:w-16 md:h-16 drop-shadow-2xl" />
                </a>
            </section>

            {/* ¿Para qué quieres entrenar? */}
            <section className="py-24 md:py-32 bg-white relative z-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-7xl font-black mb-10 text-gray-900 uppercase leading-none tracking-tighter">
                        Y TÚ, ¿PARA QUÉ QUIERES <br />
                        <span className="text-[#4341EC] italic relative">
                            ENTRENAR?
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
                        No todo el mundo entrena para cambiar su físico. Muchos buscamos <strong className="text-gray-900">calmar nuestra mente, hacernos más fuertes, volver a ser libres</strong> recuperando nuestra libertad de movimiento.
                    </p>
                    <a
                        href="#formulario-home"
                        className="btn-primary"
                    >
                        Empezar mi cambio
                    </a>
                </div>
            </section>

            {/* Nuestros Servicios */}
            <section className="py-24 md:py-32 bg-gray-50 relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center md:text-left mb-16 md:mb-20">
                        <span className="text-[#4341EC] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Excelencia en el Servicio</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">NUESTROS SERVICIOS</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {[
                            {
                                title: 'Readaptación de lesiones',
                                desc: 'Fortalece tus estructuras, recupera su función y vuelve a sentirte libre.',
                                icon: '/imagenes/iconos/icon-servicios-readaptacion.svg'
                            },
                            {
                                title: 'Entrenamiento personal',
                                desc: 'Aprende a entrenar y mejora todas tus capacidades físicas en un espacio íntimo.',
                                icon: '/imagenes/iconos/icon-servicios-entrenamiento.svg'
                            },
                            {
                                title: 'Grupos reducidos',
                                desc: 'Mejora tu adherencia, ponte muy fuerte y disfruta entrenando acompañado.',
                                icon: '/imagenes/iconos/icon-servicios-grupos.svg'
                            },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -12 }}
                                className="bg-white p-10 md:p-12 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4341EC]/5 rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:bg-[#4341EC] group-hover:text-white transition-all">
                                    <img src={service.icon} className="w-8 h-8 md:w-10 md:h-10 group-hover:brightness-0 group-hover:invert" alt={service.title} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-gray-900 uppercase tracking-tighter leading-none">{service.title}</h3>
                                <p className="text-gray-600 mb-8 md:mb-10 leading-relaxed font-medium text-lg">{service.desc}</p>
                                <Link
                                    to="/servicios"
                                    className="text-[#4341EC] font-black flex items-center gap-3 hover:gap-5 transition-all uppercase tracking-widest text-sm"
                                >
                                    Ver más <ChevronRight size={20} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="py-24 md:py-32 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 uppercase tracking-tighter leading-none">
                            HISTORIAS REALES
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                            No trabajamos con números, trabajamos con personas. Cada historia es una victoria compartida.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {[
                            { name: 'Juanjo', img: '/imagenes/testimonios/testimonio-video-juanjo.jpg' },
                            { name: 'Mamen', img: '/imagenes/testimonios/testimonio-video-mamen.jpg' },
                            { name: 'Patricia', img: '/imagenes/testimonios/testimonio-video-patricia.jpg' },
                            { name: 'David', img: '/imagenes/testimonios/testimonio-video-david.jpg' },
                        ].map((test, i) => (
                            <div key={i} className="relative aspect-video rounded-[32px] overflow-hidden group cursor-pointer shadow-xl border-4 border-white">
                                <img
                                    src={test.img}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt={`Testimonio de ${test.name}`}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                        <img src="/imagenes/iconos/icon-play-video.svg" className="w-8 h-8 md:w-10 md:h-10" alt="Play" />
                                    </div>
                                </div>
                                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10">
                                    <span className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter drop-shadow-md">{test.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulario */}
            <section id="formulario-home" className="py-24 md:py-32 bg-gray-50 relative z-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-12 md:mb-20">
                        <span className="text-[#4341EC] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Contacto</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tighter">ESCRÍBENOS</h2>
                        <p className="text-lg md:text-xl text-gray-500 font-medium font-semibold italic">Contestamos en menos de 6 horas.</p>
                    </div>

                    <form className="space-y-6 md:space-y-8 p-8 md:p-12 bg-white rounded-[40px] border border-gray-100 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Nombre*</label>
                                <input type="text" className="w-full px-6 py-4 bg-gray-50 border-0 rounded-2xl shadow-inner focus:ring-4 focus:ring-[#4341EC]/10 outline-none transition-all" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Email*</label>
                                <input type="email" className="w-full px-6 py-4 bg-gray-50 border-0 rounded-2xl shadow-inner focus:ring-4 focus:ring-[#4341EC]/10 outline-none transition-all" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Mensaje</label>
                            <textarea rows="4" className="w-full px-6 py-4 bg-gray-50 border-0 rounded-2xl shadow-inner focus:ring-4 focus:ring-[#4341EC]/10 outline-none transition-all resize-none"></textarea>
                        </div>

                        <button type="submit" className="w-full btn-primary py-5 text-lg">
                            Enviar Solicitud
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
