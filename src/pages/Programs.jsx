import React from 'react';

export default function Programs() {
  return (
    <div className="page-animate-enter">
      <div className="hero-glass-wrapper" style={{ minHeight: '340px' }}>
        <img src="/images/classroom_1.webp" alt="Montessori Classroom" className="hero-glass-bg" />
        <div className="hero-glass-overlay"></div>
        <div className="container hero-glass-content">
          <span className="eyebrow-solid light">ACADEMIC PROGRAMS</span>
          <h1 className="heading-xl hero-glass-title" style={{ marginTop: '14px' }}>Nursery & Primary Pathways</h1>
          <p className="hero-glass-desc">
            Specialized education from Crèche to Basic 6, ensuring focused mentorship during the formative years.
          </p>
        </div>
      </div>

      <section className="section-space">
        <div className="container">
          {/* 1. Nursery */}
          <div className="liquid-split-grid" style={{ marginBottom: '80px' }}>
            <div className="glass-img-frame">
              <img src="/images/classroom_1.webp" alt="Nursery Montessori Learning" />
              <div className="glass-floating-tag">Tactile Apparatus • Early Discovery</div>
            </div>
            <div className="glass-card-main">
              <span className="eyebrow-solid">EARLY CHILDHOOD SECTION (AGES 2 - 5)</span>
              <h2 className="heading-lg" style={{ margin: '14px 0' }}>Nursery & Early Years</h2>
              <p style={{ color: 'var(--color-text)', marginBottom: '14px' }}>
                Our early childhood department is organized around authentic Montessori discovery areas:
              </p>
              <ul style={{ paddingLeft: '20px', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <li><strong>Practical Life:</strong> Motor coordination, self-care, courtesy, and concentration.</li>
                <li><strong>Sensorial Exercises:</strong> Color gradient discrimination, geometric dimensions, weights, and textures.</li>
                <li><strong>Language & Phonics:</strong> Sandpaper letters, phonetic sound boxes, and expressive vocabulary.</li>
                <li><strong>Mathematical Foundations:</strong> Number rods, bead stairs, and concrete quantity appreciation.</li>
                <li><strong>Cultural Studies:</strong> Nature observation, music, globes, and social harmony.</li>
              </ul>
            </div>
          </div>

          {/* 2. Primary */}
          <div className="liquid-split-grid">
            <div className="glass-card-main">
              <span className="eyebrow-solid">PRIMARY DEPARTMENT (BASIC 1 - 6)</span>
              <h2 className="heading-lg" style={{ margin: '14px 0' }}>Primary Curriculum & Common Entrance</h2>
              <p style={{ color: 'var(--color-text)', marginBottom: '14px' }}>
                Our Primary curriculum bridges concrete comprehension with formal intellectual reasoning:
              </p>
              <ul style={{ paddingLeft: '20px', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <li><strong>Language Arts:</strong> Grammar, Creative Writing, Public Speaking, and Comprehension.</li>
                <li><strong>Mathematics:</strong> Quantitative reasoning, mental mathematics, and problem decomposition.</li>
                <li><strong>Basic Science & Tech:</strong> Deductive reasoning, ICT, and practical discovery.</li>
                <li><strong>National Common Entrance (NCEE):</strong> Dedicated mock assessments and review clinics for Basic 6.</li>
              </ul>
              <div style={{ padding: '14px 18px', backgroundColor: '#EDE8F7', borderRadius: '12px', borderLeft: '4px solid var(--brand-purple)' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-purple)' }}>
                  Institutional Scope: Prime Montessori operates through Basic 6; our pupils sit for National Common Entrance to enter leading secondary schools.
                </span>
              </div>
            </div>
            <div className="glass-img-frame">
              <img src="/images/activities_1.webp" alt="Primary School Students" />
              <div className="glass-floating-tag">Engaged Classrooms • Critical Thinking</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
