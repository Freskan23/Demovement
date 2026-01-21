import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrimeraVisita = () => {
    return (
        <div className="bg-white min-h-screen pt-32">
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Tu Primera Visita</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            QUÉ ESPERAR EN TU<br /><span className="text-primary italic">PRIMERA CITA</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-gray-900 uppercase mb-12">LO QUE HAREMOS</h2>
                    <div className="space-y-6 mb-16">
                        {[
                            'Entrevista detallada sobre tu historial y objetivos',
                            'Evaluación de patrones de movimiento',
                            'Tests de fuerza y movilidad',
                            'Análisis de contexto biopsicosocial',
                            'Explicación del plan de acción propuesto'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span className="text-lg font-bold text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-black text-gray-900 uppercase mb-12">QUÉ TRAER</h2>
                    <div className="space-y-4 mb-16">
                        {[
                            'Ropa cómoda de entrenamiento',
                            'Informes médicos si los tienes (resonancias, analíticas, etc.)',
                            'Zapatillas de deporte'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-lg font-medium text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/reservar/valoracion-inicial" className="btn-primary">Reservar Mi Cita</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrimeraVisita;
