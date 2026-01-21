import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: '¿Qué es la readaptación deportiva?',
            a: 'La readaptación deportiva es el proceso de recuperación activa de una lesión, utilizando el ejercicio físico como herramienta principal. A diferencia de la fisioterapia tradicional, nos centramos en devolverte la capacidad funcional completa.'
        },
        {
            q: '¿Puedo entrenar si tengo dolor?',
            a: 'Sí, en la mayoría de casos. El movimiento controlado es una de las mejores medicinas. Nuestro trabajo es encontrar los ejercicios que puedes hacer sin empeorar tu situación, e ir progresando a partir de ahí.'
        },
        {
            q: '¿Cuánto dura una valoración inicial?',
            a: 'Aproximadamente 60-75 minutos. Incluye entrevista, evaluación de movimiento, tests de fuerza y elaboración de un plan de acción.'
        },
        {
            q: '¿Trabajáis con médicos y fisioterapeutas?',
            a: 'Sí, colaboramos continuamente con profesionales médicos. Si tienes un equipo de salud, nos coordinamos con ellos para optimizar tu recuperación.'
        },
        {
            q: '¿Qué diferencia hay con un gimnasio convencional?',
            a: 'No somos un gimnasio. Somos un centro de especialización. Cada sesión está supervisada por un profesional colegiado, con un enfoque 100% individualizado a tu situación.'
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32">
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Ayuda</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            PREGUNTAS<br /><span className="text-primary italic">FRECUENTES</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-gray-50 rounded-[24px] border border-gray-100 overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full p-8 flex justify-between items-center text-left"
                                >
                                    <span className="font-black text-gray-900 text-lg">{faq.q}</span>
                                    <ChevronDown className={`text-primary shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                                </button>
                                {openIndex === i && (
                                    <div className="px-8 pb-8 text-gray-600 font-medium leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
