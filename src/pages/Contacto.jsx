import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacto = () => {
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
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Contacto</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            HABLEMOS DE TU<br />
                            <span className="text-primary italic">RECUPERACIÓN</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            Estamos aquí para resolver tus dudas y comenzar tu proceso de readaptación.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Info */}
                        <div className="space-y-10">
                            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">INFORMACIÓN DE CONTACTO</h2>

                            <div className="space-y-8">
                                {[
                                    { icon: <MapPin />, title: 'Dirección', content: 'C. Real, 7, 28231 Las Rozas de Madrid' },
                                    { icon: <Phone />, title: 'Teléfono', content: '+34 690 285 023' },
                                    { icon: <Mail />, title: 'Email', content: 'info@demovement.es' },
                                    { icon: <Clock />, title: 'Horario', content: 'Lunes a Viernes: 8:00 - 21:00' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900 uppercase tracking-wide text-sm mb-1">{item.title}</h4>
                                            <p className="text-gray-600 font-medium">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-gray-50 p-12 rounded-[50px] border border-gray-100">
                            <h3 className="text-2xl font-black text-gray-900 uppercase mb-8">ENVÍANOS UN MENSAJE</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Nombre*</label>
                                        <input type="text" className="w-full px-6 py-4 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Email*</label>
                                        <input type="email" className="w-full px-6 py-4 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Teléfono</label>
                                    <input type="tel" className="w-full px-6 py-4 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Mensaje*</label>
                                    <textarea rows="4" className="w-full px-6 py-4 bg-white border-0 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none resize-none" required></textarea>
                                </div>
                                <button type="submit" className="w-full btn-primary py-5">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacto;
