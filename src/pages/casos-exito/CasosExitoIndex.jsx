import React from 'react';
import { motion } from 'framer-motion';

const CasosExitoIndex = () => {
    return (
        <div className="bg-white min-h-screen pt-32">
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Testimonios</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            CASOS DE<br /><span className="text-primary italic">ÉXITO</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            Historias reales de superación y recuperación.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            { name: 'Juanjo', img: '/imagenes/testimonios/testimonio-video-juanjo.jpg', tag: 'Readaptación Lumbar' },
                            { name: 'Mamen', img: '/imagenes/testimonios/testimonio-video-mamen.jpg', tag: 'Recuperación de Rodilla' },
                        ].map((test, i) => (
                            <div key={i} className="relative aspect-video rounded-[40px] overflow-hidden group cursor-pointer shadow-xl">
                                <img src={test.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={`Testimonio ${test.name}`} />
                                <div className="absolute inset-0 bg-black/40 flex items-end p-10">
                                    <div>
                                        <span className="text-primary font-black uppercase tracking-widest text-xs block mb-2">{test.tag}</span>
                                        <span className="text-white font-black text-3xl uppercase tracking-tighter">{test.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CasosExitoIndex;
