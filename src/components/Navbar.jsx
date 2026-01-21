import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, ChevronDown, ChevronRight } from 'lucide-react';
import { servicios, lesiones } from '../data/siteData';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar dropdown al cambiar de página
    useEffect(() => {
        setActiveDropdown(null);
        setIsOpen(false);
    }, [location.pathname]);

    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center min-w-[150px]">
                    <img
                        src="/imagenes/logos/header-logo.svg"
                        alt="De Movement"
                        className={`h-10 md:h-12 w-auto transition-all ${!scrolled && isHome ? 'brightness-0 invert' : ''}`}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {/* Inicio */}
                    <Link
                        to="/"
                        className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : (scrolled || !isHome ? 'text-gray-900' : 'text-white')
                            }`}
                    >
                        Inicio
                    </Link>

                    {/* Nosotros */}
                    <Link
                        to="/nosotros"
                        className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-colors hover:text-primary ${location.pathname.startsWith('/nosotros') ? 'text-primary' : (scrolled || !isHome ? 'text-gray-900' : 'text-white')
                            }`}
                    >
                        Nosotros
                    </Link>

                    {/* Servicios Mega Menu */}
                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown('servicios')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button
                            className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-colors hover:text-primary flex items-center gap-1 ${location.pathname.startsWith('/servicios') ? 'text-primary' : (scrolled || !isHome ? 'text-gray-900' : 'text-white')
                                }`}
                        >
                            Servicios
                            <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'servicios' ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Mega Menu Servicios */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${activeDropdown === 'servicios' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                            <div className="bg-white rounded-[24px] shadow-2xl border border-gray-100 p-8 min-w-[600px]">
                                <div className="flex gap-8">
                                    {/* Lista de Servicios */}
                                    <div className="flex-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block">Nuestros Servicios</span>
                                        <div className="space-y-1">
                                            {Object.entries(servicios).map(([slug, servicio]) => (
                                                <Link
                                                    key={slug}
                                                    to={`/servicios/${slug}`}
                                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                                >
                                                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                                        <Activity size={18} />
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-gray-900 block text-sm">{servicio.title}</span>
                                                        <span className="text-gray-500 text-xs">{servicio.duracionSesion} · {servicio.precio}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="w-48 bg-primary rounded-2xl p-6 text-white flex flex-col justify-between">
                                        <div>
                                            <span className="text-2xl font-black uppercase leading-tight block mb-2">¿No sabes cuál elegir?</span>
                                            <p className="text-white/80 text-xs font-medium">Reserva una consulta gratuita y te orientamos.</p>
                                        </div>
                                        <Link to="/reservar/valoracion-inicial" className="mt-4 bg-white text-primary text-center py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-100 transition-colors">
                                            Pedir Cita
                                        </Link>
                                    </div>
                                </div>

                                {/* Ver todos */}
                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <Link to="/servicios" className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                        Ver todos los servicios <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lesiones Mega Menu */}
                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown('lesiones')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button
                            className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-colors hover:text-primary flex items-center gap-1 ${location.pathname.startsWith('/lesiones') ? 'text-primary' : (scrolled || !isHome ? 'text-gray-900' : 'text-white')
                                }`}
                        >
                            Lesiones
                            <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'lesiones' ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Mega Menu Lesiones */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${activeDropdown === 'lesiones' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                            <div className="bg-white rounded-[24px] shadow-2xl border border-gray-100 p-8 min-w-[700px]">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 block">Lesiones por Zona Corporal</span>

                                <div className="grid grid-cols-2 gap-6">
                                    {Object.entries(lesiones).map(([slug, categoria]) => (
                                        <div key={slug} className="group">
                                            <Link
                                                to={`/lesiones/${slug}`}
                                                className="flex items-center gap-3 mb-3 hover:text-primary transition-colors"
                                            >
                                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-gray-600">
                                                    <Activity size={18} />
                                                </div>
                                                <span className="font-black text-gray-900 uppercase tracking-tight">{categoria.title}</span>
                                            </Link>
                                            <div className="pl-13 flex flex-wrap gap-2 ml-13">
                                                {Object.entries(categoria.subcategorias).map(([subSlug, sub]) => (
                                                    <Link
                                                        key={subSlug}
                                                        to={`/lesiones/${slug}/${subSlug}`}
                                                        className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:bg-primary hover:text-white transition-colors"
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Ver todos */}
                                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <Link to="/lesiones" className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                        Ver todas las lesiones <ChevronRight size={14} />
                                    </Link>
                                    <Link to="/deportes" className="text-gray-500 font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-primary hover:gap-3 transition-all">
                                        Ver por Deporte <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Precios */}
                    <Link
                        to="/precios"
                        className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-colors hover:text-primary ${location.pathname === '/precios' ? 'text-primary' : (scrolled || !isHome ? 'text-gray-900' : 'text-white')
                            }`}
                    >
                        Precios
                    </Link>

                    {/* Contacto */}
                    <Link
                        to="/contacto"
                        className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-colors hover:text-primary ${location.pathname === '/contacto' ? 'text-primary' : (scrolled || !isHome ? 'text-gray-900' : 'text-white')
                            }`}
                    >
                        Contacto
                    </Link>
                </div>

                {/* CTA Button */}
                <Link
                    to="/reservar/valoracion-inicial"
                    className={`hidden lg:flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-lg ${scrolled || !isHome
                            ? 'bg-primary text-white hover:bg-primary-dark shadow-primary/20'
                            : 'bg-white text-primary hover:bg-gray-100'
                        }`}
                >
                    <Activity size={16} />
                    Pedir Cita
                </Link>

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
            <div className={`fixed inset-0 bg-white z-[60] flex flex-col transition-all duration-300 overflow-y-auto ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <img src="/imagenes/logos/header-logo.svg" alt="De Movement" className="h-10" />
                    <button onClick={() => setIsOpen(false)} className="p-2">
                        <X size={32} className="text-gray-900" />
                    </button>
                </div>

                <div className="flex-1 p-6 space-y-6">
                    {/* Links principales */}
                    <Link to="/" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-900 uppercase tracking-tight">Inicio</Link>
                    <Link to="/nosotros" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-900 uppercase tracking-tight">Nosotros</Link>

                    {/* Servicios */}
                    <div>
                        <Link to="/servicios" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-900 uppercase tracking-tight mb-3">Servicios</Link>
                        <div className="pl-4 space-y-2">
                            {Object.entries(servicios).slice(0, 3).map(([slug, servicio]) => (
                                <Link key={slug} to={`/servicios/${slug}`} onClick={() => setIsOpen(false)} className="block text-gray-600 font-bold">
                                    {servicio.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Lesiones */}
                    <div>
                        <Link to="/lesiones" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-900 uppercase tracking-tight mb-3">Lesiones</Link>
                        <div className="pl-4 space-y-2">
                            {Object.entries(lesiones).map(([slug, categoria]) => (
                                <Link key={slug} to={`/lesiones/${slug}`} onClick={() => setIsOpen(false)} className="block text-gray-600 font-bold">
                                    {categoria.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/precios" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-900 uppercase tracking-tight">Precios</Link>
                    <Link to="/contacto" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-900 uppercase tracking-tight">Contacto</Link>
                </div>

                {/* CTA */}
                <div className="p-6 border-t border-gray-100">
                    <Link
                        to="/reservar/valoracion-inicial"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center bg-primary text-white py-4 rounded-xl font-black uppercase tracking-widest"
                    >
                        Pedir Cita Gratis
                    </Link>
                </div>
            </div>
        </nav>
    );
};
