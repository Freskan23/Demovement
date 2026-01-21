import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { deportes } from '../../data/siteData';

const DeportePage = () => {
    const { slug } = useParams();
    const deporte = deportes[slug];

    if (!deporte) return <Navigate to="/deportes" />;

    return (
        <div className="bg-white min-h-screen pt-32">
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <Link to="/deportes" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-8 hover:gap-4 transition-all">
                        <ChevronLeft size={16} />
                        Todos los Deportes
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">{deporte.title}</h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">{deporte.description}</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-12">LESIONES COMUNES EN {deporte.title.toUpperCase()}</h2>
                    <div className="flex flex-wrap gap-4">
                        {deporte.lesionesComunes.map((lesion, i) => (
                            <span key={i} className="px-6 py-3 bg-primary/5 text-primary font-bold uppercase tracking-widest rounded-full">{lesion}</span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeportePage;
