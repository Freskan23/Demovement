import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Activity, MapPin } from 'lucide-react';
import { injuries } from '../data/injuries';

const InjuryPage = () => {
    const { slug } = useParams();
    const injury = injuries[slug];

    if (!injury) return <Navigate to="/" />;

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section - Branding de fidelidad */}
            <section className="relative h-[50vh] flex items-center overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0 opacity-30">
                    <img
                        src={injury.heroImage}
                        className="w-full h-full object-cover grayscale"
                        alt={injury.title}
                    />
                    <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full text-white text-xs font-black uppercase tracking-widest mb-6">
                            <Activity size={14} />
                            <span>Readaptación Especializada</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase text-white tracking-tighter">
                            {injury.title} <br />
                            <span className="text-white/80">{injury.subtitle}</span>
                        </h1>
                        <p className="flex items-center justify-center md:justify-start text-white/90 font-bold uppercase tracking-tight">
                            <MapPin size={18} className="mr-2" />
                            Sede Las Rozas | A 5 minutos de Majadahonda
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-16">
                        <div>
                            <h2 className="text-3xl font-black mb-6 uppercase text-gray-900">El Plan de Recuperación</h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                {injury.content.intro}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {injury.content.whyUs.map((item, i) => (
                                <div key={i} className="p-10 bg-[#F9F9F9] rounded-[32px] border border-gray-100 hover:shadow-xl transition-all">
                                    <h4 className="text-primary text-xl font-black mb-4 uppercase">{item.title}</h4>
                                    <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#1A1A1A] p-12 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full translate-x-10 -translate-y-10" />
                            <h3 className="text-3xl font-black mb-10 uppercase italic">Fases de Trabajo</h3>
                            <div className="space-y-8 relative z-10">
                                {injury.content.process.map((step, i) => (
                                    <div key={i} className="flex items-start space-x-6 group">
                                        <div className="bg-primary text-white font-black h-10 w-10 rounded-2xl flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black text-xl mb-2 uppercase">{step.title}</h4>
                                            <p className="text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-10 rounded-[40px] sticky top-28 border border-gray-100 shadow-2xl">
                            <h3 className="text-2xl font-black mb-6 uppercase text-gray-900">Agenda tu Valoración</h3>
                            <p className="text-gray-500 mb-10 font-medium uppercase text-sm tracking-tighter">Sesiones 100% personalizadas en Las Rozas.</p>

                            <div className="space-y-5 mb-10">
                                {[
                                    'Ciencia y Evidencia',
                                    'Atención Directa',
                                    'Resultados Deportivos',
                                    'Fácil Aparcamiento'
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center space-x-3 text-sm font-bold text-gray-700">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                        <span className="uppercase">{text}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://wa.me/34600000000"
                                className="block w-full text-center bg-primary text-white py-4 rounded-xl font-black uppercase hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                            >
                                Hablar con Readaptador
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InjuryPage;
