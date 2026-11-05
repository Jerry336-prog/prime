import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookVisit = () => {
    navigate('/contact');
    setMobileMenuOpen(false);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="liquid-glass-navbar-header">
        <div className="container liquid-glass-navbar-inner">
          {/* Brand Lockup */}
          <Link to="/" className="brand-lockup" onClick={closeMenu}>
            <div className="brand-icon-wrap">
              <img src="/logo.webp" alt="Prime Montessori Crest" style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
            </div>
            <div className="brand-title-group">
              <span className="brand-name-main">PRIME</span>
              <span className="brand-name-sub">MONTESSORI SCHOOLS</span>
            </div>
          </Link>

          {/* Navigation Tabs using React Router NavLink */}
          <nav className="nav-links-desktop">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              About & Montessori
            </NavLink>
            <NavLink
              to="/programs"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              Programs
            </NavLink>
            <NavLink
              to="/admissions"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              Admissions
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              Contact & Visit
            </NavLink>
          </nav>

          {/* Right Action: Book a visit → */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button className="btn-nav-book" onClick={handleBookVisit}>
              Book a visit <span>→</span>
            </button>
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-glass-drawer">
          <NavLink
            to="/"
            className={({ isActive }) => `mobile-glass-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `mobile-glass-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About & Montessori
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) => `mobile-glass-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Programs (Nursery & Primary)
          </NavLink>
          <NavLink
            to="/admissions"
            className={({ isActive }) => `mobile-glass-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Admissions
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `mobile-glass-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact & Visit
          </NavLink>
          <button className="btn-solid btn-solid-primary" style={{ marginTop: '8px' }} onClick={handleBookVisit}>
            Book a visit →
          </button>
        </div>
      )}
    </>
  );
}
