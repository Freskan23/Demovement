import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Clock, Wifi } from 'lucide-react';

const Instalaciones = () => {
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
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Nuestras Instalaciones</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            UN ESPACIO<br />
                            <span className="text-primary italic">DISEÑADO PARA TI</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            Instalaciones modernas y equipamiento de última generación en un entorno privado y exclusivo, sin aglomeraciones.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <MapPin />, title: 'Las Rozas', desc: 'Ubicación céntrica y accesible.' },
                            { icon: <Car />, title: 'Parking Gratuito', desc: 'Aparcamiento fácil en la puerta.' },
                            { icon: <Clock />, title: 'Horario Flexible', desc: 'Adaptado a tu disponibilidad.' },
                            { icon: <Wifi />, title: 'Tecnología', desc: 'Equipamiento de última generación.' }
                        ].map((feature, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-[32px] text-center border border-gray-100 hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-black text-gray-900 uppercase mb-2">{feature.title}</h3>
                                <p className="text-gray-500 font-medium text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mapa */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">DÓNDE ESTAMOS</h2>
                            <p className="text-xl text-gray-400 mb-8 font-medium">
                                C. Real, 7, 28231 Las Rozas de Madrid
                            </p>
                            <p className="text-gray-500 font-medium">
                                A 5 minutos de Majadahonda, con fácil acceso desde la A-6 y M-50.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-[40px] aspect-video flex items-center justify-center">
                            <span className="text-gray-600 font-bold uppercase tracking-widest text-sm">[Mapa de Google Aquí]</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Instalaciones;
