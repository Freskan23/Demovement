import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Activity, ChevronLeft } from 'lucide-react';
import { servicios } from '../../data/siteData';

const ServicioPage = () => {
    const { slug } = useParams();
    const servicio = servicios[slug];

    if (!servicio) return <Navigate to="/servicios" />;

    return (
        <div className="bg-white min-h-screen pt-32">
            {/* Hero */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
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
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            {servicio.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-12">¿QUÉ INCLUYE?</h2>
                            <div className="space-y-6">
                                {servicio.features.map((feature, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shrink-0 shadow-lg">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-lg font-bold text-gray-800">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gray-900 text-white p-12 rounded-[50px]">
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-6">¿TE INTERESA?</h3>
                            <p className="text-gray-400 font-medium mb-10">
                                Solicita tu valoración inicial y comenzamos a trabajar juntos en tu objetivo.
                            </p>
                            <a href="/reservar/valoracion-inicial" className="block w-full text-center bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl">
                                Reservar Valoración
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicioPage;
