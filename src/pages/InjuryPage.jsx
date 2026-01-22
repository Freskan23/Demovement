import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Shield, MapPin, ChevronLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { injuries } from '../data/injuries';
import SEOHead from '../components/SEO/SEOHead';

const InjuryPage = () => {
    const { slug } = useParams();
    const injury = injuries[slug];

    if (!injury) return <Navigate to="/" />;

    // Generate SEO metadata
    const pageTitle = `${injury.title} - ${injury.subtitle} | Las Rozas`;
    const metaDescription = injury.content.intro.substring(0, 155) + '...';

    // Generate keywords from content
    const keywords = `${injury.title.toLowerCase()}, ${injury.subtitle.toLowerCase()}, readaptación ${slug}, fisioterapia deportiva Las Rozas, recuperación lesiones Majadahonda, ${injury.content.symptoms?.map(s => s.title.toLowerCase()).join(', ') || ''}`;

    // Schema Markup: FAQPage
    const faqSchema = injury.content.faq ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": injury.content.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    // Schema Markup: MedicalCondition
    const medicalConditionSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": injury.subtitle,
        "alternateName": injury.title,
        "description": injury.content.description || injury.content.intro,
        "signOrSymptom": injury.content.symptoms?.map(s => ({
            "@type": "MedicalSignOrSymptom",
            "name": s.title,
            "description": s.desc
        })) || [],
        "riskFactor": injury.content.causes?.map(c => c.title) || [],
        "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Readaptación Funcional",
            "description": "Programa progresivo de readaptación basado en evidencia científica"
        }
    };

    // Schema Markup: LocalBusiness (Demovement)
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Demovement",
        "description": "Centro de Readaptación Funcional en Las Rozas",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Las Rozas",
            "addressRegion": "Madrid",
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.4900",
            "longitude": "-3.8700"
        },
        "medicalSpecialty": "Readaptación Funcional y Fisioterapia Deportiva"
    };

    // Combine schemas
    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            medicalConditionSchema,
            localBusinessSchema,
            ...(faqSchema ? [faqSchema] : [])
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <SEOHead
                title={pageTitle}
                description={metaDescription}
                keywords={keywords}
                canonical={`/lesiones/${slug}`}
                schema={combinedSchema}
                ogImage={injury.heroImage}
            />

            {/* Breadcrumbs */}
            <nav className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <ol className="flex items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <Link to="/" itemProp="item" className="text-gray-500 hover:text-primary transition-colors">
                                <span itemProp="name">Inicio</span>
                            </Link>
                            <meta itemProp="position" content="1" />
                        </li>
                        <span className="text-gray-300">/</span>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <Link to="/servicios/readaptacion-lesiones" itemProp="item" className="text-gray-500 hover:text-primary transition-colors">
                                <span itemProp="name">Readaptación de Lesiones</span>
                            </Link>
                            <meta itemProp="position" content="2" />
                        </li>
                        <span className="text-gray-300">/</span>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="font-semibold text-gray-900">
                            <span itemProp="name">{injury.title}</span>
                            <meta itemProp="position" content="3" />
                        </li>
                    </ol>
                </div>
            </nav>

            {/* Hero Minimalista y Profesional - Optimized for Mobile */}
            <section className="relative pt-20 pb-12 md:pt-48 md:pb-32 bg-gray-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
                        <ChevronLeft size={16} />
                        Volver a Inicio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-8">
                            <Activity size={14} />
                            <span>Especialidad en Readaptación</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            {injury.title} <br />
                            <span className="text-primary italic">{injury.subtitle}</span>
                        </h1>
                        <p className="flex items-center text-gray-500 font-bold uppercase tracking-widest text-sm">
                            <MapPin size={18} className="mr-2 text-primary" />
                            Unidad de Readaptación Avanzada | Las Rozas
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section: Enfoque Clínico */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-2 space-y-20">
                        {/* Intro */}
                        <div>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Evaluación Inicial</span>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-8">ABORDAJE BASADO EN CIENCIA</h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
                                {injury.content.intro}
                            </p>
                            {injury.content.description && (
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {injury.content.description}
                                </p>
                            )}
                        </div>

                        {/* Symptoms */}
                        {injury.content.symptoms && injury.content.symptoms.length > 0 && (
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">SÍNTOMAS COMUNES</h3>
                                <div className="space-y-6">
                                    {injury.content.symptoms.map((symptom, i) => (
                                        <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                                <div className="w-3 h-3 bg-primary rounded-full" />
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 text-lg font-black mb-2 uppercase tracking-tight">{symptom.title}</h4>
                                                <p className="text-gray-600 leading-relaxed">{symptom.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Causes */}
                        {injury.content.causes && injury.content.causes.length > 0 && (
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">CAUSAS PRINCIPALES</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {injury.content.causes.map((cause, i) => (
                                        <div key={i} className="p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-primary/20 transition-all">
                                            <h4 className="text-gray-900 text-lg font-black mb-3 uppercase tracking-tight">{cause.title}</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">{cause.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Why Us / Context */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">NUESTRO ENFOQUE</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {injury.content.whyUs.map((item, i) => (
                                    <div key={i} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-2xl hover:bg-white transition-all">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 text-primary">
                                            <Shield size={24} />
                                        </div>
                                        <h4 className="text-gray-900 text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Process Phases */}
                        <div className="bg-gray-900 p-12 md:p-16 rounded-[60px] text-white relative overflow-hidden shadow-3xl">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                            <h3 className="text-3xl md:text-4xl font-black mb-12 uppercase italic relative z-10">FASES DE LA READAPTACIÓN</h3>
                            <div className="space-y-12 relative z-10">
                                {injury.content.process.map((step, i) => (
                                    <div key={i} className="flex flex-col md:flex-row gap-8 group">
                                        <div className="text-primary font-black text-6xl tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">
                                            {(i + 1).toString().padStart(2, '0')}
                                        </div>
                                        <div className="md:pt-4">
                                            <h4 className="text-white font-black text-2xl mb-3 uppercase tracking-tight">{step.title}</h4>
                                            <p className="text-gray-400 font-medium leading-relaxed text-lg max-w-xl">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Prevention */}
                        {injury.content.prevention && injury.content.prevention.length > 0 && (
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">PREVENCIÓN</h3>
                                <div className="space-y-4">
                                    {injury.content.prevention.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start p-6 bg-primary/5 rounded-3xl border border-primary/10">
                                            <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-black">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 font-black mb-2 uppercase tracking-tight">{item.title}</h4>
                                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* FAQ Accordion */}
                        {injury.content.faq && injury.content.faq.length > 0 && (
                            <FAQAccordion faqs={injury.content.faq} />
                        )}

                        {/* Final CTA */}
                        <div className="bg-gradient-to-br from-primary to-primary-dark p-10 md:p-14 rounded-[60px] text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">¿Listo para Comenzar tu Recuperación?</h3>
                                <p className="text-white/90 text-lg mb-8 max-w-2xl leading-relaxed">
                                    No esperes más para volver a hacer lo que amas. Nuestro equipo de especialistas en readaptación está listo para diseñar tu plan personalizado de recuperación.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/reservar/valoracion-inicial"
                                        className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                                    >
                                        <Activity size={20} />
                                        Reservar Valoración
                                    </Link>
                                    <Link
                                        to="/contacto"
                                        className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/20 transition-all border-2 border-white/30"
                                    >
                                        Contactar
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 p-10 bg-white rounded-[50px] border border-gray-100 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />
                            <h3 className="text-2xl font-black mb-6 uppercase text-gray-900 tracking-tight leading-none">CITA DE VALORACIÓN</h3>
                            <p className="text-gray-500 mb-8 font-medium italic">Evaluamos tu punto de partida para diseñar el camino hacia tu recuperación.</p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    'Análisis Biomecánico 1:1',
                                    'Informe de Valoración',
                                    'Propuesta de Tiempos',
                                    'Acceso Preferente en Las Rozas'
                                ].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-700">
                                        <div className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/30" />
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/reservar/valoracion-inicial"
                                className="block w-full text-center bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                            >
                                <Activity size={18} />
                                Iniciar Proceso
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// FAQ Accordion Component
const FAQAccordion = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">PREGUNTAS FRECUENTES</h3>
            <div className="space-y-4">
                {faqs.map((item, i) => (
                    <div key={i} className="bg-white rounded-3xl border-2 border-gray-100 overflow-hidden">
                        <button
                            onClick={() => toggleFAQ(i)}
                            className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            aria-expanded={openIndex === i}
                        >
                            <h4 className="text-gray-900 text-base md:text-lg font-black uppercase tracking-tight pr-4">
                                {item.question}
                            </h4>
                            <motion.div
                                animate={{ rotate: openIndex === i ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                            >
                                <ChevronDown size={24} className="text-primary" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InjuryPage;
