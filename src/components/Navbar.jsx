import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center min-w-[150px]">
                    <img
                        src="/imagenes/logos/header-logo.svg"
                        alt="De Movement"
                        className={`h-10 md:h-14 w-auto transition-all ${!scrolled && isHome ? 'brightness-0 invert' : ''}`}
                    />
                </Link>

                {/* Desktop Links - Usando clases explicitas para evitar clumping */}
                <div className="hidden lg:flex items-center">
                    <div className="flex items-center gap-1 md:gap-4 mr-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`navbar-link text-xs md:text-sm font-bold tracking-wider transition-colors hover:text-primary ${location.pathname === link.path
                                        ? 'text-primary'
                                        : (scrolled || !isHome ? 'text-gray-900' : 'text-white')
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        to="/contacto"
                        className={`px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg ${scrolled || !isHome
                                ? 'bg-[#4341EC] text-white hover:bg-[#4E36A3]'
                                : 'bg-white text-[#4341EC] hover:bg-gray-100'
                            }`}
                    >
                        Contacto
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
                    {isOpen ? (
                        <X size={32} className={scrolled || !isHome ? 'text-gray-900' : 'text-white'} />
                    ) : (
                        <Menu size={32} className={scrolled || !isHome ? 'text-gray-900' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-black p-4">
                    <X size={40} />
                </button>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-black text-gray-900 uppercase tracking-tighter hover:text-primary transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    to="/contacto"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#4341EC] text-white px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-lg shadow-2xl"
                >
                    Contacta ahora
                </Link>
            </div>
        </nav>
    );
};
