import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

/**
 * Componente de FAQs con Schema Markup
 * @param {Array} faqs - Array de objetos {question, answer}
 */
const FAQSection = ({ faqs = [] }) => {
    const [openIndex, setOpenIndex] = useState(null);

    // Schema Markup para FAQs
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (faqs.length === 0) return null;

    return (
        <div className="bg-white">
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>

            <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-6">
                    <HelpCircle size={14} />
                    <span>Preguntas Frecuentes</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
                    Resolvemos tus dudas
                </h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50 hover:border-primary/30 transition-colors"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors"
                            aria-expanded={openIndex === index}
                        >
                            <h3 className="text-lg font-bold text-gray-900 pr-4">
                                {faq.question}
                            </h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="shrink-0"
                            >
                                <ChevronDown size={24} className="text-primary" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-gray-700 font-medium leading-relaxed">
                                        {faq.answer}
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

export default FAQSection;
