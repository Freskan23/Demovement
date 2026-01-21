import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Activity, Heart, Shield } from 'lucide-react';

const Nosotros = () => {
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
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Quiénes Somos</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            CIENCIA Y EMPATÍA AL<br />
                            <span className="text-primary italic">SERVICIO DE TU CUERPO</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            DE MOVEMENT nació de una convicción: el movimiento es la mejor medicina. Somos un centro de especialización
                            en readaptación deportiva y entrenamiento personal, dedicados a ayudarte a recuperar tu libertad de movimiento.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Historia */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-12">NUESTRA HISTORIA</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 font-medium leading-relaxed space-y-6">
                        <p>
                            Nacimos en Las Rozas de Madrid con una misión clara: ofrecer un servicio de readaptación y entrenamiento
                            realmente diferente. Un espacio donde la ciencia guía cada decisión y donde cada persona es tratada
                            de forma individual, no como un número más.
                        </p>
                        <p>
                            Después de años trabajando en centros de fitness convencionales, nos dimos cuenta de que algo fallaba.
                            Las personas se lesionaban, recibían tratamiento pasivo y volvían a lesionarse. El ciclo se repetía
                            porque nadie les enseñaba a moverse mejor, a fortalecerse de verdad.
                        </p>
                        <p>
                            DE MOVEMENT es nuestra respuesta a ese problema. Un lugar donde el ejercicio no es un castigo,
                            sino una herramienta de transformación. Donde "volver a entrenar" significa volver a disfrutar
                            de tu cuerpo sin miedo.
                        </p>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-16 text-center">NUESTROS VALORES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Activity className="w-8 h-8" />,
                                title: 'Ciencia',
                                desc: 'Basamos nuestro trabajo en la evidencia científica más actual. Cada ejercicio, cada progresión, tiene un porqué respaldado por la investigación.'
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: 'Rigor',
                                desc: 'Todos nuestros profesionales son titulados universitarios y colegiados. Mantenemos formación continua y colaboramos con el ámbito médico.'
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: 'Empatía',
                                desc: 'Entendemos que detrás de cada lesión hay una persona con miedos, objetivos y circunstancias únicas. Te escuchamos y nos adaptamos a ti.'
                            }
                        ].map((valor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-lg hover:shadow-2xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                                    {valor.icon}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 uppercase mb-4">{valor.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">{valor.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Diferenciadores */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-16">¿QUÉ NOS HACE DIFERENTES?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            'Atención 100% individualizada: nunca grupos, nunca tablas genéricas.',
                            'Profesionales colegiados con formación de postgrado.',
                            'Instalaciones privadas sin aglomeraciones.',
                            'Colaboración con médicos, fisioterapeutas y otros especialistas.',
                            'Seguimiento real de tu progreso con métricas objetivas.',
                            'Ubicación céntrica en Las Rozas, con parking gratuito.'
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex gap-4 items-start"
                            >
                                <ChevronRight size={24} className="text-primary shrink-0" />
                                <span className="text-lg font-bold">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-8">¿QUIERES CONOCERNOS?</h2>
                    <p className="text-xl text-gray-500 mb-12 font-medium">Ven a vernos, conoce a nuestro equipo y nuestras instalaciones.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/equipo" className="bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl">
                            Conocer al Equipo
                        </Link>
                        <Link to="/instalaciones" className="bg-gray-100 text-gray-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-200 transition-all">
                            Ver Instalaciones
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Nosotros;
