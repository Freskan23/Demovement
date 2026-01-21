import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { lesiones } from '../../data/siteData';

const LesionesIndex = () => {
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
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Áreas de Especialización</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            LESIONES POR<br />
                            <span className="text-primary italic">ZONA CORPORAL</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            Especializados en la readaptación de lesiones musculoesqueléticas. Selecciona la zona afectada para conocer nuestro abordaje.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {Object.entries(lesiones).map(([slug, categoria], i) => (
                            <motion.div
                                key={slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Link
                                    to={`/lesiones/${slug}`}
                                    className="block p-12 bg-gray-50 rounded-[50px] border border-gray-100 hover:shadow-2xl hover:bg-white transition-all group"
                                >
                                    <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">{categoria.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed mb-8">{categoria.description}</p>

                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {Object.keys(categoria.subcategorias).map((sub) => (
                                            <span key={sub} className="px-4 py-2 bg-primary/5 text-primary font-bold text-xs uppercase tracking-widest rounded-full">
                                                {categoria.subcategorias[sub].title}
                                            </span>
                                        ))}
                                    </div>

                                    <span className="text-primary font-black flex items-center gap-2 uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                        Ver Especialidades <ChevronRight size={16} />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LesionesIndex;
