import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, Zap, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-60 scale-105"
                        alt="Entrenamiento"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-accent text-sm font-semibold mb-6">
                            <MapPin size={16} />
                            <span>Las Rozas - A 5 min de Majadahonda</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">
                            Readaptación <br />
                            <span className="text-gradient">Avanzada</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
                            Recupera el movimiento deportivo y la confianza tras tu lesión con programas 100% individualizados basados en ciencia.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://wa.me/34600000000" className="bg-accent text-black px-10 py-4 rounded-full font-black text-lg hover:bg-accent-light transition-all shadow-[0_0_30px_rgba(251,191,36,0.4)] uppercase">
                                Empezar Recuperación
                            </a>
                            <Link to="/readaptacion/rodilla-lca" className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all uppercase">
                                Ver Servicios
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Stats */}
                <div className="absolute bottom-10 left-0 w-full z-20 hidden md:block">
                    <div className="max-w-7xl mx-auto px-4 flex justify-between">
                        {[
                            { label: 'Individulización', value: '100%' },
                            { label: 'Basado en', value: 'CIENCIA' },
                            { label: 'Ubicación', value: 'LAS ROZAS' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 + i * 0.2 }}
                                className="text-left"
                            >
                                <p className="text-accent text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                                <p className="text-2xl font-black text-white italic tracking-tighter">{stat.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic">¿Qué te <span className="text-accent underline">impide</span> moverte?</h2>
                    <p className="text-gray-400 text-lg">Especialistas en las lesiones más comunes del deportista.</p>
                </div>

                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Rodilla', slug: 'rodilla-lca', icon: <Activity />, desc: 'LCA, menisco y tendón rotuliano.' },
                        { title: 'Espalda', slug: 'espalda-lumbalgia', icon: <Shield />, desc: 'Hernias discales y lumbalgia.' },
                        { title: 'Hombro', slug: 'hombro-rotador', icon: <Zap />, desc: 'Manguito rotador e inestabilidad.' },
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="text-accent mb-6 p-4 bg-accent/10 inline-block rounded-2xl group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-3 italic uppercase">{service.title}</h3>
                            <p className="text-gray-400 mb-6">{service.desc}</p>
                            <Link to={`/readaptacion/${service.slug}`} className="text-accent font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                                <span>Saber más</span>
                                <ChevronRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Local SEO Section */}
            <section className="py-24 glass">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 italic uppercase">Tu centro de confianza en <span className="text-accent">Las Rozas</span></h2>
                    <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
                        Estamos ubicados estratégicamente para que tu proceso de recuperación sea lo más cómodo posible. Si vives en **Majadahonda**, estamos a menos de 5 minutos, evitándote los atascos y las esperas de otros centros en Madrid capital.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-6 border border-white/10 rounded-2xl">
                            <h4 className="text-accent font-bold mb-2 uppercase tracking-tighter">Enfoque Científico</h4>
                            <p className="text-gray-400">Utilizamos las últimas investigaciones en biomecánica y fisiología del ejercicio para tu readaptación.</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl">
                            <h4 className="text-accent font-bold mb-2 uppercase tracking-tighter">Individualización</h4>
                            <p className="text-gray-400">No hay dos lesiones iguales. Tu plan es personal, único y adaptado a tus objetivos deportivos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
