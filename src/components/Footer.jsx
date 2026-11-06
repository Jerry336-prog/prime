import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, ClockIcon } from './Icons';

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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img src="/logo.webp" alt="Prime Montessori Crest" style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '0.94rem', fontWeight: 800, letterSpacing: '0.03em' }}>PRIME MONTESSORI</h4>
                <span style={{ color: 'var(--brand-gold)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em' }}>QUEST FOR EXCELLENCE</span>
              </div>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#B5A8CC', lineHeight: 1.55, maxWidth: '270px' }}>
              Foundational Montessori & Primary education since October 1993. Crèche through Basic 6.
            </p>
          </div>

          {/* Col 2 */}
          <div className="footer-glass-col">
            <h5>Directory</h5>
            <ul style={{ fontSize: '0.86rem' }}>
              <li><Link to="/" onClick={scrollToTop} style={{ color: 'inherit' }}>Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop} style={{ color: 'inherit' }}>Philosophy</Link></li>
              <li><Link to="/programs" onClick={scrollToTop} style={{ color: 'inherit' }}>Programs</Link></li>
              <li><Link to="/admissions" onClick={scrollToTop} style={{ color: 'inherit' }}>Admissions</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} style={{ color: 'inherit' }}>Visit Campus</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-glass-col">
            <h5>Pathways</h5>
            <ul style={{ fontSize: '0.86rem' }}>
              <li><Link to="/programs" onClick={scrollToTop} style={{ color: 'inherit' }}>Playgroup & Pre-School</Link></li>
              <li><Link to="/programs" onClick={scrollToTop} style={{ color: 'inherit' }}>Nursery & Kindergarten</Link></li>
              <li><Link to="/programs" onClick={scrollToTop} style={{ color: 'inherit' }}>Primary (Basic 1 – 6)</Link></li>
              <li><Link to="/programs" onClick={scrollToTop} style={{ color: 'inherit' }}>Common Entrance Prep</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-glass-col">
            <h5>Contact</h5>
            <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '10px', color: '#B5A8CC' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                <PhoneIcon size={15} color="var(--brand-gold)" /> 0808 031 1206
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                <MailIcon size={15} color="var(--brand-gold)" /> info@pmsnigeria.com
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                <ClockIcon size={15} color="var(--brand-gold)" /> Mon – Fri • 7:30 AM – 3:30 PM
              </p>
              <Link to="/contact" onClick={scrollToTop} style={{ color: 'var(--brand-gold)', fontWeight: 600, fontSize: '0.82rem', marginTop: '4px', display: 'inline-block' }}>
                Campus Location →
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-glass-bottom">
          <span>© 2026 Prime Montessori Schools. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
