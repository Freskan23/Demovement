import React from 'react';
import { MapPin, Activity, Shield, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="md:col-span-2">
                        <img
                            src="/imagenes/logos/footer-logo.svg"
                            alt="De Movement"
                            className="h-16 w-auto mb-10"
                        />
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">
                            Centro especializado en readaptación avanzada y optimización del rendimiento. Rigor científico y atención personalizada en Las Rozas de Madrid.
                        </p>
                        <div className="flex space-x-6">
                            {[
                                { name: 'Plan Transformación', src: '/imagenes/footer/footer-logo-plan-transformacion-eu.webp' },
                                { name: 'Next Generation', src: '/imagenes/footer/footer-logo-next-generation-eu.webp' }
                            ].map((logo) => (
                                <img
                                    key={logo.name}
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-12 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity"
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-primary">Arquitectura</h4>
                        <ul className="space-y-4 text-gray-400 font-bold uppercase text-xs tracking-widest">
                            <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="/#metodo" className="hover:text-white transition-colors">Nuestro Método</a></li>
                            <li><a href="https://demovement.es/blog/" className="hover:text-white transition-colors">Artículos Científicos</a></li>
                            <li><a href="#valoracion" className="hover:text-white transition-colors">Solicitar Valoración</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-primary">Sede Central</h4>
                        <ul className="space-y-4 text-gray-400 font-bold uppercase text-xs tracking-widest">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <span>C. Real, 7, 28231 <br /> Las Rozas de Madrid, Madrid</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+34 690 285 023</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
                    <p>© {new Date().getFullYear()} DE MOVEMENT. CENTRO DE READAPTACIÓN AVANZADA.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
