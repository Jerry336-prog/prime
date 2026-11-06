import React from 'react';

export default function Programs() {
  return (
    <div className="page-animate-enter">
      <div className="hero-glass-wrapper" style={{ minHeight: '320px' }}>
        <img src="/images/classroom_1.webp" alt="Montessori Classroom" className="hero-glass-bg" />
        <div className="hero-glass-overlay"></div>
        <div className="container hero-glass-content">
          <span className="eyebrow-solid light">ACADEMIC PATHWAYS</span>
          <h1 className="heading-xl hero-glass-title" style={{ marginTop: '14px' }}>Nursery & Primary Curriculum.</h1>
          <p className="hero-glass-desc">
            Specialized education from Crèche to Basic 6—focused mentorship during the critical formative years.
          </p>
        </div>
      </div>

      <section className="section-space">
        <div className="container">
          {/* 1. Nursery */}
          <div className="liquid-split-grid" style={{ marginBottom: '64px' }}>
            <div className="glass-img-frame" data-reveal>
              <img src="/images/classroom_1.webp" alt="Nursery Montessori Learning" />
              <div className="glass-floating-tag">Tactile Discovery</div>
            </div>
            <div className="glass-card-main" data-reveal data-reveal-delay="1">
              <span className="eyebrow-solid">AGES 1.5 – 5 YEARS</span>
              <h2 className="heading-lg" style={{ margin: '12px 0 14px' }}>Early Years & Nursery</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '16px' }}>
                Structured around five core Montessori learning domains:
              </p>
              <ul style={{ paddingLeft: '18px', color: 'var(--color-text)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Practical Life:</strong> Fine motor control, independence, and grace.</li>
                <li><strong>Sensorial:</strong> Visual, tactile, and spatial discrimination.</li>
                <li><strong>Phonics & Language:</strong> Sandpaper letters and early reading fluency.</li>
                <li><strong>Numeracy:</strong> Concrete mathematics via number rods and beads.</li>
                <li><strong>Cultural Studies:</strong> Geography, botany, art, and music.</li>
              </ul>
            </div>
          </div>

          {/* 2. Primary */}
          <div className="liquid-split-grid">
            <div className="glass-card-main" data-reveal>
              <span className="eyebrow-solid">BASIC 1 – BASIC 6</span>
              <h2 className="heading-lg" style={{ margin: '12px 0 14px' }}>Primary School</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '16px' }}>
                Bridging concrete comprehension with advanced analytical reasoning:
              </p>
              <ul style={{ paddingLeft: '18px', color: 'var(--color-text)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <li><strong>Literacy & Oratory:</strong> Advanced comprehension, writing, and diction.</li>
                <li><strong>Mathematics:</strong> Quantitative logic and problem-solving.</li>
                <li><strong>STEM & ICT:</strong> Basic sciences, digital literacy, and inquiry.</li>
                <li><strong>Common Entrance (NCEE):</strong> Intensive Basic 6 placement readiness.</li>
              </ul>
              <div style={{ padding: '12px 16px', backgroundColor: '#F5F2FA', borderRadius: '12px', borderLeft: '3px solid var(--brand-purple)', fontSize: '0.82rem', color: 'var(--brand-purple)', fontWeight: 600 }}>
                Dedicated Nursery & Primary institution—graduating Basic 6 scholars into top secondary colleges.
              </div>
            </div>
            <div className="glass-img-frame" data-reveal data-reveal-delay="1">
              <img src="/images/activities_1.webp" alt="Primary School Students" />
              <div className="glass-floating-tag">Academic Fluency</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
