import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, ChevronRight, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { lesiones } from '../../data/siteData';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/SEO/Breadcrumbs';

const LesionCategoria = () => {
    const { categoria: slug } = useParams();
    const categoria = lesiones[slug];

    if (!categoria) {
        return (
            <div className="min-h-screen pt-48 px-6 text-center bg-gray-50">
                <div className="max-w-md mx-auto p-12 bg-white rounded-[40px] shadow-xl">
                    <h2 className="text-2xl font-black uppercase mb-4">Categoría no encontrada</h2>
                    <p className="text-gray-500 mb-8">Lo sentimos, no hemos podido encontrar la especialidad que buscas.</p>
                    <Link to="/lesiones" className="btn-primary inline-flex py-4 px-8">Ver todas las lesiones</Link>
                </div>
            </div>
        );
    }

    const breadcrumbItems = [
        { label: 'Lesiones', path: '/lesiones' },
        { label: categoria.title, path: `/lesiones/${slug}` }
    ];

    return (
        <div className="bg-white min-h-screen">
            <SEOHead
                title={categoria.title}
                description={categoria.description}
                keywords={`readaptación ${categoria.title.toLowerCase()}, fisioterapia ${categoria.title.toLowerCase()}, las rozas`}
                canonical={`/lesiones/${slug}`}
            />

            {/* Hero Minimalista y Profesional */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={breadcrumbItems} />

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-8">
                            <Activity size={14} />
                            <span>Especialidad en {categoria.title}</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8 max-w-4xl">
                            {categoria.title} <br />
                            <span className="text-primary italic">Readaptación Avanzada</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
                            {categoria.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats & Clinical Perspective */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div>
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Abordaje Clínico</span>
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-8">RECUPERACIÓN BASADA <br />EN LA CIENCIA</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    {categoria.intro}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {categoria.stats && categoria.stats.map((stat, i) => (
                                    <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                        <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                                        <div className="text-xs font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
                                        <p className="text-sm text-gray-600 font-bold mt-2">{stat.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-900 p-12 md:p-16 rounded-[60px] text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                            <h3 className="text-2xl font-black mb-8 uppercase italic relative z-10">PUNTOS CLAVE</h3>
                            <div className="space-y-6 relative z-10">
                                {categoria.highlights && categoria.highlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors text-primary group-hover:text-white">
                                            <Shield size={20} />
                                        </div>
                                        <span className="text-lg font-bold uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Injuries Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Patologías Comunes</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">¿QUÉ TE SUCEDE?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoria.subcategorias && Object.entries(categoria.subcategorias).map(([subKey, subVal]) => (
                            <motion.div
                                key={subKey}
                                whileHover={{ y: -10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Link
                                    to={`/lesiones/${slug}/${subKey}`}
                                    className="group block h-full p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                        <Activity size={24} className="text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                                        {subVal.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium leading-relaxed mb-8">
                                        {subVal.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                                        <span>Ver protocolo </span>
                                        <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-primary rounded-[60px] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/30">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                                DEJA DE ESPERAR,<br /> <span className="italic">EMPIEZA A MOVERTE</span>
                            </h2>
                            <p className="text-xl text-white/80 font-medium mb-12">
                                Diseñamos el camino específico para que recuperes tu confianza en la {categoria.title.toLowerCase()}. Sin miedo, sin dolor, con ciencia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    to="/reservar/valoracion-inicial"
                                    className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center justify-center gap-3"
                                >
                                    Fijar Cita Gratuita
                                    <ArrowRight size={20} />
                                </Link>
                                <a
                                    href="https://wa.me/34690285023"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary-dark/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                                >
                                    Consultar Dudas
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LesionCategoria;
