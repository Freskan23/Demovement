import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PreciosIndex = () => {
    const planes = [
        {
            name: 'Valoración Inicial',
            price: 'Consultar',
            description: 'Evaluación completa de tu situación actual.',
            features: ['Análisis de movimiento', 'Evaluación de fuerza', 'Informe detallado', 'Plan de acción']
        },
        {
            name: 'Sesión Individual',
            price: 'Consultar',
            description: 'Sesión de readaptación o entrenamiento personal.',
            features: ['1 hora de sesión', 'Atención personalizada', 'Seguimiento de progreso']
        },
        {
            name: 'Bono 10 Sesiones',
            price: 'Consultar',
            description: 'Pack de sesiones con ahorro significativo.',
            features: ['10 sesiones', 'Caducidad 3 meses', 'Precio preferente', 'Seguimiento continuo']
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32">
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Tarifas</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            INVERSIÓN EN TU<br /><span className="text-primary italic">SALUD</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {planes.map((plan, i) => (
                            <div key={i} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-2xl transition-all">
                                <h3 className="text-2xl font-black text-gray-900 uppercase mb-2">{plan.name}</h3>
                                <div className="text-3xl font-black text-primary mb-4">{plan.price}</div>
                                <p className="text-gray-600 font-medium mb-8">{plan.description}</p>
                                <ul className="space-y-3 mb-10">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                            <Check size={16} className="text-primary" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/reservar" className="block w-full text-center bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all">
                                    Reservar
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PreciosIndex;
