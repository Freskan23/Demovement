import React from 'react';
import { Activity, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-primary-dark border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <Activity className="h-8 w-8 text-accent" />
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                DE<span className="text-accent">MOVEMENT</span>
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Especialistas en readaptación avanzada en Las Rozas. Recupera tu rendimiento con un método basado en la ciencia y la individualización.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-black transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-black transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Ubicación</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                                <span>Las Rozas, Madrid.<br /><span className="text-accent/60 text-sm">A 5 min de Majadahonda</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-accent" size={18} />
                                <span>+34 600 000 000</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-accent" size={18} />
                                <span>info@demovement.es</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Navegación</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="/" className="hover:text-accent transition-colors">Inicio</a></li>
                            <li><a href="/readaptacion/rodilla-lca" className="hover:text-accent transition-colors">Rodilla</a></li>
                            <li><a href="/readaptacion/espalda-lumbalgia" className="hover:text-accent transition-colors">Espalda</a></li>
                            <li><a href="/readaptacion/hombro-rotador" className="hover:text-accent transition-colors">Hombro</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Demovement. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
