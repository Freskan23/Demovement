import React from 'react';
import { motion } from 'framer-motion';

const AvisoLegal = () => (
    <div className="bg-white min-h-screen pt-32">
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">AVISO LEGAL</h1>
                </motion.div>
            </div>
        </section>
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 prose prose-lg">
                <p className="text-gray-600 font-medium">Contenido legal pendiente de redacción.</p>
            </div>
        </section>
    </div>
);

export default AvisoLegal;
