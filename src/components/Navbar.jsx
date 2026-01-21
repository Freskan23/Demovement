import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, ChevronDown } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const mainLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Lesiones', path: '/lesiones' },
        { name: 'Precios', path: '/precios' },
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

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center">
                    <div className="flex items-center gap-1 md:gap-6 mr-8">
                        {mainLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[12px] font-black uppercase tracking-widest transition-colors hover:text-primary px-3 py-2 ${location.pathname === link.path || location.pathname.startsWith(link.path + '/')
                                        ? 'text-primary'
                                        : (scrolled || !isHome ? 'text-gray-900' : 'text-white')
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        to="/reservar/valoracion-inicial"
                        className={`flex items-center gap-2 px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl ${scrolled || !isHome
                                ? 'bg-primary text-white hover:bg-primary-dark shadow-primary/20'
                                : 'bg-white text-primary hover:bg-gray-100'
                            }`}
                    >
                        <Activity size={16} />
                        Pedir Cita
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

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-6 transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-black p-4">
                    <X size={40} />
                </button>
                {mainLinks.map((link) => (
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
                    to="/reservar/valoracion-inicial"
                    onClick={() => setIsOpen(false)}
                    className="bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl flex items-center gap-4 mt-4"
                >
                    <Activity size={24} />
                    Pedir Cita
                </Link>
            </div>
        </nav>
    );
};
