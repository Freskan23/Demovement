import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

const Equipo = () => {
    const team = [
        {
            name: 'Nombre Profesional',
            role: 'Director Técnico',
            bio: 'Licenciado en Ciencias de la Actividad Física y el Deporte. Máster en Readaptación Deportiva.',
            image: '/imagenes/hero/hero-image.jpg',
            colegiado: 'Nº Colegiado: XXXXX'
        },
        {
            name: 'Nombre Profesional 2',
            role: 'Readaptador Deportivo',
            bio: 'Graduado en Fisioterapia. Especialista en readaptación de lesiones de rodilla.',
            image: '/imagenes/testimonios/testimonio-video-juanjo.jpg',
            colegiado: 'Nº Colegiado: XXXXX'
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32">
            {/* Hero */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Nuestro Equipo</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                            PROFESIONALES<br />
                            <span className="text-primary italic">COLEGIADOS</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                            Tu salud está en manos de titulados universitarios con formación de postgrado y experiencia demostrada en readaptación deportiva.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-10">
                                    <span className="text-primary font-black uppercase tracking-widest text-xs mb-2 block">{member.role}</span>
                                    <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">{member.name}</h3>
                                    <p className="text-gray-600 font-medium mb-6">{member.bio}</p>
                                    <p className="text-primary/60 font-bold text-xs uppercase tracking-widest">{member.colegiado}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Equipo;
