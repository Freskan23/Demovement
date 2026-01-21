import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Activity, AlertCircle, Check, Dumbbell } from 'lucide-react';
import { lesiones } from '../../data/siteData';

const LesionDetalle = () => {
    const { categoria, detalle } = useParams();
    const categoriaData = lesiones[categoria];

    if (!categoriaData) return <Navigate to="/lesiones" />;

    const lesionData = categoriaData.subcategorias[detalle];

    if (!lesionData) return <Navigate to={`/lesiones/${categoria}`} />;

    const content = lesionData.content;

    return (
        <div className="bg-white min-h-screen pt-32">
            {/* Hero */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link to={`/lesiones/${categoria}`} className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-8 hover:gap-4 transition-all">
                        <ChevronLeft size={16} />
                        {categoriaData.title}
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-8">
                            <Activity size={14} />
                            <span>Protocolo de Readaptación</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            {lesionData.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            {lesionData.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro y Contenido Principal */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        <div className="lg:col-span-2 space-y-20">
                            {/* Intro */}
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">NUESTRO ABORDAJE</h2>
                                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                                    {content.intro}
                                </p>
                            </div>

                            {/* Estadísticas */}
                            {content.estadisticas && (
                                <div className="bg-primary/5 p-10 rounded-[40px]">
                                    <h3 className="text-xl font-black text-gray-900 uppercase mb-8">LO QUE DICE LA CIENCIA</h3>
                                    <div className="space-y-4">
                                        {content.estadisticas.map((stat, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <Check size={20} className="text-primary shrink-0 mt-1" />
                                                <span className="text-gray-700 font-medium">{stat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Mitos */}
                            {content.mitos && (
                                <div className="bg-gray-900 text-white p-10 rounded-[40px]">
                                    <h3 className="text-xl font-black uppercase mb-8">MITOS VS REALIDAD</h3>
                                    <div className="space-y-4">
                                        {content.mitos.map((mito, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <AlertCircle size={20} className="text-primary shrink-0 mt-1" />
                                                <span className="text-gray-300 font-medium">{mito}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Claves */}
                            {content.claves && (
                                <div className="bg-primary/5 p-10 rounded-[40px]">
                                    <h3 className="text-xl font-black text-gray-900 uppercase mb-8">CLAVES DEL TRATAMIENTO</h3>
                                    <div className="space-y-4">
                                        {content.claves.map((clave, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <Check size={20} className="text-primary shrink-0 mt-1" />
                                                <span className="text-gray-700 font-medium">{clave}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Fases de Recuperación */}
                            <div className="bg-gray-900 p-12 rounded-[50px] text-white">
                                <h3 className="text-3xl font-black uppercase italic mb-12">FASES DE RECUPERACIÓN</h3>
                                <div className="space-y-12">
                                    {content.fases.map((fase, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="border-l-4 border-primary pl-8"
                                        >
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="text-primary font-black text-4xl opacity-30">
                                                    {(i + 1).toString().padStart(2, '0')}
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-black text-xl uppercase mb-2">{fase.title}</h4>
                                                    <p className="text-gray-400 font-medium text-lg">{fase.desc}</p>
                                                </div>
                                            </div>
                                            {fase.ejercicios && (
                                                <div className="ml-12 mt-4 flex flex-wrap gap-2">
                                                    {fase.ejercicios.map((ej, j) => (
                                                        <span key={j} className="px-3 py-1 bg-white/10 text-white/80 text-xs font-bold rounded-full">
                                                            {ej}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Criterios de Alta */}
                            {content.criteriosAlta && (
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 uppercase mb-8">CRITERIOS DE ALTA</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {content.criteriosAlta.map((criterio, i) => (
                                            <div key={i} className="flex gap-4 items-center bg-gray-50 p-6 rounded-2xl">
                                                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
                                                    <Check size={16} strokeWidth={3} />
                                                </div>
                                                <span className="font-bold text-gray-800">{criterio}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Ejercicios Clave */}
                            {content.ejerciciosClave && (
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 uppercase mb-8">EJERCICIOS CLAVE</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {content.ejerciciosClave.map((ej, i) => (
                                            <span key={i} className="px-6 py-3 bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs rounded-full flex items-center gap-2">
                                                <Dumbbell size={14} />
                                                {ej}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 p-10 bg-gray-50 rounded-[50px] border border-gray-100 shadow-xl">
                                <h3 className="text-2xl font-black text-gray-900 uppercase mb-6 leading-tight">¿TIENES ESTA LESIÓN?</h3>
                                <p className="text-gray-500 font-medium mb-10">
                                    Comenzamos con una valoración inicial para diseñar tu plan de recuperación personalizado.
                                </p>

                                <ul className="space-y-4 mb-10">
                                    {[
                                        'Evaluación biomecánica completa',
                                        'Informe con tu situación actual',
                                        'Plan de acción personalizado',
                                        'Seguimiento continuo'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-700">
                                            <div className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/30" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/reservar/valoracion-inicial"
                                    className="block w-full text-center bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
                                >
                                    Pedir Valoración
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LesionDetalle;
