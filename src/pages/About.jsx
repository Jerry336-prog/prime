import React from 'react';

export default function About() {
  return (
    <div className="page-animate-enter">
      <div className="hero-glass-wrapper" style={{ minHeight: '340px' }}>
        <img src="/images/campus_1.webp" alt="Prime Montessori Campus" className="hero-glass-bg" />
        <div className="hero-glass-overlay"></div>
        <div className="container hero-glass-content">
          <span className="eyebrow-solid light">ABOUT & MONTESSORI</span>
          <h1 className="heading-xl hero-glass-title" style={{ marginTop: '14px' }}>Over 30 Years of Dedicated Excellence</h1>
          <p className="hero-glass-desc">
            Since October 1993, Prime Montessori School has fostered academic distinction, moral clarity, and purposeful childhood discovery.
          </p>
        </div>
      </div>

      <section className="section-space">
        <div className="container">
          <div className="liquid-split-grid">
            <div className="glass-card-main">
              <span className="eyebrow-solid">OUR HERITAGE</span>
              <h2 className="heading-lg" style={{ margin: '14px 0' }}>Founded October 1993</h2>
              <p style={{ color: 'var(--color-text)', marginBottom: '14px' }}>
                Prime Montessori School was established to offer parents an authentic alternative to conventional rote learning, placing the child's natural curiosity at the center of education.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                By uniting the proven sensory methods of Maria Montessori with the benchmark requirements of the Nigerian Universal Basic Education framework, our school shapes pupils into confident, articulate, and self-motivated problem solvers.
              </p>
              <div style={{ padding: '16px 20px', backgroundColor: '#FEF7DE', borderLeft: '4px solid var(--brand-gold)', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-purple)' }}>October 1993</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-ink)' }}>Official Foundation Date</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Over three decades of continuous educational service</div>
              </div>
            </div>
            <div className="glass-img-frame">
              <img src="/images/campus_2.webp" alt="School assembly" />
              <div className="glass-floating-tag">Prime Montessori Community • Quest for Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="section-space" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 50px' }}>
            <span className="eyebrow-solid gold">OUR GUIDING PRINCIPLES</span>
            <h2 className="heading-lg" style={{ marginTop: '12px' }}>Mission, Vision & Motto</h2>
          </div>

          <div className="pillars-liquid-grid">
            <div className="pillar-glass-card" style={{ borderTop: '4px solid var(--brand-purple)' }}>
              <div className="pillar-icon-box">🎯</div>
              <h4>Our Motto</h4>
              <p style={{ fontStyle: 'italic', fontWeight: 700, color: 'var(--brand-purple)', marginBottom: '8px' }}>
                “Quest for Excellence”
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                Enshrined on our school shield, reflecting our daily aspiration in scholarship, personal etiquette, and moral character.
              </p>
            </div>
            <div className="pillar-glass-card" style={{ borderTop: '4px solid var(--brand-gold)' }}>
              <div className="pillar-icon-box">🔭</div>
              <h4>Our Vision</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>
                To remain a premier early childhood and primary institution celebrated for graduating disciplined, inquisitive, and academically self-reliant pupils.
              </p>
            </div>
            <div className="pillar-glass-card" style={{ borderTop: '4px solid var(--brand-flame)' }}>
              <div className="pillar-icon-box">🌱</div>
              <h4>Our Mission</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>
                To nurture the whole child through individualized Montessori mentorship, modern literacy tools, and high ethical expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
