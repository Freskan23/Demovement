import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ChevronRight, MapPin, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/imagenes/hero/hero-image.jpg"
                        className="w-full h-full object-cover opacity-60"
                        alt="De Movement Readaptación"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                </div>

                <div className="relative z-20 max-w-[1240px] mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-[60px] md:text-[110px] font-black mb-8 tracking-tighter uppercase leading-[0.9] text-white">
                            ENTRENAR <br /> PARA <span className="text-primary italic">GANAR</span>
                        </h1>
                        <p className="text-xl md:text-[22px] text-gray-200 max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
                            Metodología eficiente. <br className="hidden md:block" />
                            Recupera tu rendimiento con ciencia y empatía.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="https://wa.me/34600000000" className="bg-primary text-white px-12 py-5 rounded-xl font-black text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 uppercase tracking-widest active:scale-95">
                                Empezar Ahora
                            </a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center space-x-4 text-white font-bold text-lg px-8 py-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all uppercase tracking-wider"
                            >
                                <img src="/imagenes/iconos/icon-play-video.svg" className="h-10 w-10" alt="Ver video" />
                                <span>CONOCER EL MÉTODO</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-white rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="py-32 bg-white">
                <div className="max-w-[1240px] mx-auto px-4">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.2em] text-[13px] block">Servicios de Readaptación</span>
                        <h2 className="text-4xl md:text-[64px] font-black text-gray-900 uppercase leading-none tracking-tighter">LESIONES COMUNES</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: 'Rodilla', slug: 'rodilla-lca', desc: 'Recuperación de LCA, menisco y tendón rotuliano con protocolos de carga segura.', icon: '/imagenes/iconos/icon-servicios-readaptacion.svg' },
                            { title: 'Espalda', slug: 'espalda-lumbalgia', desc: 'Alivio de lumbalgia y gestión de hernias discales a través del movimiento.', icon: '/imagenes/iconos/icon-servicios-entrenamiento.svg' },
                            { title: 'Hombro', slug: 'hombro-rotador', desc: 'Tratamiento de inestabilidad y lesiones del manguito rotador.', icon: '/imagenes/iconos/icon-servicios-grupos.svg' },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-[#F9F9F9] p-12 rounded-[40px] border border-gray-100 group transition-all hover:shadow-2xl hover:shadow-primary/10"
                            >
                                <div className="h-16 w-16 bg-primary rounded-2xl mb-10 flex items-center justify-center text-white shadow-xl shadow-primary/25 group-hover:rotate-6 transition-transform">
                                    <img src={service.icon} className="h-8 w-8 brightness-0 invert" alt={service.title} />
                                </div>
                                <h3 className="text-3xl font-black mb-5 uppercase text-gray-900 tracking-tighter">{service.title}</h3>
                                <p className="text-gray-500 mb-10 leading-relaxed font-semibold text-[17px]">{service.desc}</p>
                                <Link to={`/readaptacion/${service.slug}`} className="text-primary font-black flex items-center space-x-3 group-hover:translate-x-3 transition-transform uppercase text-[13px] tracking-widest">
                                    <span>Ver programa</span>
                                    <div className="bg-primary/10 p-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                        <ChevronRight size={16} />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials Placeholder */}
            <section className="py-32 bg-[#F4F4F4]">
                <div className="max-w-[1240px] mx-auto px-4">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.2em] text-[13px] block">Testimonios Reales</span>
                        <h2 className="text-4xl md:text-[64px] font-black text-gray-900 uppercase leading-none tracking-tighter">LO QUE DICEN DE NOSOTROS</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: 'Juanjo', img: '/imagenes/testimonios/testimonio-video-juanjo.jpg' },
                            { name: 'Patricia', img: '/imagenes/testimonios/testimonio-video-patricia.jpg' },
                        ].map((test, i) => (
                            <div key={i} className="relative aspect-video rounded-[40px] overflow-hidden group cursor-pointer shadow-xl">
                                <img src={test.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={test.name} />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <img src="/imagenes/iconos/icon-play-video.svg" className="h-[72px] w-[72px] drop-shadow-2xl" alt="Reproducir" />
                                </div>
                                <div className="absolute bottom-8 left-8">
                                    <span className="text-white font-black uppercase tracking-widest text-xl">{test.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Local Section */}
            <section className="py-40 bg-white">
                <div className="max-w-[1000px] mx-auto px-4 text-center">
                    <div className="inline-flex items-center space-x-3 bg-primary/5 px-6 py-3 rounded-full mb-10 border border-primary/10">
                        <MapPin size={18} className="text-primary" />
                        <span className="text-primary font-black text-sm uppercase tracking-widest">Las Rozas de Madrid</span>
                    </div>
                    <h2 className="text-5xl md:text-[80px] font-black mb-10 text-gray-900 uppercase leading-[0.95] tracking-tighter">
                        EL CENTRO DE LOS VECINOS DE <span className="text-primary italic">LAS ROZAS</span>
                    </h2>
                    <p className="text-[22px] text-gray-600 mb-16 font-medium leading-[1.6] max-w-4xl mx-auto">
                        Situados en el corazón de **Las Rozas**, ofrecemos el mejor servicio de readaptación de la zona Noroeste. Estamos a tan solo **5 minutos de Majadahonda**, facilitando que recuperes tu salud sin largos desplazamientos.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {[
                            { t: 'Atención 1 a 1', d: 'Programas totalmente individualizados centrados solo en ti.' },
                            { t: 'Base Científica', d: 'Protocolos validados por las últimas investigaciones.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#111111] p-12 rounded-[32px] shadow-2xl transition-all hover:-translate-y-2">
                                <h4 className="text-primary font-black text-2xl mb-4 uppercase italic tracking-tighter">{item.t}</h4>
                                <p className="text-gray-400 font-medium text-lg leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
