import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Quote, ArrowRight } from 'lucide-react';

const CasosExitoIndex = () => {
    const testimonios = [
        {
            name: 'Juanjo',
            img: '/imagenes/testimonios/testimonio-video-juanjo.jpg',
            thumb: '/imagenes/testimonios/testimonio-video-juanjo-thumb.jpg',
            lesion: 'Lumbalgia Crónica',
            historia: 'Llevaba 3 años con dolor de espalda que no me dejaba ni atarme los zapatos. Después de 4 meses de readaptación, volví a jugar al pádel sin dolor.',
            tiempo: '4 meses de proceso'
        },
        {
            name: 'Patricia',
            img: '/imagenes/testimonios/testimonio-video-patricia.jpg',
            thumb: '/imagenes/testimonios/testimonio-video-patricia-thumb.jpg',
            lesion: 'Rotura de LCA',
            historia: 'Me operé del cruzado y tenía pánico a volver a esquiar. El trabajo de readaptación me devolvió la confianza para lanzarme por las pistas otra vez.',
            tiempo: '9 meses de proceso'
        },
        {
            name: 'David',
            img: '/imagenes/testimonios/testimonio-video-david.jpg',
            thumb: '/imagenes/testimonios/testimonio-video-david-thumb.jpg',
            lesion: 'Tendinopatía de Hombro',
            historia: 'Como crossfitter, el dolor de hombro me impedía hacer pull-ups y presses. Ahora entreno más fuerte que antes de lesionarme.',
            tiempo: '3 meses de proceso'
        },
        {
            name: 'Mamen',
            img: '/imagenes/testimonios/testimonio-video-mamen.jpg',
            thumb: '/imagenes/testimonios/testimonio-video-mamen-thumb.jpg',
            lesion: 'Dolor de Rodilla',
            historia: 'Tenía dolor al subir escaleras y pensaba que era por la edad. Resultó ser un problema de fuerza. Ahora corro 5K sin problemas.',
            tiempo: '5 meses de proceso'
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32">
            {/* Hero */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-40" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Testimonios Reales</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            HISTORIAS DE<br />
                            <span className="text-primary italic">SUPERACIÓN</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            Personas reales que recuperaron su libertad de movimiento. Sus historias son la mejor prueba de que es posible volver.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonios Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {testimonios.map((testimonio, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all"
                            >
                                {/* Video Thumbnail */}
                                <div className="relative aspect-video cursor-pointer group">
                                    <img
                                        src={testimonio.img}
                                        alt={`Testimonio ${testimonio.name}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                                            <img src="/imagenes/iconos/icon-play-video.svg" alt="Play" className="w-10 h-10" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <span className="text-primary font-black uppercase tracking-widest text-xs block mb-1">{testimonio.lesion}</span>
                                            <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">{testimonio.name}</h3>
                                        </div>
                                        <span className="text-gray-400 font-bold text-sm">{testimonio.tiempo}</span>
                                    </div>

                                    <div className="relative">
                                        <Quote size={32} className="text-primary/20 absolute -top-2 -left-2" />
                                        <p className="text-gray-600 font-medium text-lg leading-relaxed pl-6 italic">
                                            "{testimonio.historia}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        {[
                            { num: '+500', label: 'Casos de Éxito' },
                            { num: '95%', label: 'Vuelven a su Deporte' },
                            { num: '4.9', label: 'Valoración Media' },
                            { num: '0', label: 'Recaídas Graves' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-5xl md:text-6xl font-black text-primary mb-2">{stat.num}</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-8">
                        ¿QUIERES SER EL PRÓXIMO?
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 font-medium">
                        Tu historia de superación empieza con una valoración inicial.
                    </p>
                    <Link
                        to="/reservar/valoracion-inicial"
                        className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl"
                    >
                        Empezar Mi Proceso <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CasosExitoIndex;
