import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Info, RefreshCw, ArrowRight } from 'lucide-react';

const RecoveryCalculator = ({ data, injuryName }) => {
    const [selections, setSelections] = useState({});
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (data) {
            const initialSelections = {};
            Object.keys(data.factors).forEach(key => {
                initialSelections[key] = data.factors[key][0].multiplier;
            });
            setSelections(initialSelections);
        }
    }, [data]);

    const calculate = () => {
        let weeks = data.baseWeeks;
        Object.values(selections).forEach(multiplier => {
            weeks *= multiplier;
        });
        setResult(Math.round(weeks));
    };

    if (!data) return null;

    return (
        <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm mt-20">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Calendar size={20} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Calculadora de Recuperación</h3>
            </div>

            <p className="text-gray-600 mb-10 font-medium">
                Selecciona los factores que mejor describen tu situación para estimar el tiempo de vuelta al 100% en {injuryName}.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {Object.entries(data.factors).map(([key, options]) => (
                    <div key={key}>
                        <label className="block text-xs font-black uppercase tracking-widest text-primary mb-4">
                            {key === 'severity' ? 'Severidad de la lesión' :
                                key === 'compliance' ? 'Compromiso con el tratamiento' :
                                    key === 'activity' ? 'Nivel de actividad deportiva' :
                                        key === 'lifestyle' ? 'Estilo de vida' : 'Factor adicional'}
                        </label>
                        <div className="space-y-3">
                            {options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelections({ ...selections, [key]: option.multiplier })}
                                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${selections[key] === option.multiplier
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-white bg-white text-gray-500 hover:border-gray-200 shadow-sm'
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">{option.label}</span>
                                        {selections[key] === option.multiplier && (
                                            <div className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-[10px]">
                                                ✓
                                            </div>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
                <button
                    onClick={calculate}
                    className="w-full md:w-auto bg-gray-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3"
                >
                    <RefreshCw size={18} />
                    Calcular Estimación
                </button>

                <AnimatePresence>
                    {result && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1 p-6 bg-white rounded-3xl border-2 border-primary/20 flex flex-col items-center justify-center text-center"
                        >
                            <span className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Tiempo estimado</span>
                            <div className="text-4xl font-black text-primary tracking-tighter">
                                {result} SEMANAS
                            </div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2 flex items-center gap-1">
                                <Info size={10} /> Sujeto a valoración clínica individual
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default RecoveryCalculator;
