import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PuzzleIcon, TeacherIcon, ShieldIcon, AwardIcon } from '../components/Icons';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-animate-enter">
      {/* HERO SECTION */}
      <section className="hero-glass-wrapper">
        <img src="/images/campus_1.webp" alt="Prime Montessori Campus" className="hero-glass-bg" />
        <div className="hero-glass-overlay"></div>

        <div className="container hero-glass-content">
          <div className="hero-stagger-1">
            <span className="eyebrow-solid light">
              EST. 1993 • QUEST FOR EXCELLENCE
            </span>
          </div>

          <h1 className="heading-xl hero-glass-title hero-stagger-2">
            Foundations for Lifelong Excellence.
          </h1>

          <p className="hero-glass-desc hero-stagger-3">
            Authentic Montessori discovery blended with a rigorous primary curriculum—shaping confident, independent minds from Crèche through Basic 6.
          </p>

          <div className="hero-btn-row hero-stagger-4">
            <button className="btn-solid btn-solid-gold" onClick={() => navigate('/admissions')}>
              Admissions Enquiry →
            </button>
            <button className="btn-solid btn-solid-ghost" onClick={() => navigate('/programs')}>
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL STATS DOCK */}
      <section className="floating-stats-wrap" data-reveal>
        <div className="container">
          <div className="glass-stats-panel">
            <div className="glass-stat-item" data-reveal data-reveal-delay="1">
              <div className="glass-stat-num">30+ Yrs</div>
              <div className="glass-stat-lbl">Academic Heritage</div>
              <div className="glass-stat-sub">Founded October 1993</div>
            </div>
            <div className="glass-stat-item" data-reveal data-reveal-delay="2">
              <div className="glass-stat-num">Crèche – B6</div>
              <div className="glass-stat-lbl">Focused Scope</div>
              <div className="glass-stat-sub">Early Years & Primary</div>
            </div>
            <div className="glass-stat-item" data-reveal data-reveal-delay="3">
              <div className="glass-stat-num">100%</div>
              <div className="glass-stat-lbl">Entrance Readiness</div>
              <div className="glass-stat-sub">NCEE Placement Track</div>
            </div>
            <div className="glass-stat-item" data-reveal data-reveal-delay="4">
              <div className="glass-stat-num">Montessori</div>
              <div className="glass-stat-lbl">Tactile Discovery</div>
              <div className="glass-stat-sub">Child-Led Mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME / PHILOSOPHY */}
      <section className="section-space">
        <div className="container">
          <div className="liquid-split-grid">
            <div className="glass-img-frame" data-reveal>
              <img src="/images/campus_2.webp" alt="Prime Montessori Learners" />
              <div className="glass-floating-tag">Quest for Excellence</div>
            </div>
            <div className="glass-card-main" data-reveal data-reveal-delay="1">
              <span className="eyebrow-solid">THE INSTITUTION</span>
              <h2 className="heading-lg" style={{ margin: '14px 0 16px' }}>
                Purposefully Guided Potential.
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '26px', fontSize: '0.98rem' }}>
                For over three decades, Prime Montessori School has specialized exclusively in early childhood and primary education. Our classrooms pair tactile Montessori apparatus with modern academic rigor—building cognitive mastery, moral clarity, and self-reliance.
              </p>
              <button className="btn-solid btn-solid-primary" onClick={() => navigate('/about')}>
                Our Philosophy →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC PATHWAYS */}
      <section className="section-space" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 44px' }} data-reveal>
            <span className="eyebrow-solid gold">ACADEMIC PATHWAYS</span>
            <h2 className="heading-lg" style={{ marginTop: '12px' }}>Curated Learning Stages</h2>
          </div>

          <div className="programs-glass-grid">
            {/* Card 1: Nursery */}
            <div className="program-glass-card" data-reveal data-reveal-delay="1">
              <div className="program-card-img-wrap">
                <img src="/images/classroom_1.webp" alt="Montessori Nursery Classroom" />
                <span className="program-glass-badge">AGES 1.5 – 5 YEARS</span>
              </div>
              <div className="program-glass-body">
                <h3 className="heading-md">Early Years & Nursery</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>
                  Sensory-rich environments where young learners master motor coordination, phonics, numeracy, and social grace.
                </p>
                <div className="pill-glass-list">
                  <span className="pill-glass-item">Playgroup</span>
                  <span className="pill-glass-item">Pre-School</span>
                  <span className="pill-glass-item">Nursery</span>
                  <span className="pill-glass-item">Kindergarten</span>
                </div>
                <button className="btn-solid" style={{ backgroundColor: '#F4F2FA', color: 'var(--brand-purple)', marginTop: 'auto' }} onClick={() => navigate('/programs')}>
                  Explore Nursery →
                </button>
              </div>
            </div>

            {/* Card 2: Primary */}
            <div className="program-glass-card" data-reveal data-reveal-delay="2">
              <div className="program-card-img-wrap">
                <img src="/images/activities_1.webp" alt="Primary School Activities" />
                <span className="program-glass-badge">BASIC 1 – BASIC 6</span>
              </div>
              <div className="program-glass-body">
                <h3 className="heading-md">Primary School</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>
                  Advanced foundational scholarship across Mathematics, Literacy, Science, and ICT—culminating in Common Entrance mastery.
                </p>
                <div className="pill-glass-list">
                  <span className="pill-glass-item">Basic 1 – 6</span>
                  <span className="pill-glass-item">Common Entrance</span>
                  <span className="pill-glass-item">STEM & ICT</span>
                </div>
                <button className="btn-solid" style={{ backgroundColor: '#F4F2FA', color: 'var(--brand-purple)', marginTop: 'auto' }} onClick={() => navigate('/programs')}>
                  Explore Primary →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="section-space" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 44px' }} data-reveal>
            <span className="eyebrow-solid">THE PRIME STANDARD</span>
            <h2 className="heading-lg" style={{ marginTop: '12px' }}>Built for Distinction</h2>
          </div>

          <div className="pillars-liquid-grid">
            <div className="pillar-glass-card" data-reveal data-reveal-delay="1">
              <div className="pillar-icon-box">
                <PuzzleIcon size={22} color="var(--brand-purple)" />
              </div>
              <h4 className="heading-sm">Montessori Precision</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.84rem', marginTop: '6px' }}>
                Tactile apparatus cultivating deep focus and spatial reasoning.
              </p>
            </div>
            <div className="pillar-glass-card" data-reveal data-reveal-delay="2">
              <div className="pillar-icon-box">
                <TeacherIcon size={22} color="var(--brand-purple)" />
              </div>
              <h4 className="heading-sm">Expert Mentors</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.84rem', marginTop: '6px' }}>
                Certified educators attuned to each child’s individual pace.
              </p>
            </div>
            <div className="pillar-glass-card" data-reveal data-reveal-delay="3">
              <div className="pillar-icon-box">
                <ShieldIcon size={22} color="var(--brand-purple)" />
              </div>
              <h4 className="heading-sm">Secure Campus</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.84rem', marginTop: '6px' }}>
                Purpose-built environment designed for safety and calm focus.
              </p>
            </div>
            <div className="pillar-glass-card" data-reveal data-reveal-delay="4">
              <div className="pillar-icon-box">
                <AwardIcon size={22} color="var(--brand-purple)" />
              </div>
              <h4 className="heading-sm">Top Placements</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.84rem', marginTop: '6px' }}>
                Consistent graduate entry into premier secondary colleges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALLOUT BANNER */}
      <section style={{ paddingBottom: '76px' }}>
        <div className="container">
          <div className="liquid-cta-banner" data-reveal>
            <div style={{ maxWidth: '520px' }}>
              <span className="eyebrow-solid gold" style={{ marginBottom: '12px' }}>ADMISSIONS OPEN</span>
              <h2 className="heading-lg" style={{ color: '#FFFFFF', marginTop: '6px' }}>Begin Your Child’s Journey.</h2>
              <p style={{ color: '#D5CBE8', marginTop: '8px', fontSize: '0.96rem' }}>
                Enquiries are open for Playgroup, Nursery, and Primary placement.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button className="btn-solid btn-solid-gold" onClick={() => navigate('/admissions')}>
                Apply Online
              </button>
              <button className="btn-solid btn-solid-ghost" onClick={() => navigate('/contact')}>
                Book a Tour →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
