import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, Calendar, Activity, AlertCircle, Phone } from 'lucide-react';
import { lesiones } from '../../data/siteData';

const LesionDetail = () => {
    const { slug, subslug } = useParams();

    // Encontrar la lesión y subcategoría correcta
    const categoria = lesiones[slug];
    const lesion = categoria?.subcategorias?.[subslug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug, subslug]);

    if (!lesion) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Página no encontrada</h1>
                    <Link to="/" className="text-primary font-bold underline">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    const { content } = lesion;

    return (
        <div className="bg-white min-h-screen pb-24">
            {/* HERO */}
            <header className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    {/* Imagen genérica de wellness si no hay específica */}
                    <img
                        src="/imagenes/hero/hero-image.jpg"
                        alt={lesion.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 w-full">
                    <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
                        <ArrowLeft size={20} className="mr-2" /> Volver
                    </Link>
                    <span className="block text-primary font-black uppercase tracking-widest text-sm mb-4">
                        {categoria.title}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
                        {lesion.title}
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl font-medium leading-relaxed">
                        {lesion.description}
                    </p>
                </div>
            </header>

            {/* INTRO Y MITOS */}
            <section className="py-16 px-6 max-w-4xl mx-auto">
                <div className="prose prose-lg text-gray-600 mb-12">
                    <p className="text-2xl text-gray-800 font-medium leading-relaxed border-l-4 border-primary pl-6">
                        {content.intro}
                    </p>
                </div>

                {content.mitos && (
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {content.mitos.map((mito, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <AlertCircle className="text-primary mb-4" />
                                <p className="text-sm font-bold text-gray-900">{mito}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* FASES DEL PROCESO */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <Calendar className="text-primary w-8 h-8" />
                        <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Tu Plan de Recuperación</h2>
                    </div>

                    <div className="space-y-8">
                        {content.fases.map((fase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8"
                            >
                                <div className="shrink-0 flex md:block items-center gap-4">
                                    <span className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-black text-xl">
                                        {idx + 1}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{fase.title}</h3>
                                    <p className="text-gray-600 mb-6">{fase.desc}</p>
                                    {fase.ejemplos && (
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <span className="text-xs font-black uppercase text-gray-400 tracking-widest block mb-2">Ejemplos de trabajo:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {fase.ejemplos.map((ej, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600">
                                                        {ej}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEMÁFORO: SÍ / NO */}
            {content.semasforo && (
                <section className="py-20 px-6 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* LO QUE SÍ */}
                        <div className="bg-green-50/50 p-8 rounded-[32px] border border-green-100">
                            <h3 className="text-2xl font-black text-green-800 uppercase tracking-tight mb-8 flex items-center gap-3">
                                <Check className="w-8 h-8 bg-green-200 rounded-full p-1.5 text-green-700" strokeWidth={3} />
                                Lo que SÍ te ayuda
                            </h3>
                            <ul className="space-y-4">
                                {content.semasforo.si.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2.5 shrink-0" />
                                        <p className="text-gray-700 font-medium">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* LO QUE NO */}
                        <div className="bg-red-50/50 p-8 rounded-[32px] border border-red-100">
                            <h3 className="text-2xl font-black text-red-800 uppercase tracking-tight mb-8 flex items-center gap-3">
                                <X className="w-8 h-8 bg-red-200 rounded-full p-1.5 text-red-700" strokeWidth={3} />
                                Lo que debes EVITAR
                            </h3>
                            <ul className="space-y-4">
                                {content.semasforo.no.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2.5 shrink-0" />
                                        <p className="text-gray-700 font-medium">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {/* LÍMITES Y CTA FINAL */}
            <section className="bg-gray-900 text-white py-20 px-6 mt-12 rounded-t-[40px]">
                <div className="max-w-4xl mx-auto text-center">
                    {content.limites && (
                        <div className="mb-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 inline-block text-left">
                            <div className="flex gap-4">
                                <Activity className="text-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary uppercase tracking-widest text-sm mb-1">Nota Importante de Seguridad</h4>
                                    <p className="text-white/90">{content.limites}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                        ¿Hablamos sobre tu caso?
                    </h2>
                    <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                        La primera valoración es para conocernos. Sin compromiso y gratuita.
                    </p>
                    <a
                        href="https://wa.me/34690285023"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
                    >
                        {content.cta || 'Pedir Cita Gratuita'} <Phone size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default LesionDetail;
