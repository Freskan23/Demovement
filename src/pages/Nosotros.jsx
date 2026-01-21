import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Activity, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Nosotros = () => {
    return (
        <div className="bg-white min-h-screen pt-32">
            {/* Hero */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Quiénes Somos</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            CIENCIA Y EMPATÍA AL<br />
                            <span className="text-primary italic">SERVICIO DE TU CUERPO</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            En DE MOVEMENT creemos que el movimiento es la mejor medicina. Somos un centro de especialización en readaptación deportiva, dedicados a ayudarte a recuperar tu libertad de movimiento.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Activity className="w-8 h-8" />,
                                title: 'Ciencia',
                                desc: 'Basamos nuestro trabajo en la evidencia científica más actual. Cada decisión tiene un porqué.'
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: 'Rigor',
                                desc: 'Profesionales colegiados con formación continua y colaboración con el ámbito médico.'
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: 'Empatía',
                                desc: 'Entendemos que detrás de cada lesión hay una persona con objetivos y preocupaciones únicas.'
                            }
                        ].map((valor, i) => (
                            <div key={i} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                    {valor.icon}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 uppercase mb-4">{valor.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">{valor.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">¿QUIERES CONOCERNOS?</h2>
                    <p className="text-xl text-gray-400 mb-12 font-medium">Descubre a nuestro equipo y nuestras instalaciones.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/equipo" className="btn-primary">Conocer al Equipo</Link>
                        <Link to="/instalaciones" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white/20 transition-all">Ver Instalaciones</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Nosotros;
