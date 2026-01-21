import React from 'react';
import { motion } from 'framer-motion';

const RecursosIndex = () => {
    return (
        <div className="bg-white min-h-screen pt-32">
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Recursos</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            GUÍAS Y<br /><span className="text-primary italic">MATERIALES</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-500 font-medium">Próximamente: guías descargables, videos y ejercicios.</p>
                </div>
            </section>
        </div>
    );
};

export default RecursosIndex;
