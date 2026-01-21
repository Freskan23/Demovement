import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Activity, User, Clipboard, Heart, Shield, Euro, Clock, ArrowRight } from 'lucide-react';
import { servicios } from '../../data/siteData';

const iconMap = {
    activity: Activity,
    user: User,
    clipboard: Clipboard,
    heart: Heart,
    shield: Shield
};

const customIcons = {
    'readaptacion-deportiva': '/imagenes/iconos/icon-servicios-readaptacion.svg',
    'entrenamiento-personal': '/imagenes/iconos/icon-servicios-entrenamiento.svg',
    'valoracion-funcional': '/imagenes/iconos/icon-servicios-grupos.svg'
};

const ServiciosIndex = () => {
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
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Nuestros Servicios</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            SOLUCIONES<br />
                            <span className="text-primary italic">PERSONALIZADAS</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            No ofrecemos tablas genéricas ni planes estándar. Cada servicio se adapta a ti,
                            a tu situación y a tus objetivos. Porque cada persona es diferente.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {Object.entries(servicios).map(([slug, servicio], i) => {
                            const IconComponent = iconMap[servicio.icon] || Activity;
                            const customIcon = customIcons[slug];

                            return (
                                <motion.div
                                    key={slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <Link
                                        to={`/servicios/${slug}`}
                                        className="block p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-2xl hover:bg-white transition-all group h-full"
                                    >
                                        {/* Icon */}
                                        {customIcon ? (
                                            <img src={customIcon} alt={servicio.title} className="w-16 h-16 mb-8" />
                                        ) : (
                                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                                <IconComponent size={28} />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">{servicio.title}</h3>
                                        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{servicio.subtitle}</p>
                                        <p className="text-gray-600 font-medium leading-relaxed mb-6">{servicio.description}</p>

                                        {/* Meta */}
                                        <div className="flex items-center gap-6 mb-6 text-gray-400 text-sm font-bold">
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} />
                                                <span>{servicio.duracionSesion}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Euro size={16} />
                                                <span>{servicio.precio}</span>
                                            </div>
                                        </div>

                                        <span className="text-primary font-black flex items-center gap-2 uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                            Ver detalles <ChevronRight size={16} />
                                        </span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                        ¿NO SABES QUÉ SERVICIO ELEGIR?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 font-medium">
                        No te preocupes. En tu primera consulta gratuita analizamos tu situación y te recomendamos el mejor camino.
                    </p>
                    <Link
                        to="/reservar/valoracion-inicial"
                        className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl"
                    >
                        Consulta Gratuita <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServiciosIndex;
