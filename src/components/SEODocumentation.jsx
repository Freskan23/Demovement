import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getSeoDocByPath } from '../data/seoDocumentation';

const SEODocumentation = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('tecnico');
    const [isExpanded, setIsExpanded] = useState(false);

    const doc = getSeoDocByPath(location.pathname);

    if (!doc) return null;

    return (
        <section className="bg-gray-900 text-white mt-20">
            {/* Header colapsable */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full py-6 px-6 flex items-center justify-between hover:bg-gray-800 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div className="text-left">
                        <span className="text-xs font-black uppercase tracking-widest text-primary block">Documentación SEO</span>
                        <span className="text-white/60 text-sm">{location.pathname}</span>
                    </div>
                </div>
                <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-white/60"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.span>
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="max-w-7xl mx-auto px-6 pb-12">
                            {/* Tabs */}
                            <div className="flex gap-4 mb-8 border-b border-gray-700 pb-4">
                                <button
                                    onClick={() => setActiveTab('tecnico')}
                                    className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${activeTab === 'tecnico'
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                        }`}
                                >
                                    🔧 Para Implementador
                                </button>
                                <button
                                    onClick={() => setActiveTab('negocio')}
                                    className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${activeTab === 'negocio'
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                        }`}
                                >
                                    💼 Para el Negocio
                                </button>
                            </div>

                            {/* Contenido Técnico */}
                            {activeTab === 'tecnico' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-6">
                                        Especificación Técnica SEO
                                    </h3>

                                    {/* Meta Tags Table */}
                                    <div className="bg-gray-800 rounded-2xl overflow-hidden">
                                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-700">
                                            <MetaItem label="Title" value={doc.tecnico.title} />
                                            <MetaItem label="H1" value={doc.tecnico.h1} />
                                        </div>
                                        <div className="border-t border-gray-700 p-4">
                                            <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-2">Meta Description</span>
                                            <p className="text-white/90">{doc.tecnico.description}</p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-700 border-t border-gray-700">
                                            <MetaItem label="Canonical" value={doc.tecnico.canonical} isCode />
                                            <MetaItem label="Robots" value={doc.tecnico.robots} />
                                        </div>
                                    </div>

                                    {/* Keywords */}
                                    {doc.tecnico.keywords && doc.tecnico.keywords.length > 0 && (
                                        <div className="bg-gray-800 rounded-2xl p-6">
                                            <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-4">Keywords</span>
                                            <div className="flex flex-wrap gap-2">
                                                {doc.tecnico.keywords.map((kw, i) => (
                                                    <span key={i} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                                                        {kw}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Schema.org */}
                                    {doc.tecnico.schema && doc.tecnico.schema.length > 0 && (
                                        <div className="bg-gray-800 rounded-2xl p-6">
                                            <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-4">Schema.org</span>
                                            <div className="flex flex-wrap gap-2">
                                                {doc.tecnico.schema.map((schema, i) => (
                                                    <span key={i} className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-mono">
                                                        {schema}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Open Graph */}
                                    {doc.tecnico.openGraph && (
                                        <div className="bg-gray-800 rounded-2xl p-6">
                                            <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-4">Open Graph</span>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <span className="text-gray-500 text-xs">og:type</span>
                                                    <p className="text-white font-mono">{doc.tecnico.openGraph.type}</p>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500 text-xs">og:image</span>
                                                    <p className="text-white font-mono">{doc.tecnico.openGraph.image}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {/* Contenido Negocio */}
                            {activeTab === 'negocio' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-6">
                                        Justificación de Negocio
                                    </h3>

                                    {/* Objetivo */}
                                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-6">
                                        <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">🎯 Objetivo de esta Página</span>
                                        <p className="text-white text-lg font-medium">{doc.negocio.objetivo}</p>
                                    </div>

                                    {/* Keywords Target */}
                                    {doc.negocio.keywordsTarget && doc.negocio.keywordsTarget.length > 0 && (
                                        <div className="bg-gray-800 rounded-2xl p-6">
                                            <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-4">🔑 Keywords Objetivo</span>
                                            <div className="space-y-3">
                                                {doc.negocio.keywordsTarget.map((item, i) => (
                                                    <div key={i} className="flex items-start gap-4 bg-gray-900/50 rounded-xl p-4">
                                                        <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-lg text-sm font-bold whitespace-nowrap">
                                                            {item.keyword}
                                                        </span>
                                                        <span className="text-gray-400 text-sm">→ {item.razon}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Diferenciadores */}
                                    {doc.negocio.diferenciadores && doc.negocio.diferenciadores.length > 0 && (
                                        <div className="bg-gray-800 rounded-2xl p-6">
                                            <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-4">✅ Por Qué Estos Elementos</span>
                                            <ul className="space-y-3">
                                                {doc.negocio.diferenciadores.map((diff, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="text-emerald-400 mt-1">✓</span>
                                                        <span className="text-white/80">{diff}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Interlinking */}
                                    {doc.negocio.interlinking && (
                                        <div className="bg-gray-800 rounded-2xl p-6">
                                            <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-4">🔗 Estrategia de Enlaces Internos</span>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-gray-900/50 rounded-xl p-4">
                                                    <span className="text-xs text-gray-400 block mb-2">Esta página debe enlazar a:</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {doc.negocio.interlinking.enlazaA?.map((link, i) => (
                                                            <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-mono">{link}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="bg-gray-900/50 rounded-xl p-4">
                                                    <span className="text-xs text-gray-400 block mb-2">Debe ser enlazada desde:</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {doc.negocio.interlinking.enlazadoDesde?.map((link, i) => (
                                                            <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs font-mono">{link}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {doc.negocio.interlinking.anchorTextSugerido && (
                                                <div className="mt-4 bg-gray-900/50 rounded-xl p-4">
                                                    <span className="text-xs text-gray-400">Anchor text sugerido: </span>
                                                    <span className="text-amber-400 font-medium">"{doc.negocio.interlinking.anchorTextSugerido}"</span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Featured Snippets */}
                                    {doc.negocio.featuredSnippets && doc.negocio.featuredSnippets.length > 0 && (
                                        <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-2xl p-6">
                                            <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-4">⭐ Oportunidades de Featured Snippets</span>
                                            <div className="space-y-2">
                                                {doc.negocio.featuredSnippets.map((snippet, i) => (
                                                    <div key={i} className="flex items-center gap-3 bg-gray-900/50 rounded-xl p-3">
                                                        <span className="text-amber-400">?</span>
                                                        <span className="text-white/80 italic">"{snippet}"</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

// Componente auxiliar para items de meta
const MetaItem = ({ label, value, isCode = false }) => (
    <div className="p-4">
        <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">{label}</span>
        {isCode ? (
            <code className="text-primary text-sm break-all">{value}</code>
        ) : (
            <p className="text-white/90">{value}</p>
        )}
    </div>
);

export default SEODocumentation;
