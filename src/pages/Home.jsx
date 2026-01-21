import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check, Activity, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section: Enfoque Clínico y Libertad de Movimiento */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4341EC] via-[#4E36A3] to-[#2D2175]">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-xs font-black uppercase tracking-[0.2em] mb-8 border border-white/20">
                            Centro de Readaptación Avanzada
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 text-white leading-[0.9] tracking-tighter uppercase">
                            RECUPERA TU<br />
                            <span className="text-white italic">LIBERTAD</span> DE MOVIMIENTO
                        </h1>

                        <div className="max-w-3xl mx-auto space-y-8 mb-16 font-work">
                            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed tracking-tight">
                                Gestión de lesiones y optimización del rendimiento basado en evidencia científica y rigor profesional.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-medium max-w-2xl mx-auto">
                                No solo entrenamos; evaluamos, planificamos y readaptamos tu cuerpo para que vuelvas a ser dueño de tus capacidades físicas.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="#valoracion"
                                className="w-full sm:w-auto bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-widest"
                            >
                                Solicitar Valoración Inicial
                            </a>
                            <a
                                href="#metodo"
                                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all uppercase tracking-widest"
                            >
                                Nuestro Método
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/34690285023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 transition-transform hover:scale-110 active:scale-95"
                >
                    <img src="/imagenes/iconos/icon-whatsapp-button.png" alt="WhatsApp" className="w-16 h-16 drop-shadow-2xl" />
                </a>
            </section>

            {/* Nueva Sección: El Método Científico (Arquitectura Clave) */}
            <section id="metodo" className="py-32 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Rigor Técnico</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter mb-4">EL MÉTODO DE MOVEMENT</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                            Un proceso clínico estructurado para garantizar resultados duraderos y seguros.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            {
                                step: "01",
                                title: "Evaluación Integral",
                                desc: "Análisis de patrones de movimiento, rangos de fuerza y contexto biopsicosocial del paciente.",
                                icon: <Activity className="w-8 h-8" />
                            },
                            {
                                step: "02",
                                title: "Planificación Base-Evidencia",
                                desc: "Diseño de protocolos específicos adaptados a tu patología y objetivos individuales.",
                                icon: <Shield className="w-8 h-8" />
                            },
                            {
                                step: "03",
                                title: "Readaptación Activa",
                                desc: "Ejecución supervisada centrada en la recuperación de la función y el fortalecimiento estructural.",
                                icon: <Users className="w-8 h-8" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <span className="absolute -top-10 left-0 text-gray-100 text-8xl font-black group-hover:text-primary/5 transition-colors -z-10">{item.step}</span>
                                <div className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:shadow-2xl group-hover:border-primary/10 transition-all">
                                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 uppercase mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Áreas de Especialización (Sustituye a Servicios Genéricos) */}
            <section className="py-32 bg-[#F8F8F8] border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Especialidades Clínicas</span>
                            <h2 className="text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-6">READAPTACIÓN DE PATOLOGÍAS</h2>
                            <p className="text-lg text-gray-600 font-medium font-work">
                                Expertos en la gestión de lesiones musculoesqueléticas mediante el movimiento controlado.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Rodilla & LCA', slug: 'rodilla-lca', area: 'Post-Cirugía y Preventivo' },
                            { title: 'Columna & Lumbalgia', slug: 'espalda-lumbalgia', area: 'Gestión de Hernias y Dolor' },
                            { title: 'Hombro & Manguito', slug: 'hombro-rotador', area: 'Inestabilidad y Movilidad' },
                            { title: 'Tobillo & Esguinces', slug: 'tobillo-esguince', area: 'Readaptación Funcional' },
                        ].map((specialty, i) => (
                            <Link
                                key={i}
                                to={`/readaptacion/${specialty.slug}`}
                                className="group p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <ArrowRight size={20} />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2 leading-tight">{specialty.title}</h3>
                                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{specialty.area}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rigor Profesional: El factor diferencial de un centro especializado */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                            <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9] mb-10 relative">
                                PROFESIONALES <br /> <span className="text-primary italic">COLEGIADOS</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                                En DE MOVEMENT, tu salud está en manos de titulados universitarios con formación de postgrado en readaptación deportiva. Huimos de lo convencional para ofrecerte seguridad y excelencia.
                            </p>
                            <div className="space-y-6">
                                {[
                                    'Evaluación Biomecánica Avanzada',
                                    'Colaboración con Especialistas Médicos',
                                    'Uso de Tecnología Basada en Datos',
                                    'Entorno de Trabajo Privado y Exclusivo'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                                            <Check size={14} strokeWidth={4} />
                                        </div>
                                        <span className="font-black text-gray-900 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 relative">
                            <div className="absolute inset-0 bg-primary/5 rounded-[60px] blur-[100px] -z-10" />
                            <div className="space-y-6 pt-12">
                                <img src="/imagenes/hero/hero-image.jpg" className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl" alt="Evaluación" />
                                <div className="p-8 bg-primary rounded-[32px] text-white shadow-xl">
                                    <div className="text-4xl font-black mb-2">+500</div>
                                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Casos Éxito</div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-8 bg-gray-900 rounded-[32px] text-white shadow-xl">
                                    <div className="text-4xl font-black mb-2">1:1</div>
                                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Atención Personal</div>
                                </div>
                                <img src="/imagenes/testimonios/testimonio-video-juanjo.jpg" className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl" alt="Readaptación" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonios y Prueba Social de Salud */}
            <section className="py-32 bg-gray-900 text-white relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Resultados Reales</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">HISTORIAS DE SUPERACIÓN</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            { name: 'Juanjo', img: '/imagenes/testimonios/testimonio-video-juanjo.jpg', tag: 'Readaptación Lumbar' },
                            { name: 'Mamen', img: '/imagenes/testimonios/testimonio-video-mamen.jpg', tag: 'Recuperación de Rodilla' },
                        ].map((test, i) => (
                            <div key={i} className="relative aspect-video rounded-[32px] overflow-hidden group cursor-pointer shadow-2xl ring-1 ring-white/10">
                                <img
                                    src={test.img}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                                    alt={`Testimonio ${test.name}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                                        <Activity className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-10 left-10">
                                    <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-2 block">{test.tag}</span>
                                    <span className="text-white font-black text-3xl uppercase tracking-tighter">{test.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulario de Valoración (CTA Final Crítico) */}
            <section id="valoracion" className="py-32 bg-white relative">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Evaluación Inicial</span>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 uppercase tracking-tighter leading-none">PIDE TU CITA</h2>
                        <p className="text-xl text-gray-500 font-medium">Comienza tu proceso de readaptación con una valoración técnica detallada.</p>
                    </div>

                    <form className="space-y-10 p-12 md:p-16 bg-white rounded-[60px] shadow-2xl border border-gray-100 relative">
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase tracking-widest text-primary ml-4">Nombre Completo*</label>
                                <input type="text" className="w-full px-8 py-6 bg-gray-50/50 border-0 rounded-3xl shadow-inner focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-gray-800" placeholder="Ej: Pablo Martín" required />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[11px] font-black uppercase tracking-widest text-primary ml-4">Email de Contacto*</label>
                                <input type="email" className="w-full px-8 py-6 bg-gray-50/50 border-0 rounded-3xl shadow-inner focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-gray-800" placeholder="pablo@ejemplo.com" required />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase tracking-widest text-primary ml-4">Describe tu lesión o dolor actual*</label>
                            <textarea rows="5" className="w-full px-8 py-6 bg-gray-50/50 border-0 rounded-3xl shadow-inner focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none font-medium text-gray-700" placeholder="Cuéntanos qué te ocurre y cuánto tiempo llevas con ello..."></textarea>
                        </div>

                        <div className="flex items-center gap-4 ml-4">
                            <div className="relative flex items-center">
                                <input type="checkbox" id="privacy-clinical" className="w-5 h-5 rounded-md border-gray-300 text-primary focus:ring-primary accent-primary" required />
                            </div>
                            <label htmlFor="privacy-clinical" className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Acepto el tratamiento de datos para la valoración clínica</label>
                        </div>

                        <button type="submit" className="w-full bg-primary text-white py-8 rounded-[40px] text-xl font-black uppercase tracking-[0.2em] shadow-3xl shadow-primary/40 hover:bg-primary-dark transition-all hover:scale-[1.02] active:scale-95">
                            Solicitar Valoración Integral
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
