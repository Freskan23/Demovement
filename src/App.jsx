import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import InjuryPage from './pages/InjuryPage';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                {/* Padding superior para compensar la Navbar fija */}
                <main className="flex-grow pt-20 md:pt-24">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/readaptacion/:slug" element={<InjuryPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
