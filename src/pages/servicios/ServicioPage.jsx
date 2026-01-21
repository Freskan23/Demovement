import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Activity, ChevronLeft, Clock, Euro, ChevronRight } from 'lucide-react';
import { servicios } from '../../data/siteData';

const ServicioPage = () => {
    const { slug } = useParams();
    const servicio = servicios[slug];

    if (!servicio) return <Navigate to="/servicios" />;

    return (
        <div className="bg-white min-h-screen pt-32">
            {/* Hero */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link to="/servicios" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-8 hover:gap-4 transition-all">
                        <ChevronLeft size={16} />
                        Todos los Servicios
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">{servicio.subtitle}</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            {servicio.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl mb-10">
                            {servicio.description}
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-2 text-gray-500">
                                <Clock size={20} className="text-primary" />
                                <span className="font-bold">{servicio.duracionSesion}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <Euro size={20} className="text-primary" />
                                <span className="font-bold">{servicio.precio}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Descripción Larga */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                        {servicio.longDescription}
                    </p>
                </div>
            </section>

            {/* Metodología */}
            {servicio.metodologia && (
                <section className="py-24 bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-16">NUESTRA METODOLOGÍA</h2>
                        <div className="space-y-12">
                            {servicio.metodologia.map((fase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-white/5 backdrop-blur-md rounded-[32px] p-10 border border-white/10"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                                        <div className="text-primary font-black text-5xl opacity-50">{(i + 1).toString().padStart(2, '0')}</div>
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                                <h3 className="text-2xl font-black uppercase tracking-tight">{fase.fase}</h3>
                                                <span className="text-primary font-bold text-sm uppercase tracking-widest">{fase.duracion}</span>
                                            </div>
                                            <p className="text-gray-300 font-medium text-lg mb-6">{fase.desc}</p>
                                            {fase.objetivos && (
                                                <div className="flex flex-wrap gap-3">
                                                    {fase.objetivos.map((obj, j) => (
                                                        <span key={j} className="px-4 py-2 bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                                                            {obj}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Beneficios */}
            {servicio.beneficios && (
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-12">BENEFICIOS</h2>
                                <div className="space-y-6">
                                    {servicio.beneficios.map((beneficio, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shrink-0 shadow-lg">
                                                <Check size={16} strokeWidth={3} />
                                            </div>
                                            <span className="text-lg font-bold text-gray-800">{beneficio}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-12">¿PARA QUIÉN?</h2>
                                <div className="space-y-4">
                                    {servicio.paraQuien.map((quien, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <ChevronRight size={20} className="text-primary shrink-0 mt-1" />
                                            <span className="text-lg font-medium text-gray-700">{quien}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Lesiones Comunes (para recuperación) */}
            {servicio.lesionesComunes && (
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-12">LESIONES QUE TRATAMOS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {servicio.lesionesComunes.map((lesion, i) => (
                                <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-black text-gray-900 uppercase mb-4">{lesion.nombre}</h3>
                                    <p className="text-gray-600 font-medium">{lesion.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Contenido Valoración */}
            {servicio.contenido && (
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-12">¿QUÉ INCLUYE LA VALORACIÓN?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {servicio.contenido.map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-black text-gray-900 uppercase">{item.test}</h3>
                                        <span className="text-primary font-bold text-sm">{item.duracion}</span>
                                    </div>
                                    <p className="text-gray-600 font-medium text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        {servicio.entregables && (
                            <div className="mt-16">
                                <h3 className="text-2xl font-black text-gray-900 uppercase mb-8">LO QUE RECIBES</h3>
                                <div className="flex flex-wrap gap-4">
                                    {servicio.entregables.map((item, i) => (
                                        <span key={i} className="px-6 py-3 bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs rounded-full">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* CTA Final */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">¿EMPEZAMOS?</h2>
                    <p className="text-xl text-white/80 mb-12 font-medium">
                        Reserva tu valoración inicial y damos el primer paso juntos.
                    </p>
                    <Link
                        to="/reservar/valoracion-inicial"
                        className="inline-block bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl"
                    >
                        Reservar Ahora
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicioPage;
