import React from 'react';
import { MapPin, Phone, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="lg:col-span-1">
                        <img src="/imagenes/logos/footer-logo.svg" alt="De Movement" className="h-14 w-auto mb-8" />
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Centro de readaptación avanzada y optimización del rendimiento en Las Rozas de Madrid.
                        </p>
                        <div className="flex space-x-4">
                            <img src="/imagenes/footer/footer-logo-plan-transformacion-eu.webp" alt="Plan Transformación" className="h-10 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="/imagenes/footer/footer-logo-next-generation-eu.webp" alt="Next Generation" className="h-10 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black mb-6 uppercase tracking-widest text-primary">Navegación</h4>
                        <ul className="space-y-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
                            <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                            <li><Link to="/lesiones" className="hover:text-white transition-colors">Lesiones</Link></li>
                            <li><Link to="/precios" className="hover:text-white transition-colors">Precios</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black mb-6 uppercase tracking-widest text-primary">Ayuda</h4>
                        <ul className="space-y-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
                            <li><Link to="/como-funciona" className="hover:text-white transition-colors">Cómo Funciona</Link></li>
                            <li><Link to="/primera-visita" className="hover:text-white transition-colors">Primera Visita</Link></li>
                            <li><Link to="/preguntas-frecuentes" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black mb-6 uppercase tracking-widest text-primary">Contacto</h4>
                        <ul className="space-y-4 text-gray-400 text-xs font-bold uppercase tracking-widest">
                            <li className="flex items-start space-x-3">
                                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                                <span>C. Real, 7, 28231<br />Las Rozas de Madrid</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={16} className="text-primary shrink-0" />
                                <span>+34 690 285 023</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
                    <p>© {new Date().getFullYear()} DE MOVEMENT. CENTRO DE READAPTACIÓN AVANZADA.</p>
                    <div className="flex space-x-8">
                        <Link to="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
                        <Link to="/politica-privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link to="/politica-cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>

            {/* WhatsApp */}
            <a
                href="https://wa.me/34690285023"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 transition-transform hover:scale-110 active:scale-95"
            >
                <img src="/imagenes/iconos/icon-whatsapp-button.png" alt="WhatsApp" className="h-16 w-16 drop-shadow-2xl" />
            </a>
        </footer>
    );
};

export default Footer;
