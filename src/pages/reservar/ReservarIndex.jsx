import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const ReservarIndex = () => {
    const { tipo } = useParams();

    return (
        <div className="bg-white min-h-screen pt-32">
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Reservas</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            AGENDA TU<br /><span className="text-primary italic">{tipo === 'valoracion-inicial' ? 'VALORACIÓN' : 'CITA'}</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <form className="space-y-8 p-12 bg-gray-50 rounded-[50px] border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Nombre*</label>
                                <input type="text" className="w-full px-6 py-4 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Teléfono*</label>
                                <input type="tel" className="w-full px-6 py-4 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Email*</label>
                            <input type="email" className="w-full px-6 py-4 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Motivo de la consulta</label>
                            <textarea rows="4" className="w-full px-6 py-4 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary py-5">
                            Solicitar Cita
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ReservarIndex;
