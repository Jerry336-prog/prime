import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="liquid-glass-footer">
      <div className="container">
        <div className="footer-glass-grid">
          {/* Col 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="/logo.webp" alt="Prime Montessori Crest" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 800 }}>PRIME MONTESSORI SCHOOLS</h4>
                <span style={{ color: 'var(--brand-gold)', fontSize: '0.78rem', fontWeight: 700 }}>QUEST FOR EXCELLENCE</span>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#BDB1D4', lineHeight: 1.6, maxWidth: '300px' }}>
              Nurturing confident, disciplined, and curious learners since October 1993. Crèche to Basic 6.
            </p>
          </div>

          {/* Col 2 */}
          <div className="footer-glass-col">
            <h5>Navigation</h5>
            <ul>
              <li><Link to="/" onClick={scrollToTop} style={{ color: 'inherit' }}>Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop} style={{ color: 'inherit' }}>About & Montessori</Link></li>
              <li><Link to="/programs" onClick={scrollToTop} style={{ color: 'inherit' }}>Programs (Nursery & Primary)</Link></li>
              <li><Link to="/admissions" onClick={scrollToTop} style={{ color: 'inherit' }}>Admissions</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} style={{ color: 'inherit' }}>Contact & Visit</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-glass-col">
            <h5>Academic Programs</h5>
            <ul>
              <li><Link to="/programs" onClick={scrollToTop} style={{ color: 'inherit' }}>Playgroup (Age 1.5 - 2)</Link></li>
              <li><Link to="/programs" onClick={scrollToTop} style={{ color: 'inherit' }}>Nursery Department (Age 2 - 5)</Link></li>
              <li><Link to="/programs" onClick={scrollToTop} style={{ color: 'inherit' }}>Primary School (Basic 1 - 6)</Link></li>
              <li><Link to="/programs" onClick={scrollToTop} style={{ color: 'inherit' }}>Common Entrance Preparation</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-glass-col">
            <h5>Campus Enquiries</h5>
            <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px', color: '#BDB1D4' }}>
              <p>📞 Phone: 0808 031 1206</p>
              <p>✉️ Email: info@pmsnigeria.com</p>
              <p>⏰ Visiting Hours: Mon – Fri: 7:30 AM – 3:30 PM</p>
              <Link to="/contact" onClick={scrollToTop} style={{ color: 'var(--brand-gold)', fontWeight: 600, marginTop: '4px', display: 'inline-block' }}>
                View Full Campus Location Details →
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-glass-bottom">
          <span>© 2026 Prime Montessori Schools. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
