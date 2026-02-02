import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts, blog } from '../../data/siteData';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts[slug];
    const [openFaq, setOpenFaq] = useState(null);

    // Si no existe el post, redirigir al índice del blog
    if (!post) {
        return <Navigate to="/blog" />;
    }

    // Obtener artículos relacionados (excluyendo el actual)
    const relatedPosts = blog.filter(p => p.slug !== slug).slice(0, 3);

    const colorMap = {
        rojo: { bg: 'bg-red-50', border: 'border-red-500', icon: '🔴', text: 'text-red-700' },
        amarillo: { bg: 'bg-amber-50', border: 'border-amber-500', icon: '🟡', text: 'text-amber-700' },
        verde: { bg: 'bg-emerald-50', border: 'border-emerald-500', icon: '🟢', text: 'text-emerald-700' }
    };

    return (
        <div className="bg-white min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative">
                <div className="absolute inset-0 h-[60vh] overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white" />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 text-sm font-medium">
                            <span>←</span> Volver al Blog
                        </Link>
                        <span className="block text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
                            {post.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-medium italic mb-8">
                            {post.subtitle}
                        </p>
                        <div className="flex items-center gap-6 text-white/70 text-sm">
                            <span className="font-bold">{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contenido Principal */}
            <article className="max-w-4xl mx-auto px-6 py-16">
                {/* Introducción */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="prose prose-lg max-w-none mb-16"
                >
                    {post.intro.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-gray-700 text-lg leading-relaxed mb-6">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                {/* Secciones del artículo */}
                {post.sections?.map((section, sIndex) => (
                    <motion.section
                        key={sIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-6">
                            {section.title}
                        </h2>
                        {section.subtitle && (
                            <p className="text-xl text-gray-600 mb-8">{section.subtitle}</p>
                        )}

                        {section.content && (
                            <div className="prose prose-lg max-w-none mb-8">
                                {section.content.split('\n\n').map((paragraph, i) => {
                                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                        return (
                                            <p key={i} className="text-2xl font-black text-primary my-8">
                                                {paragraph.replace(/\*\*/g, '')}
                                            </p>
                                        );
                                    }
                                    return (
                                        <p key={i} className="text-gray-700 text-lg leading-relaxed mb-4">
                                            {paragraph}
                                        </p>
                                    );
                                })}
                            </div>
                        )}

                        {/* Comparación */}
                        {section.comparison && (
                            <div className="grid md:grid-cols-2 gap-6 my-12">
                                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                                    <span className="text-xs font-black uppercase tracking-widest text-red-500 mb-2 block">Reposo</span>
                                    <p className="text-gray-800 font-medium">{section.comparison.reposo}</p>
                                </div>
                                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                                    <span className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-2 block">Readaptación Activa</span>
                                    <p className="text-gray-800 font-medium">{section.comparison.readaptacion}</p>
                                </div>
                            </div>
                        )}

                        {/* Evidencias */}
                        {section.evidencias?.map((evidencia, eIndex) => (
                            <div key={eIndex} className="bg-gray-50 rounded-3xl p-8 mb-8">
                                <h3 className="text-2xl font-black text-gray-900 mb-4">
                                    {eIndex + 1}. {evidencia.title}
                                </h3>
                                <p className="text-gray-700 text-lg mb-6">{evidencia.content}</p>

                                {evidencia.stats && (
                                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                                        {evidencia.stats.map((stat, i) => (
                                            <div key={i} className="bg-white p-4 rounded-xl">
                                                <span className="text-xs font-bold uppercase text-gray-400">{stat.label}</span>
                                                <p className="text-gray-900 font-bold mt-1">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {evidencia.benefits && (
                                    <ul className="space-y-2 mb-6">
                                        {evidencia.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-primary mt-1">✓</span>
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {evidencia.causes && (
                                    <ul className="space-y-2 mb-6">
                                        {evidencia.causes.map((cause, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-red-500 mt-1">✗</span>
                                                <span className="text-gray-700">{cause}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {evidencia.phases && (
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {evidencia.phases.map((phase, i) => (
                                            <div key={i} className="bg-primary/10 px-4 py-2 rounded-full">
                                                <span className="font-bold text-primary">{phase.fase}:</span>
                                                <span className="text-gray-700 ml-2">{phase.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <p className="text-gray-800 font-medium italic">{evidencia.conclusion}</p>
                            </div>
                        ))}
                    </motion.section>
                ))}

                {/* Semáforo */}
                {post.semaforo && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">
                            {post.semaforo.title}
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">{post.semaforo.intro}</p>

                        <div className="space-y-6">
                            {post.semaforo.levels.map((level, i) => {
                                const colors = colorMap[level.color];
                                return (
                                    <div key={i} className={`${colors.bg} border-l-4 ${colors.border} p-6 rounded-r-2xl`}>
                                        <h3 className={`text-xl font-black ${colors.text} mb-4 flex items-center gap-3`}>
                                            <span className="text-2xl">{colors.icon}</span>
                                            {level.title}
                                        </h3>
                                        <ul className="space-y-2 mb-4">
                                            {level.items.map((item, j) => (
                                                <li key={j} className="text-gray-700 flex items-start gap-2">
                                                    <span className="text-gray-400">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-gray-600 text-sm italic">{level.note}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.section>
                )}

                {/* Fuentes */}
                {post.fuentes && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 bg-gray-900 text-white rounded-3xl p-8"
                    >
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
                            {post.fuentes.title}
                        </h2>
                        <p className="text-gray-400 mb-6">{post.fuentes.intro}</p>
                        <ul className="space-y-4 mb-8">
                            {post.fuentes.studies.map((study, i) => (
                                <li key={i} className="text-gray-300 pl-4 border-l-2 border-primary">
                                    {study}
                                </li>
                            ))}
                        </ul>
                        <div className="text-sm text-gray-500">
                            <span className="font-bold text-gray-400">Fuentes revisadas:</span>
                            <ul className="mt-2 space-y-1">
                                {post.fuentes.sources.map((source, i) => (
                                    <li key={i}>• {source}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.section>
                )}

                {/* DeMovement */}
                {post.demovement && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">
                            {post.demovement.title}
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">{post.demovement.intro}</p>
                        <div className="bg-primary/5 rounded-3xl p-8">
                            <p className="text-gray-600 mb-4">Por eso:</p>
                            <ul className="space-y-3">
                                {post.demovement.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-primary font-bold">✓</span>
                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-2xl font-black text-gray-900 mt-8">{post.demovement.conclusion}</p>
                        </div>
                    </motion.section>
                )}

                {/* Tiempos */}
                {post.tiempos && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">
                            {post.tiempos.title}
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">{post.tiempos.intro}</p>
                        <div className="grid gap-4">
                            {post.tiempos.items.map((item, i) => (
                                <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 bg-gray-50 p-4 rounded-xl">
                                    <span className="text-gray-800 font-medium flex-1">{item.lesion}</span>
                                    <span className="text-primary font-black text-lg">{item.tiempo}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-6 italic text-sm">{post.tiempos.note}</p>
                    </motion.section>
                )}

                {/* CTA */}
                {post.cta && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl p-8 md:p-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                            {post.cta.title}
                        </h2>
                        <p className="text-white/80 text-lg mb-4">{post.cta.intro}</p>
                        <p className="text-xl font-medium mb-6">{post.cta.message}</p>
                        <p className="text-2xl font-black mb-6">{post.cta.highlight}</p>
                        <p className="text-white/70 mb-4">En {post.cta.duration}:</p>
                        <ul className="space-y-2 mb-8">
                            {post.cta.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1">✓</span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to={post.cta.buttonLink}
                            className="inline-flex items-center gap-2 bg-white text-primary font-black uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            {post.cta.buttonText} <span>→</span>
                        </Link>
                    </motion.section>
                )}

                {/* Postscript */}
                {post.postscript && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 italic text-sm mb-16 border-l-4 border-gray-200 pl-6"
                    >
                        {post.postscript}
                    </motion.p>
                )}

                {/* FAQs */}
                {post.faqs && post.faqs.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">
                            Preguntas Frecuentes
                        </h2>
                        <div className="space-y-4">
                            {post.faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="border border-gray-200 rounded-2xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-bold text-gray-900">{faq.question}</span>
                                        <span className={`text-2xl text-primary transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                                            +
                                        </span>
                                    </button>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="px-6 pb-6"
                                        >
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}
            </article>

            {/* Artículos Relacionados */}
            {relatedPosts.length > 0 && (
                <section className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-12">
                            Más Artículos
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((article) => (
                                <Link
                                    key={article.id}
                                    to={`/blog/${article.slug}`}
                                    className="group"
                                >
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-primary">{article.category}</span>
                                    <h3 className="text-xl font-black text-gray-900 mt-2 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlogPost;
