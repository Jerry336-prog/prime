import React from 'react';
import { TargetIcon, TelescopeIcon, SproutIcon } from '../components/Icons';

export default function About() {
  return (
    <div className="page-animate-enter">
      <div className="hero-glass-wrapper" style={{ minHeight: '320px' }}>
        <img src="/images/campus_1.webp" alt="Prime Montessori Campus" className="hero-glass-bg" />
        <div className="hero-glass-overlay"></div>
        <div className="container hero-glass-content">
          <span className="eyebrow-solid light">HERITAGE & PHILOSOPHY</span>
          <h1 className="heading-xl hero-glass-title" style={{ marginTop: '14px' }}>Three Decades of Distinction.</h1>
          <p className="hero-glass-desc">
            Since October 1993, cultivating intellectual independence, moral clarity, and purposeful discovery.
          </p>
        </div>
      </div>

      <section className="section-space">
        <div className="container">
          <div className="liquid-split-grid">
            <div className="glass-card-main" data-reveal>
              <span className="eyebrow-solid">FOUNDATION</span>
              <h2 className="heading-lg" style={{ margin: '14px 0' }}>Established October 1993</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '22px', fontSize: '0.95rem' }}>
                Prime Montessori School unites Maria Montessori’s proven sensory methodology with the Nigerian Universal Basic Education framework—shaping articulate, disciplined, and self-motivated learners from early childhood through Basic 6.
              </p>
              <div style={{ padding: '16px 20px', backgroundColor: '#F5F2FA', borderLeft: '3px solid var(--brand-purple)', borderRadius: '14px' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-purple)' }}>October 1993</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>Over 30 years of continuous academic leadership</div>
              </div>
            </div>
            <div className="glass-img-frame" data-reveal data-reveal-delay="1">
              <img src="/images/campus_2.webp" alt="School assembly" />
              <div className="glass-floating-tag">Quest for Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="section-space" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 44px' }} data-reveal>
            <span className="eyebrow-solid gold">CORE IDENTITY</span>
            <h2 className="heading-lg" style={{ marginTop: '12px' }}>Principles That Guide Us</h2>
          </div>

          <div className="pillars-liquid-grid">
            <div className="pillar-glass-card" data-reveal data-reveal-delay="1">
              <div className="pillar-icon-box">
                <TargetIcon size={22} color="var(--brand-purple)" />
              </div>
              <h4 className="heading-sm">Our Motto</h4>
              <p style={{ fontWeight: 700, color: 'var(--brand-purple)', fontSize: '0.9rem', margin: '4px 0 6px' }}>
                “Quest for Excellence”
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                Our daily standard in scholarship, etiquette, and character.
              </p>
            </div>
            <div className="pillar-glass-card" data-reveal data-reveal-delay="2">
              <div className="pillar-icon-box">
                <TelescopeIcon size={22} color="var(--brand-purple)" />
              </div>
              <h4 className="heading-sm">Our Vision</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '6px' }}>
                To stand as the premier foundational institution graduating disciplined, inquisitive, and self-reliant young scholars.
              </p>
            </div>
            <div className="pillar-glass-card" data-reveal data-reveal-delay="3">
              <div className="pillar-icon-box">
                <SproutIcon size={22} color="var(--brand-purple)" />
              </div>
              <h4 className="heading-sm">Our Mission</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '6px' }}>
                To nurture the whole child through individualized Montessori mentorship, modern literacy, and high ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
