import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Rodilla', path: '/readaptacion/rodilla-lca' },
        { name: 'Espalda', path: '/readaptacion/espalda-lumbalgia' },
        { name: 'Hombro', path: '/readaptacion/hombro-rotador' },
        { name: 'Tobillo', path: '/readaptacion/tobillo-esguince' },
        { name: 'Tendinitis', path: '/readaptacion/tendinitis' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/imagenes/logos/header-logo.svg"
                            alt="De Movement"
                            className={`h-12 w-auto transition-all ${!scrolled && location.pathname === '/' ? 'brightness-0 invert' : ''}`}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[15px] font-bold transition-colors hover:text-primary ${location.pathname === link.path
                                        ? 'text-primary'
                                        : (scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white')
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/34600000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-9 py-[13px] rounded-lg font-bold text-[14px] hover:bg-primary-dark transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/25 uppercase tracking-wider"
                        >
                            Contacto
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'}`}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-2 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 rounded-lg text-lg font-bold text-gray-900 hover:text-primary hover:bg-gray-50 transition-all font-heading uppercase"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-6">
                                <a
                                    href="https://wa.me/34600000000"
                                    className="block w-full text-center bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-primary/20"
                                >
                                    Contacto
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
