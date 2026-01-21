import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ComoFunciona = () => {
    const steps = [
        { num: '01', title: 'Contacto Inicial', desc: 'Rellenas el formulario o nos llamas. Te respondemos en menos de 24h.' },
        { num: '02', title: 'Valoración', desc: 'Realizamos una evaluación completa de tu situación: movimiento, fuerza, contexto.' },
        { num: '03', title: 'Plan de Acción', desc: 'Diseñamos un protocolo específico para ti con objetivos claros y medibles.' },
        { num: '04', title: 'Sesiones de Trabajo', desc: 'Ejecutamos el plan en sesiones supervisadas, ajustando según tu evolución.' },
        { num: '05', title: 'Alta y Mantenimiento', desc: 'Cuando alcanzas tus objetivos, te damos las herramientas para mantenerlo.' }
    ];

    return (
        <div className="bg-white min-h-screen pt-32">
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Proceso</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            CÓMO<br /><span className="text-primary italic">FUNCIONA</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <div key={i} className="flex gap-8 items-start">
                                <div className="text-6xl font-black text-primary/10">{step.num}</div>
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 uppercase mb-2">{step.title}</h3>
                                    <p className="text-gray-600 font-medium text-lg">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20 text-center">
                        <Link to="/reservar/valoracion-inicial" className="btn-primary">Empezar Ahora</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComoFunciona;
