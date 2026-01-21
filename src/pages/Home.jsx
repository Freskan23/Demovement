import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4341EC] via-[#5951F0] to-[#4E36A3]">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-8 text-white leading-[0.9] tracking-tighter uppercase">
                            ENTRENAR PARA<br />
                            SER <span className="relative inline-block text-white italic">
                                CAPAZ
                                <svg className="absolute -bottom-4 left-0 w-full h-4 text-white" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                                    <path d="M0 10 Q50 0, 100 10 T200 10" stroke="currentColor" strokeWidth="4" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <div className="max-w-4xl mx-auto space-y-8 mb-16">
                            <p className="text-xl md:text-3xl text-white font-bold tracking-tight uppercase">
                                READAPTACIÓN AVANZADA, ENTRENAMIENTO Y GRUPOS REDUCIDOS EN LAS ROZAS.
                            </p>
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium max-w-2xl mx-auto">
                                Metodología eficiente, ciencia y empatía acompañándote en cada fase del camino. Porque tu bienestar es nuestro máximo compromiso.
                            </p>
                        </div>

                        <a
                            href="#formulario-home"
                            className="inline-block bg-white text-primary px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-widest"
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
                    <img src="/imagenes/iconos/icon-whatsapp-button.png" alt="WhatsApp" className="w-16 h-16 drop-shadow-2xl" />
                </a>
            </section>

            {/* ¿Para qué quieres entrenar? */}
            <section className="py-32 bg-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-7xl font-black mb-10 text-gray-900 uppercase leading-none tracking-tighter">
                        Y TÚ, ¿PARA QUÉ QUIERES <br />
                        <span className="text-primary italic relative">
                            ENTRENAR?
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                                <path d="M0 5 Q50 0, 100 5 T200 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
                        Recuerda que no todo el mundo entrena para cambiar su físico. Muchos buscamos <strong className="text-gray-900">calmar nuestra mente, hacernos más fuertes, volver a ser libres</strong> recuperando nuestra libertad de movimiento.
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
            <section className="py-32 bg-gray-50/50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Excelencia en el Servicio</span>
                            <h2 className="text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">NUESTROS SERVICIOS</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                                className="bg-white p-12 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group"
                            >
                                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all">
                                    <img src={service.icon} className="w-10 h-10 group-hover:brightness-0 group-hover:invert" alt={service.title} />
                                </div>
                                <h3 className="text-3xl font-black mb-6 text-gray-900 uppercase tracking-tighter leading-none">{service.title}</h3>
                                <p className="text-gray-600 mb-10 leading-relaxed font-medium text-lg">{service.desc}</p>
                                <Link
                                    to="/servicios"
                                    className="text-primary font-black flex items-center gap-3 hover:gap-5 transition-all uppercase tracking-widest text-sm"
                                >
                                    Ver más <ChevronRight size={20} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ¿Por qué De Movement? */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-24 text-gray-900 uppercase tracking-tighter leading-[0.9]">
                        ¿POR QUÉ NUESTROS USUARIOS <br /> PREFIEREN <span className="text-primary italic">DE MOVEMENT?</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {[
                            { title: 'Profesionales', desc: 'titulados y colegiados con amplia experiencia' },
                            { title: 'Recuperación de la función', desc: 'y fortalecimiento de las estructuras para ayudarte a ser libre y autónomo.' },
                            { title: 'Trato Cercano', desc: 'entrenamientos individualizados y adaptados a tu contexto.' },
                            { title: 'Espacio Seguro', desc: 'espacio libre de juicios y sin aglomeraciones agobiantes.' },
                            { title: 'Especialización', desc: 'expertos en readaptación de personas con lesiones.' },
                            { title: 'Atención Integral', desc: 'análisis de patrones de movimiento y contexto biopsicosocial.' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="font-black text-xl text-gray-900 mb-3 uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-gray-600 text-[17px] leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="py-32 bg-[#F8F8F8]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 uppercase tracking-tighter">
                            HISTORIAS REALES
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                            No trabajamos con números, trabajamos con personas. Cada historia que acompañamos es una victoria compartida.
                        </p>
                    </div>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                        {[
                            { num: '+7', label: 'años de experiencia' },
                            { num: '+300', label: 'personas readaptadas' },
                            { num: '95%', label: 'tasa de éxito' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-12 bg-white rounded-[40px] shadow-sm border border-gray-100">
                                <div className="text-7xl font-black text-primary mb-4 tracking-tighter">{stat.num}</div>
                                <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Videos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <img src="/imagenes/iconos/icon-play-video.svg" className="w-10 h-10" alt="Play" />
                                    </div>
                                </div>
                                <div className="absolute bottom-10 left-10">
                                    <span className="text-white font-black text-2xl uppercase tracking-tighter drop-shadow-md">{test.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulario */}
            <section id="formulario-home" className="py-32 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Primer Paso</span>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tighter">CONTÁCTANOS</h2>
                        <p className="text-xl text-gray-500 font-medium">Contestamos en menos de 6 horas laborables.</p>
                    </div>

                    <form className="space-y-8 p-12 bg-gray-50 rounded-[40px] border border-gray-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Nombre y Apellido*</label>
                                <input type="text" className="w-full px-6 py-5 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none transition-all" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Email*</label>
                                <input type="email" className="w-full px-6 py-5 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none transition-all" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">¿Tienes alguna lesión?*</label>
                                <input type="text" className="w-full px-6 py-5 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none transition-all" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Teléfono*</label>
                                <input type="tel" className="w-full px-6 py-5 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none transition-all" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Mensaje</label>
                            <textarea rows="5" className="w-full px-6 py-5 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"></textarea>
                        </div>

                        <div className="flex items-center gap-4 ml-4">
                            <input type="checkbox" id="privacy" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" required />
                            <label htmlFor="privacy" className="text-sm font-bold text-gray-600">Acepto la <Link to="/privacidad" className="text-primary underline">Política de privacidad</Link></label>
                        </div>

                        <button type="submit" className="w-full btn-primary py-6 text-xl">
                            Enviar Solicitud
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
