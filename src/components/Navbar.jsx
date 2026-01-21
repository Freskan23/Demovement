import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

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

    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-6'}`}>
            <Container>
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/imagenes/logos/header-logo.svg"
                            alt="De Movement"
                            className={`h-12 md:h-14 w-auto transition-all duration-500 ${!scrolled && isHome ? 'brightness-0 invert' : ''}`}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[15px] font-bold uppercase tracking-wide transition-all hover:scale-105 ${location.pathname === link.path
                                        ? 'text-[#4341EC]'
                                        : (scrolled || !isHome ? 'text-gray-900 border-transparent' : 'text-white border-transparent')
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            size="md"
                            className="ml-4"
                            onClick={() => window.open('https://wa.me/34600000000', '_blank')}
                        >
                            Contacto
                        </Button>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled || !isHome ? 'text-gray-900' : 'text-white'}`}>
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 top-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-gray-900">
                            <X size={40} />
                        </button>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-black text-gray-900 uppercase tracking-tighter hover:text-[#4341EC] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button size="lg" className="w-4/5 mt-10" onClick={() => window.open('https://wa.me/34600000000', '_blank')}>
                            Contacto Directo
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
