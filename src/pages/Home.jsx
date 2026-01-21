import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check, Play, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image */}
                {/* Background Video */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/imagenes/hero/hero-image.jpg"
                        className="w-full h-full object-cover"
                        onLoadedData={() => console.log("VIDEO CARGADO CORRECTAMENTE")}
                        onError={(e) => {
                            console.error("ERROR VIDEO:", e);
                            alert("ERROR CARGANDO VIDEO: " + e.currentTarget.error.message);
                        }}
                    >
                        <source src="/imagenes/hero/hero-video-web.mp4" type="video/mp4" />
                        Tu navegador no soporta video HTML5.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-5 py-2 bg-primary rounded-full text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
                            Centro de Readaptación en Las Rozas
                        </span>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                            RECUPERA TU<br />
                            <span className="text-primary italic">LIBERTAD</span><br />
                            DE MOVIMIENTO
                        </h1>

                        <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed mb-12 max-w-xl">
                            Readaptación de lesiones y entrenamiento personal basado en ciencia.
                            Vuelve a disfrutar de tu cuerpo <strong className="text-white">sin dolor ni miedo</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/reservar/valoracion-inicial"
                                className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 text-center"
                            >
                                Pedir Cita Gratuita
                            </Link>
                            <Link
                                to="/como-funciona"
                                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white/20 transition-all text-center"
                            >
                                Cómo Funciona
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* WhatsApp Floating */}
                <a
                    href="https://wa.me/34690285023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 transition-transform hover:scale-110 active:scale-95"
                >
                    <img src="/imagenes/iconos/icon-whatsapp-button.png" alt="WhatsApp" className="w-16 h-16 drop-shadow-2xl" />
                </a>
            </section>

            {/* ========== PROBLEMA / SOLUCIÓN ========== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6 block">El Problema</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight mb-8">
                                ¿TE HAS LESIONADO Y NO SABES CÓMO VOLVER?
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
                                <p>
                                    Te operaron del LCA hace meses, pero sigues con miedo a correr.
                                    El fisio te dio el alta, pero sientes que tu rodilla "no es la misma".
                                </p>
                                <p>
                                    Te duele la espalda cada vez que entrenas, y cada traumatólogo te dice algo diferente.
                                    Has probado de todo, pero nada funciona.
                                </p>
                                <p className="text-gray-900 font-bold">
                                    El problema no eres tú. El problema es que nadie te ha enseñado a volver <em>bien</em>.
                                </p>
                            </div>
                        </div>
                        <div className="bg-primary p-12 rounded-[50px] text-white">
                            <span className="text-white/60 font-black uppercase tracking-[0.3em] text-sm mb-6 block">La Solución</span>
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-8">
                                READAPTACIÓN ACTIVA CON PROFESIONALES
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Evaluación biomecánica completa',
                                    'Plan de trabajo 100% personalizado',
                                    'Sesiones supervisadas 1:1',
                                    'Seguimiento de progreso con métricas',
                                    'Colaboración con tu equipo médico'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-primary" strokeWidth={4} />
                                        </div>
                                        <span className="font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== SERVICIOS CON ICONOS REALES ========== */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Nuestros Servicios</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">CÓMO PODEMOS AYUDARTE</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: '/imagenes/iconos/icon-servicios-readaptacion.svg',
                                title: 'Readaptación de Lesiones',
                                desc: 'Vuelve a tu deporte después de una lesión con un proceso controlado y basado en ciencia.',
                                link: '/servicios/readaptacion-deportiva'
                            },
                            {
                                icon: '/imagenes/iconos/icon-servicios-entrenamiento.svg',
                                title: 'Entrenamiento Personal',
                                desc: 'Sesiones individuales 1:1 para mejorar tu fuerza, composición corporal y rendimiento.',
                                link: '/servicios/entrenamiento-personal'
                            },
                            {
                                icon: '/imagenes/iconos/icon-servicios-grupos.svg',
                                title: 'Valoración Funcional',
                                desc: 'Evaluación completa de 75 minutos para conocer tu punto de partida y diseñar tu plan.',
                                link: '/servicios/valoracion-funcional'
                            }
                        ].map((servicio, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    to={servicio.link}
                                    className="block p-10 bg-white rounded-[40px] border border-gray-100 shadow-lg hover:shadow-2xl transition-all group h-full"
                                >
                                    <img src={servicio.icon} alt={servicio.title} className="w-16 h-16 mb-8" />
                                    <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">{servicio.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed mb-6">{servicio.desc}</p>
                                    <span className="text-primary font-black flex items-center gap-2 uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                        Saber más <ChevronRight size={16} />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link to="/servicios" className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest hover:gap-5 transition-all">
                            Ver todos los servicios <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========== POR QUÉ NOSOTROS ========== */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6 block">Por Qué Elegirnos</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-10">
                                NO SOMOS UN GIMNASIO.<br />
                                <span className="text-primary italic">SOMOS ESPECIALISTAS.</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    {
                                        title: 'Profesionales Colegiados',
                                        desc: 'Todos nuestros técnicos son titulados universitarios con formación de postgrado en readaptación.'
                                    },
                                    {
                                        title: 'Atención 100% Individual',
                                        desc: 'Nunca grupos, nunca tablas genéricas. Cada sesión es solo para ti.'
                                    },
                                    {
                                        title: 'Basado en Ciencia',
                                        desc: 'Cada ejercicio y progresión tiene un porqué respaldado por la evidencia científica.'
                                    },
                                    {
                                        title: 'Instalaciones Privadas',
                                        desc: 'Sin aglomeraciones, sin esperas. Un espacio pensado para tu recuperación.'
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-3 h-3 bg-primary rounded-full mt-2 shrink-0" />
                                        <div>
                                            <h4 className="font-black text-xl uppercase mb-2">{item.title}</h4>
                                            <p className="text-gray-400 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="bg-primary p-8 rounded-[32px]">
                                    <div className="text-5xl font-black mb-2">+500</div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-80">Casos de Éxito</div>
                                </div>
                                <img
                                    src="/imagenes/testimonios/testimonio-video-juanjo.jpg"
                                    alt="Readaptación"
                                    className="w-full aspect-[4/3] object-cover rounded-[32px]"
                                />
                            </div>
                            <div className="space-y-6 pt-12">
                                <img
                                    src="/imagenes/testimonios/testimonio-video-mamen.jpg"
                                    alt="Entrenamiento"
                                    className="w-full aspect-[4/3] object-cover rounded-[32px]"
                                />
                                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[32px] border border-white/10">
                                    <div className="text-5xl font-black mb-2">1:1</div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-80">Atención Personal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TESTIMONIOS CON IMÁGENES REALES ========== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Testimonios</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter mb-4">HISTORIAS REALES</h2>
                        <p className="text-xl text-gray-500 font-medium">Personas que recuperaron su libertad de movimiento</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Juanjo', img: '/imagenes/testimonios/testimonio-video-juanjo.jpg', tipo: 'Lumbalgia' },
                            { name: 'Patricia', img: '/imagenes/testimonios/testimonio-video-patricia.jpg', tipo: 'LCA' },
                            { name: 'David', img: '/imagenes/testimonios/testimonio-video-david.jpg', tipo: 'Hombro' },
                            { name: 'Mamen', img: '/imagenes/testimonios/testimonio-video-mamen.jpg', tipo: 'Rodilla' }
                        ].map((testimonio, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative aspect-[3/4] rounded-[32px] overflow-hidden group cursor-pointer shadow-xl"
                            >
                                <img
                                    src={testimonio.img}
                                    alt={`Testimonio ${testimonio.name}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                                        <img src="/imagenes/iconos/icon-play-video.svg" alt="Play" className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-primary font-black uppercase tracking-widest text-xs mb-2 block">{testimonio.tipo}</span>
                                    <span className="text-white font-black text-2xl uppercase tracking-tighter">{testimonio.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link to="/casos-exito" className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest hover:gap-5 transition-all">
                            Ver más testimonios <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========== LESIONES QUE TRATAMOS ========== */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
                        <div>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Especialidades</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">EN QUÉ TE AYUDAMOS</h2>
                        </div>
                        <Link to="/lesiones" className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest hover:gap-5 transition-all shrink-0">
                            Ver todas <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { title: 'Rodilla', subtitle: 'LCA, Menisco', link: '/lesiones/rodilla' },
                            { title: 'Hombro', subtitle: 'Manguito Rotador', link: '/lesiones/hombro' },
                            { title: 'Espalda', subtitle: 'Lumbalgia, Hernias', link: '/lesiones/espalda' },
                            { title: 'Tobillo', subtitle: 'Esguinces', link: '/lesiones/tobillo' }
                        ].map((lesion, i) => (
                            <Link
                                key={i}
                                to={lesion.link}
                                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-lg hover:shadow-2xl hover:bg-primary hover:text-white transition-all group text-center"
                            >
                                <h3 className="text-xl font-black uppercase mb-2 group-hover:text-white">{lesion.title}</h3>
                                <p className="text-gray-500 font-bold text-sm uppercase tracking-widest group-hover:text-white/80">{lesion.subtitle}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== UBICACIÓN ========== */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6 block">Ubicación</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-8">
                                EN EL CORAZÓN DE<br />
                                <span className="text-primary italic">LAS ROZAS</span>
                            </h2>
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <MapPin size={24} className="text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-lg">C. Real, 7</p>
                                        <p className="text-gray-400">28231 Las Rozas de Madrid</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone size={24} className="text-primary shrink-0" />
                                    <a href="tel:+34690285023" className="font-bold text-lg hover:text-primary transition-colors">+34 690 285 023</a>
                                </div>
                            </div>
                            <p className="text-gray-400 font-medium mb-8">
                                A 5 minutos de Majadahonda. Fácil acceso desde la A-6 y M-50. Parking gratuito en la puerta.
                            </p>
                            <a
                                href="https://maps.google.com/?q=Calle+Real+7+Las+Rozas+de+Madrid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all"
                            >
                                <MapPin size={20} />
                                Cómo Llegar
                            </a>
                        </div>
                        <div className="bg-gray-800 rounded-[40px] aspect-video flex items-center justify-center overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.1234567890123!2d-3.8765432!3d40.4912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI5JzI4LjQiTiAzwrA1MicyMy42Ilc!5e0!3m2!1ses!2ses!4v1234567890123"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '300px' }}
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-[40px]"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CTA FINAL ========== */}
            <section className="py-32 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                        ¿LISTO PARA EMPEZAR?
                    </h2>
                    <p className="text-xl text-white/80 mb-12 font-medium max-w-2xl mx-auto">
                        Tu primera consulta es gratuita. Cuéntanos qué te pasa y diseñamos juntos el plan para solucionarlo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/reservar/valoracion-inicial"
                            className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl"
                        >
                            Pedir Cita Gratuita
                        </Link>
                        <a
                            href="https://wa.me/34690285023"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                        >
                            <img src="/imagenes/iconos/icon-whatsapp-button.png" alt="WhatsApp" className="w-6 h-6" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
