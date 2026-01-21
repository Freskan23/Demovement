import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { deportes } from '../../data/siteData';

const DeportesIndex = () => {
    const imagenes = {
        futbol: '/imagenes/hero/hero-image.jpg',
        running: '/imagenes/testimonios/testimonio-video-mamen.jpg',
        baloncesto: '/imagenes/testimonios/testimonio-video-patricia.jpg',
        crossfit: '/imagenes/testimonios/testimonio-video-david.jpg',
        tenis: '/imagenes/testimonios/testimonio-video-juanjo.jpg',
        padel: '/imagenes/hero/hero-image.jpg'
    };

    return (
        <div className="bg-white min-h-screen pt-32">
            {/* Hero */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-40" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Por Deporte</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            READAPTACIÓN<br /><span className="text-primary italic">DEPORTIVA</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            Cada deporte tiene sus lesiones típicas y sus demandas específicas.
                            Conocemos tu deporte y adaptamos el proceso de readaptación a lo que necesitas para volver.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sports Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(deportes).map(([slug, deporte], i) => (
                            <motion.div
                                key={slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Link
                                    to={`/deportes/${slug}`}
                                    className="block rounded-[40px] border border-gray-100 hover:shadow-2xl transition-all group overflow-hidden bg-gray-50"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={imagenes[slug] || '/imagenes/hero/hero-image.jpg'}
                                            alt={deporte.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{deporte.title}</h3>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <p className="text-gray-600 font-medium leading-relaxed mb-4 text-sm">{deporte.description}</p>

                                        {/* Lesiones Preview */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {deporte.lesionesComunes.slice(0, 2).map((lesion, j) => (
                                                <span key={j} className="px-3 py-1 bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-widest rounded-full">
                                                    {typeof lesion === 'string' ? lesion : lesion.nombre}
                                                </span>
                                            ))}
                                            {deporte.lesionesComunes.length > 2 && (
                                                <span className="px-3 py-1 bg-gray-200 text-gray-500 font-bold text-[10px] uppercase tracking-widest rounded-full">
                                                    +{deporte.lesionesComunes.length - 2} más
                                                </span>
                                            )}
                                        </div>

                                        <span className="text-primary font-black flex items-center gap-2 uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                            Ver más <ChevronRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                        ¿TU DEPORTE NO ESTÁ AQUÍ?
                    </h2>
                    <p className="text-xl text-white/80 mb-12 font-medium">
                        Trabajamos con deportistas de cualquier disciplina. Cuéntanos tu caso.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl"
                    >
                        Contactar <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default DeportesIndex;
