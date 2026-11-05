import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import './App.css';

// Automatically scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      {/* Persistent Liquid Glass Header */}
      <Header />

      {/* Main Routed Page Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Persistent Global Footer */}
      <Footer />
    </div>
  );
}
