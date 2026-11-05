import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PuzzleIcon, TeacherIcon, ShieldIcon, AwardIcon } from '../components/Icons';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-animate-enter">
      {/* HERO SECTION WITH BRIGHTENED SCHOOL CAMPUS PHOTO */}
      <section className="hero-glass-wrapper">
        <img src="/images/campus_1.webp" alt="Prime Montessori Campus" className="hero-glass-bg" />
        <div className="hero-glass-overlay"></div>

        <div className="container hero-glass-content">
          <div className="hero-stagger-1">
            <span className="eyebrow-solid light">
              ESTABLISHED OCTOBER 1993 • QUEST FOR EXCELLENCE
            </span>
          </div>

          <h1 className="heading-xl hero-glass-title hero-stagger-2">
            Nurturing Foundations for Lifelong Excellence
          </h1>

          <p className="hero-glass-desc hero-stagger-3">
            At Prime Montessori School, we blend authentic Montessori discovery methods with a rigorous primary curriculum—cultivating confident, disciplined, and intellectually curious pupils from Crèche through Basic 6.
          </p>

          <div className="hero-btn-row hero-stagger-4">
            <button className="btn-solid btn-solid-gold" onClick={() => navigate('/admissions')}>
              Begin Admissions Enquiry →
            </button>
            <button className="btn-solid btn-solid-ghost" onClick={() => navigate('/programs')}>
              Explore Academic Programs
            </button>
          </div>
        </div>
      </section>

      {/* FLOATING STATS STRIP */}
      <section className="floating-stats-wrap">
        <div className="container">
          <div className="glass-stats-panel">
            <div className="glass-stat-item">
              <div className="glass-stat-num">30+ Years</div>
              <div className="glass-stat-lbl">Heritage of Excellence</div>
              <div className="glass-stat-sub">Established in October 1993</div>
            </div>
            <div className="glass-stat-item">
              <div className="glass-stat-num">Crèche – Basic 6</div>
              <div className="glass-stat-lbl">Dedicated Specialization</div>
              <div className="glass-stat-sub">Focused Nursery & Primary development</div>
            </div>
            <div className="glass-stat-item">
              <div className="glass-stat-num">100% Focus</div>
              <div className="glass-stat-lbl">Secondary Readiness</div>
              <div className="glass-stat-sub">National Common Entrance Exam prep</div>
            </div>
            <div className="glass-stat-item">
              <div className="glass-stat-num">Child-Centered</div>
              <div className="glass-stat-lbl">Purpose-Built Campus</div>
              <div className="glass-stat-sub">Secure environment for young learners</div>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME / HERITAGE */}
      <section className="section-space">
        <div className="container">
          <div className="liquid-split-grid">
            <div className="glass-img-frame">
              <img src="/images/campus_2.webp" alt="Prime Montessori Learners" />
              <div className="glass-floating-tag">Prime Montessori Community • Quest for Excellence</div>
            </div>
            <div className="glass-card-main">
              <span className="eyebrow-solid">WELCOME TO OUR COMMUNITY</span>
              <h2 className="heading-lg" style={{ margin: '16px 0 18px' }}>
                Where Every Child’s Potential is Purposefully Guided
              </h2>
              <p style={{ color: 'var(--color-text)', marginBottom: '16px', fontSize: '1.02rem' }}>
                Founded over three decades ago, Prime Montessori School was envisioned to provide young learners with an exceptional foundation in cognitive mastery, moral rectitude, and personal independence.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '28px' }}>
                We operate strictly as an early childhood and foundational primary institution. Our classrooms are equipped with authentic Montessori apparatus, enabling children to explore abstract concepts through tactile discovery.
              </p>
              <button className="btn-solid btn-solid-primary" onClick={() => navigate('/about')}>
                Discover Our Story & Philosophy →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC PROGRAMS */}
      <section className="section-space" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="eyebrow-solid gold">OUR PATHWAYS</span>
            <h2 className="heading-lg" style={{ marginTop: '14px' }}>Academic Programs</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>
              Specially curated developmental stages fostering intellectual curiosity and confidence.
            </p>
          </div>

          <div className="programs-glass-grid">
            {/* Card 1: Nursery */}
            <div className="program-glass-card">
              <div className="program-card-img-wrap">
                <img src="/images/classroom_1.webp" alt="Montessori Nursery Classroom" />
                <span className="program-glass-badge">AGES 2 – 5 YEARS</span>
              </div>
              <div className="program-glass-body">
                <h3 className="heading-md">Nursery & Early Childhood</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: '8px' }}>
                  A self-paced, sensory-rich environment where toddlers and preschoolers master practical life coordination, phonics, number rods, and collaborative discovery.
                </p>
                <div className="pill-glass-list">
                  <span className="pill-glass-item">Playgroup</span>
                  <span className="pill-glass-item">Pre-School</span>
                  <span className="pill-glass-item">Nursery 1 & 2</span>
                  <span className="pill-glass-item">Kindergarten</span>
                </div>
                <button className="btn-solid" style={{ backgroundColor: '#EDE8F7', color: 'var(--brand-purple)', marginTop: 'auto' }} onClick={() => navigate('/programs')}>
                  View Nursery Details →
                </button>
              </div>
            </div>

            {/* Card 2: Primary */}
            <div className="program-glass-card">
              <div className="program-card-img-wrap">
                <img src="/images/activities_1.webp" alt="Primary School Activities" />
                <span className="program-glass-badge">BASIC 1 – BASIC 6</span>
              </div>
              <div className="program-glass-body">
                <h3 className="heading-md">Primary Department</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: '8px' }}>
                  Transitioning inquisitive minds into academic fluency across Mathematics, English Comprehension, Basic Science, ICT, Civic Studies, and Creative Arts.
                </p>
                <div className="pill-glass-list">
                  <span className="pill-glass-item">Basic 1 to 6</span>
                  <span className="pill-glass-item">Common Entrance Prep</span>
                  <span className="pill-glass-item">ICT & Robotics</span>
                  <span className="pill-glass-item">Public Speaking</span>
                </div>
                <button className="btn-solid" style={{ backgroundColor: '#EDE8F7', color: 'var(--brand-purple)', marginTop: 'auto' }} onClick={() => navigate('/programs')}>
                  View Primary Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PRIME */}
      <section className="section-space" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 50px' }}>
            <span className="eyebrow-solid">THE PRIME ADVANTAGE</span>
            <h2 className="heading-lg" style={{ marginTop: '14px' }}>Why Families Choose Prime Montessori</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>
              Guided by our foundational motto: “Quest for Excellence” in academics and character.
            </p>
          </div>

          <div className="pillars-liquid-grid">
            <div className="pillar-glass-card">
              <div className="pillar-icon-box">
                <PuzzleIcon size={26} color="var(--brand-purple)" />
              </div>
              <h4>Pure Montessori Method</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
                Tactile learning apparatus that cultivate self-confidence, spatial discernment, and innate concentration.
              </p>
            </div>
            <div className="pillar-glass-card">
              <div className="pillar-icon-box">
                <TeacherIcon size={26} color="var(--brand-purple)" />
              </div>
              <h4>Dedicated Mentors</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
                Certified, caring educators committed to understanding each pupil's unique learning rhythm.
              </p>
            </div>
            <div className="pillar-glass-card">
              <div className="pillar-icon-box">
                <ShieldIcon size={26} color="var(--brand-purple)" />
              </div>
              <h4>Safe, Stimulating Campus</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
                Purpose-built premises tailored for early childhood security and physical exploration.
              </p>
            </div>
            <div className="pillar-glass-card">
              <div className="pillar-icon-box">
                <AwardIcon size={26} color="var(--brand-purple)" />
              </div>
              <h4>Secondary Placement</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
                Rigorous preparation ensuring our Basic 6 graduates gain admission into premier secondary schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALLOUT BANNER */}
      <section style={{ paddingBottom: '90px' }}>
        <div className="container">
          <div className="liquid-cta-banner">
            <div style={{ maxWidth: '600px' }}>
              <span className="eyebrow-solid gold" style={{ marginBottom: '14px' }}>ENROLLMENT OPEN</span>
              <h2 className="heading-lg" style={{ color: '#FFFFFF', marginTop: '8px' }}>Give Your Child the Prime Foundation</h2>
              <p style={{ color: '#E2D9F3', marginTop: '10px', fontSize: '1.05rem' }}>
                Admissions enquiries are ongoing for Playgroup, Nursery, and Primary grades. Schedule a campus tour to experience our learning spaces.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button className="btn-solid btn-solid-gold" onClick={() => navigate('/admissions')}>
                Submit Online Enquiry
              </button>
              <button className="btn-solid btn-solid-ghost" onClick={() => navigate('/contact')}>
                Schedule a Visit →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
