import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Activity } from 'lucide-react';
import { lesiones } from '../../data/siteData';

const LesionDetalle = () => {
    const { categoria, detalle } = useParams();
    const categoriaData = lesiones[categoria];

    if (!categoriaData) return <Navigate to="/lesiones" />;

    const lesionData = categoriaData.subcategorias[detalle];

    if (!lesionData) return <Navigate to={`/lesiones/${categoria}`} />;

    return (
        <div className="bg-white min-h-screen pt-32">
            {/* Hero */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
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

            {/* Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        <div className="lg:col-span-2 space-y-16">
                            {/* Intro */}
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">NUESTRO ABORDAJE</h2>
                                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                    {lesionData.content.intro}
                                </p>
                            </div>

                            {/* Fases */}
                            <div className="bg-gray-900 p-12 rounded-[50px] text-white">
                                <h3 className="text-3xl font-black uppercase italic mb-12">FASES DE RECUPERACIÓN</h3>
                                <div className="space-y-10">
                                    {lesionData.content.fases.map((fase, i) => (
                                        <div key={i} className="flex gap-8 items-start">
                                            <div className="text-primary font-black text-5xl opacity-30">
                                                {(i + 1).toString().padStart(2, '0')}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-black text-xl uppercase mb-2">{fase.title}</h4>
                                                <p className="text-gray-400 font-medium">{fase.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 p-10 bg-gray-50 rounded-[50px] border border-gray-100">
                                <h3 className="text-2xl font-black text-gray-900 uppercase mb-6">¿TIENES ESTA LESIÓN?</h3>
                                <p className="text-gray-500 font-medium mb-10">
                                    Comenzamos con una valoración inicial para diseñar tu plan de recuperación.
                                </p>
                                <a href="/reservar/valoracion-inicial" className="block w-full text-center bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl">
                                    Pedir Valoración
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LesionDetalle;
