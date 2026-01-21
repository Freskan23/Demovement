import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Activity, Shield, Activity as ActivitySmall } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 border-t border-white/5">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="md:col-span-2">
                        <img
                            src="/imagenes/logos/footer-logo.svg"
                            alt="De Movement"
                            className="h-20 w-auto mb-10"
                        />
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">
                            Especialistas en readaptación de lesiones y entrenamiento personal en Las Rozas de Madrid. Ciencia, rigor y empatía en cada sesión.
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
                        <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary">Navegación</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="/nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
                            <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="/contacto" className="hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary">Contacto</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-primary shrink-0" />
                                <span>C. Real, 7, 28231 <br /> Las Rozas de Madrid, Madrid</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Activity size={20} className="text-primary shrink-0" />
                                <span>+34 600 000 000</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:row justify-between items-center space-y-6 md:space-y-0 text-gray-500 text-sm font-bold uppercase tracking-wider">
                    <p>© {new Date().getFullYear()} DE MOVEMENT. TODOS LOS DERECHOS RESERVADOS.</p>
                    <div className="flex space-x-8">
                        <a href="/legal" className="hover:text-white transition-colors">Aviso Legal</a>
                        <a href="/privacidad" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 transition-transform hover:scale-110 active:scale-95"
            >
                <img
                    src="/imagenes/iconos/icon-whatsapp-button.png"
                    alt="WhatsApp"
                    className="h-16 w-16 drop-shadow-2xl"
                />
            </a>
        </footer>
    );
};

export default Footer;
