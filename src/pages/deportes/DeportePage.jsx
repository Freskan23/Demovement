import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Activity, Clock, ChevronRight, Shield } from 'lucide-react';
import { deportes } from '../../data/siteData';

const DeportePage = () => {
    const { slug } = useParams();
    const deporte = deportes[slug];

    if (!deporte) return <Navigate to="/deportes" />;

    return (
        <div className="bg-white min-h-screen pt-32">
            {/* Hero */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link to="/deportes" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-8 hover:gap-4 transition-all">
                        <ChevronLeft size={16} />
                        Todos los Deportes
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-8">
                            <Activity size={14} />
                            <span>Readaptación Deportiva</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            {deporte.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            {deporte.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            {deporte.intro && (
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-xl text-gray-700 leading-relaxed font-medium">
                            {deporte.intro}
                        </p>
                    </div>
                </section>
            )}

            {/* Lesiones Comunes */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-16">LESIONES COMUNES EN {deporte.title.toUpperCase()}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {deporte.lesionesComunes.map((lesion, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-md rounded-[32px] p-10 border border-white/10"
                            >
                                <h3 className="text-2xl font-black uppercase mb-4">{lesion.nombre}</h3>
                                {lesion.prevalencia && (
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <Activity size={16} />
                                        <span className="font-bold text-sm">{lesion.prevalencia}</span>
                                    </div>
                                )}
                                {lesion.tiempoRecuperacion && (
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Clock size={16} />
                                        <span className="font-medium text-sm">Recuperación: {lesion.tiempoRecuperacion}</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programa de Prevención */}
            {deporte.programaPrevencion && (
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-8">PROGRAMA DE PREVENCIÓN</h2>
                                <p className="text-xl text-gray-600 mb-12 font-medium">
                                    Estrategias específicas para reducir el riesgo de lesión en {deporte.title.toLowerCase()}.
                                </p>
                                <div className="space-y-6">
                                    {deporte.programaPrevencion.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-10 h-10 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                                                <Shield size={18} />
                                            </div>
                                            <span className="text-lg font-bold text-gray-800">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-50 p-12 rounded-[50px]">
                                <h3 className="text-2xl font-black text-gray-900 uppercase mb-6">¿PRACTICAS {deporte.title.toUpperCase()}?</h3>
                                <p className="text-gray-600 font-medium mb-8">
                                    Ya sea que te hayas lesionado o quieras prevenirlo, podemos ayudarte a entrenar con garantías.
                                </p>
                                <Link
                                    to="/reservar/valoracion-inicial"
                                    className="block w-full text-center bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl"
                                >
                                    Solicitar Valoración
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Final */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                        VUELVE A DISFRUTAR DE TU DEPORTE
                    </h2>
                    <p className="text-xl text-white/80 mb-12 font-medium">
                        Si te has lesionado practicando {deporte.title.toLowerCase()}, podemos ayudarte a volver con confianza.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/reservar/valoracion-inicial"
                            className="bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl"
                        >
                            Pedir Cita
                        </Link>
                        <Link
                            to="/lesiones"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/20 transition-all"
                        >
                            Ver Lesiones
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeportePage;
