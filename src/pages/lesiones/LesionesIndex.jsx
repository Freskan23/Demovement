import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { lesiones } from '../../data/siteData';

const LesionesIndex = () => {
    const imagenes = {
        rodilla: '/imagenes/testimonios/testimonio-video-patricia.jpg',
        hombro: '/imagenes/testimonios/testimonio-video-david.jpg',
        tobillo: '/imagenes/testimonios/testimonio-video-mamen.jpg',
        espalda: '/imagenes/testimonios/testimonio-video-juanjo.jpg'
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
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Áreas de Especialización</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            LESIONES POR<br />
                            <span className="text-primary italic">ZONA CORPORAL</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            Nos especializamos en la readaptación de lesiones musculoesqueléticas.
                            Selecciona la zona afectada para conocer nuestro protocolo de trabajo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {Object.entries(lesiones).map(([slug, categoria], i) => (
                            <motion.div
                                key={slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Link
                                    to={`/lesiones/${slug}`}
                                    className="block bg-gray-50 rounded-[50px] border border-gray-100 hover:shadow-2xl transition-all group overflow-hidden"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <img
                                            src={imagenes[slug] || '/imagenes/hero/hero-image.jpg'}
                                            alt={categoria.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        <div className="absolute bottom-6 left-8 right-8">
                                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{categoria.title}</h3>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-10">
                                        <p className="text-gray-600 font-medium leading-relaxed mb-8">{categoria.description}</p>

                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {Object.keys(categoria.subcategorias).map((sub) => (
                                                <span key={sub} className="px-4 py-2 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full">
                                                    {categoria.subcategorias[sub].title}
                                                </span>
                                            ))}
                                        </div>

                                        <span className="text-primary font-black flex items-center gap-2 uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                            Ver Especialidades <ChevronRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        {[
                            { num: '+500', label: 'Lesiones Tratadas' },
                            { num: '95%', label: 'Éxito en Retorno' },
                            { num: '<5%', label: 'Recaídas' },
                            { num: '100%', label: 'Supervisión' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.num}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-8">
                        ¿NO ENCUENTRAS TU LESIÓN?
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 font-medium">
                        Tratamos todo tipo de lesiones musculoesqueléticas. Cuéntanos tu caso y te orientamos.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl"
                    >
                        Contactar <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LesionesIndex;
