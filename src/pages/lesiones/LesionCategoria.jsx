import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { lesiones } from '../../data/siteData';

const LesionCategoria = () => {
    const { categoria } = useParams();
    const categoriaData = lesiones[categoria];

    if (!categoriaData) return <Navigate to="/lesiones" />;

    return (
        <div className="bg-white min-h-screen pt-32">
            {/* Hero */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <Link to="/lesiones" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-8 hover:gap-4 transition-all">
                        <ChevronLeft size={16} />
                        Todas las Lesiones
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            {categoriaData.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            {categoriaData.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Subcategories */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-12">ESPECIALIDADES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {Object.entries(categoriaData.subcategorias).map(([slug, sub], i) => (
                            <motion.div
                                key={slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Link
                                    to={`/lesiones/${categoria}/${slug}`}
                                    className="block p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-2xl hover:bg-white transition-all group"
                                >
                                    <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">{sub.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed mb-6">{sub.description}</p>
                                    <span className="text-primary font-black flex items-center gap-2 uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                        Ver Protocolo <ChevronRight size={16} />
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

export default LesionCategoria;
