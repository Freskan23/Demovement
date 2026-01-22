import React from 'react';
import { motion } from 'framer-motion';
import { blog } from '../../data/siteData';

const BlogIndex = () => {
    return (
        <div className="bg-white min-h-screen pt-32">
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Blog</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            ARTÍCULOS Y<br /><span className="text-primary italic">RECURSOS</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            Contenido divulgativo basado en ciencia para ayudarte a entender tu cuerpo y tu recuperación.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blog.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer flex flex-col h-full"
                            >
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-primary">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                                        <span>{article.date}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-3 mb-6 flex-1">
                                        {article.excerpt}
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs group-hover:gap-3 transition-all">
                                        Leer Artículo <span className="text-lg">→</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogIndex;
