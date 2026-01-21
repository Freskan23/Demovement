import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Activity } from 'lucide-react';

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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <Activity className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                        <span className="text-2xl font-bold tracking-tighter text-white">
                            DE<span className="text-accent">MOVEMENT</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/34600000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-accent-light transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                        >
                            Cita Previa
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-accent focus:outline-none">
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
                        className="md:hidden glass border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-accent hover:bg-white/5 transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="https://wa.me/34600000000"
                                    className="block w-full text-center bg-accent text-black py-3 rounded-xl font-bold"
                                >
                                    Cita Previa
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
