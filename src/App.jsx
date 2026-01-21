import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Páginas Principales
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Equipo from './pages/Equipo';
import Instalaciones from './pages/Instalaciones';
import Contacto from './pages/Contacto';

// Servicios
import ServiciosIndex from './pages/servicios/ServiciosIndex';
import ServicioPage from './pages/servicios/ServicioPage';

// Lesiones
import LesionesIndex from './pages/lesiones/LesionesIndex';
import LesionCategoria from './pages/lesiones/LesionCategoria';
import LesionDetalle from './pages/lesiones/LesionDetalle';

// Deportes
import DeportesIndex from './pages/deportes/DeportesIndex';
import DeportePage from './pages/deportes/DeportePage';

// Blog y Recursos
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';
import RecursosIndex from './pages/recursos/RecursosIndex';

// Precios y Reservas
import PreciosIndex from './pages/precios/PreciosIndex';
import ReservarIndex from './pages/reservar/ReservarIndex';

// Casos de Éxito
import CasosExitoIndex from './pages/casos-exito/CasosExitoIndex';

// FAQ y Ayuda
import FAQ from './pages/FAQ';
import ComoFunciona from './pages/ComoFunciona';
import PrimeraVisita from './pages/PrimeraVisita';

// Legal
import AvisoLegal from './pages/legal/AvisoLegal';
import Privacidad from './pages/legal/Privacidad';
import Cookies from './pages/legal/Cookies';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        {/* 1. PÁGINAS PRINCIPALES */}
                        <Route path="/" element={<Home />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/equipo" element={<Equipo />} />
                        <Route path="/instalaciones" element={<Instalaciones />} />
                        <Route path="/contacto" element={<Contacto />} />

                        {/* 2. SERVICIOS */}
                        <Route path="/servicios" element={<ServiciosIndex />} />
                        <Route path="/servicios/:slug" element={<ServicioPage />} />

                        {/* 3. LESIONES POR TIPO */}
                        <Route path="/lesiones" element={<LesionesIndex />} />
                        <Route path="/lesiones/:categoria" element={<LesionCategoria />} />
                        <Route path="/lesiones/:categoria/:detalle" element={<LesionDetalle />} />

                        {/* 4. DEPORTES */}
                        <Route path="/deportes" element={<DeportesIndex />} />
                        <Route path="/deportes/:slug" element={<DeportePage />} />

                        {/* 5. BLOG Y RECURSOS */}
                        <Route path="/blog" element={<BlogIndex />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/recursos" element={<RecursosIndex />} />

                        {/* 6. PRECIOS Y RESERVAS */}
                        <Route path="/precios" element={<PreciosIndex />} />
                        <Route path="/reservar" element={<ReservarIndex />} />
                        <Route path="/reservar/:tipo" element={<ReservarIndex />} />

                        {/* 7. CASOS DE ÉXITO */}
                        <Route path="/casos-exito" element={<CasosExitoIndex />} />

                        {/* 8. FAQ Y AYUDA */}
                        <Route path="/preguntas-frecuentes" element={<FAQ />} />
                        <Route path="/como-funciona" element={<ComoFunciona />} />
                        <Route path="/primera-visita" element={<PrimeraVisita />} />

                        {/* 9. LEGAL */}
                        <Route path="/aviso-legal" element={<AvisoLegal />} />
                        <Route path="/politica-privacidad" element={<Privacidad />} />
                        <Route path="/politica-cookies" element={<Cookies />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
