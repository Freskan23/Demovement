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
        <div className="pt-20 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
                    <img
                        src={injury.heroImage}
                        className="w-full h-full object-cover opacity-50"
                        alt={injury.title}
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/20 px-3 py-1 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6">
                            <Activity size={14} />
                            <span>Readaptación de Lesiones</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-4 italic uppercase tracking-tighter">
                            {injury.title} <br />
                            <span className="text-accent">{injury.subtitle}</span>
                        </h1>
                        <p className="flex items-center text-gray-400 font-medium">
                            <MapPin size={18} className="text-accent mr-2" />
                            Las Rozas | A 5 minutos de Majadahonda
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tight">Nuestro Enfoque</h2>
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                {injury.content.intro}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {injury.content.whyUs.map((item, i) => (
                                <div key={i} className="p-8 border border-white/5 rounded-3xl hover:border-accent/30 transition-colors">
                                    <h4 className="text-white text-xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/5 p-10 rounded-3xl border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full translate-x-10 -translate-y-10" />
                            <h3 className="text-2xl font-black mb-8 uppercase italic">Fases de la Readaptación</h3>
                            <div className="space-y-6">
                                {injury.content.process.map((step, i) => (
                                    <div key={i} className="flex items-start space-x-4">
                                        <div className="bg-accent text-black font-black h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{step.title}</h4>
                                            <p className="text-gray-400">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="glass p-8 rounded-3xl sticky top-28">
                            <h3 className="text-2xl font-black mb-4 italic uppercase">¿Empezamos?</h3>
                            <p className="text-gray-400 mb-8">No esperes a que el dolor se vuelva crónico. Reserva tu valoración gratuita hoy mismo.</p>

                            <div className="space-y-4 mb-8">
                                {[
                                    '100% Individualizado',
                                    'Fisioterapia Avanzada',
                                    'Vuelta Segura al Deporte',
                                    'Ubicación Premium'
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center space-x-3 text-sm text-gray-300">
                                        <CheckCircle2 size={18} className="text-accent" />
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://wa.me/34600000000"
                                className="block w-full text-center bg-accent text-black py-4 rounded-2xl font-black uppercase hover:bg-accent-light transition-all shadow-lg"
                            >
                                Solicitar Cita
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InjuryPage;
