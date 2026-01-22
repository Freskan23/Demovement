import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const SelfAssessmentTest = ({ data }) => {
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    const toggleQuestion = (idx) => {
        setAnswers({
            ...answers,
            [idx]: !answers[idx]
        });
    };

    const getResult = () => {
        let score = 0;
        data.questions.forEach((q, idx) => {
            if (answers[idx]) score += q.score;
        });

        return data.thresholds.find(t => score >= t.min && score <= t.max) || data.thresholds[0];
    };

    if (!data) return null;

    const currentResult = getResult();

    return (
        <div className="bg-gray-900 rounded-[60px] p-8 md:p-16 text-white relative overflow-hidden my-24 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                        <ClipboardList size={20} />
                    </div>
                    <h3 className="text-2xl font-black uppercase italic">{data.title}</h3>
                </div>

                <p className="text-gray-400 mb-12 font-medium max-w-xl">
                    Marca los síntomas o situaciones que experimentas habitualmente para obtener una recomendación preliminar.
                </p>

                {!showResult ? (
                    <div className="space-y-4 mb-12">
                        {data.questions.map((q, idx) => (
                            <button
                                key={idx}
                                onClick={() => toggleQuestion(idx)}
                                className={`w-full p-6 rounded-3xl border-2 text-left transition-all flex items-center gap-4 ${answers[idx]
                                        ? 'border-primary bg-primary/10 text-white'
                                        : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${answers[idx] ? 'bg-primary text-white' : 'border-2 border-white/20'
                                    }`}>
                                    {answers[idx] && <CheckCircle2 size={14} />}
                                </div>
                                <span className="font-bold text-lg">{q.q}</span>
                            </button>
                        ))}

                        <button
                            onClick={() => setShowResult(true)}
                            className="w-full mt-10 bg-primary text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] hover:bg-primary-dark transition-all flex items-center justify-center gap-3 group"
                        >
                            Ver Recomendación
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 rounded-[40px] p-10 border-2 border-primary/30"
                    >
                        <div className="flex items-start gap-6 mb-8">
                            <div className="w-16 h-16 bg-primary rounded-[20px] flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/30">
                                <AlertCircle size={32} />
                            </div>
                            <div>
                                <span className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-2 block">Diagnóstico Preliminar</span>
                                <h4 className="text-2xl font-black uppercase text-white leading-tight">
                                    {currentResult.result}
                                </h4>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/34690285023"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-white text-gray-900 py-5 rounded-2xl font-black uppercase tracking-widest text-center hover:bg-gray-100 transition-all border-b-4 border-gray-300"
                            >
                                Consultar con especialista
                            </a>
                            <button
                                onClick={() => {
                                    setShowResult(false);
                                    setAnswers({});
                                }}
                                className="px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all underline underline-offset-8"
                            >
                                Repetir Test
                            </button>
                        </div>

                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-8 text-center italic">
                            * Este test es una herramienta de orientación y no sustituye una valoración clínica presencial.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default SelfAssessmentTest;
