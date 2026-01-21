import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { deportes } from '../../data/siteData';

const DeportesIndex = () => {
    return (
        <div className="bg-white min-h-screen pt-32">
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Por Deporte</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            READAPTACIÓN<br /><span className="text-primary italic">DEPORTIVA</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            Cada deporte tiene sus lesiones típicas. Selecciona el tuyo para conocer nuestro enfoque específico.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(deportes).map(([slug, deporte], i) => (
                            <Link key={slug} to={`/deportes/${slug}`} className="block p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-2xl hover:bg-white transition-all group">
                                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">{deporte.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed mb-6">{deporte.description}</p>
                                <span className="text-primary font-black flex items-center gap-2 uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                    Ver más <ChevronRight size={16} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeportesIndex;
