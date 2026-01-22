import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Shield, MapPin, ChevronLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { injuries } from '../data/injuries';

const InjuryPage = () => {
    const { slug } = useParams();
    const injury = injuries[slug];

    if (!injury) return <Navigate to="/" />;

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Minimalista y Profesional */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
                        <ChevronLeft size={16} />
                        Volver a Inicio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-8">
                            <Activity size={14} />
                            <span>Especialidad en Readaptación</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            {injury.title} <br />
                            <span className="text-primary italic">{injury.subtitle}</span>
                        </h1>
                        <p className="flex items-center text-gray-500 font-bold uppercase tracking-widest text-sm">
                            <MapPin size={18} className="mr-2 text-primary" />
                            Unidad de Readaptación Avanzada | Las Rozas
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section: Enfoque Clínico */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-2 space-y-20">
                        {/* Intro */}
                        <div>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Evaluación Inicial</span>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-8">ABORDAJE BASADO EN CIENCIA</h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
                                {injury.content.intro}
                            </p>
                            {injury.content.description && (
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {injury.content.description}
                                </p>
                            )}
                        </div>

                        {/* Symptoms */}
                        {injury.content.symptoms && injury.content.symptoms.length > 0 && (
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">SÍNTOMAS COMUNES</h3>
                                <div className="space-y-6">
                                    {injury.content.symptoms.map((symptom, i) => (
                                        <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                                <div className="w-3 h-3 bg-primary rounded-full" />
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 text-lg font-black mb-2 uppercase tracking-tight">{symptom.title}</h4>
                                                <p className="text-gray-600 leading-relaxed">{symptom.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Causes */}
                        {injury.content.causes && injury.content.causes.length > 0 && (
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">CAUSAS PRINCIPALES</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {injury.content.causes.map((cause, i) => (
                                        <div key={i} className="p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-primary/20 transition-all">
                                            <h4 className="text-gray-900 text-lg font-black mb-3 uppercase tracking-tight">{cause.title}</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">{cause.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Why Us / Context */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">NUESTRO ENFOQUE</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {injury.content.whyUs.map((item, i) => (
                                    <div key={i} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-2xl hover:bg-white transition-all">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 text-primary">
                                            <Shield size={24} />
                                        </div>
                                        <h4 className="text-gray-900 text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Process Phases */}
                        <div className="bg-gray-900 p-12 md:p-16 rounded-[60px] text-white relative overflow-hidden shadow-3xl">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                            <h3 className="text-3xl md:text-4xl font-black mb-12 uppercase italic relative z-10">FASES DE LA READAPTACIÓN</h3>
                            <div className="space-y-12 relative z-10">
                                {injury.content.process.map((step, i) => (
                                    <div key={i} className="flex flex-col md:flex-row gap-8 group">
                                        <div className="text-primary font-black text-6xl tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">
                                            {(i + 1).toString().padStart(2, '0')}
                                        </div>
                                        <div className="md:pt-4">
                                            <h4 className="text-white font-black text-2xl mb-3 uppercase tracking-tight">{step.title}</h4>
                                            <p className="text-gray-400 font-medium leading-relaxed text-lg max-w-xl">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Prevention */}
                        {injury.content.prevention && injury.content.prevention.length > 0 && (
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">PREVENCIÓN</h3>
                                <div className="space-y-4">
                                    {injury.content.prevention.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start p-6 bg-primary/5 rounded-3xl border border-primary/10">
                                            <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-black">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 font-black mb-2 uppercase tracking-tight">{item.title}</h4>
                                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* FAQ */}
                        {injury.content.faq && injury.content.faq.length > 0 && (
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">PREGUNTAS FRECUENTES</h3>
                                <div className="space-y-6">
                                    {injury.content.faq.map((item, i) => (
                                        <div key={i} className="p-8 bg-white rounded-3xl border-2 border-gray-100">
                                            <h4 className="text-gray-900 text-lg font-black mb-4 uppercase tracking-tight">{item.question}</h4>
                                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 p-10 bg-white rounded-[50px] border border-gray-100 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />
                            <h3 className="text-2xl font-black mb-6 uppercase text-gray-900 tracking-tight leading-none">CITA DE VALORACIÓN</h3>
                            <p className="text-gray-500 mb-8 font-medium italic">Evaluamos tu punto de partida para diseñar el camino hacia tu recuperación.</p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    'Análisis Biomecánico 1:1',
                                    'Informe de Valoración',
                                    'Propuesta de Tiempos',
                                    'Acceso Preferente en Las Rozas'
                                ].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-700">
                                        <div className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/30" />
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#valoracion"
                                className="block w-full text-center bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                            >
                                <Activity size={18} />
                                Iniciar Proceso
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InjuryPage;
