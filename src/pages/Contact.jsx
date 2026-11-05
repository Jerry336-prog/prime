import React, { useState } from 'react';
import { submitCampusVisit } from '../lib/supabase';
import { sendCampusVisitEmailNotification } from '../lib/emailNotification';

export default function Contact() {
  const initialTourState = { name: '', phone: '', date: '', slot: 'Morning (9:30 AM)' };
  const [tourData, setTourData] = useState(initialTourState);
  const [confirmedTour, setConfirmedTour] = useState(initialTourState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [tourBooked, setTourBooked] = useState(false);

  const handleTourSubmit = async (e) => {
    e.preventDefault();
    if (!tourData.name || !tourData.phone || !tourData.date) return;

    setIsSubmitting(true);
    setApiError(null);

    const submissionCopy = { ...tourData };

    // 1. Dispatch email notification directly to school administration
    sendCampusVisitEmailNotification(tourData);

    // 2. Persist in database
    const res = await submitCampusVisit(tourData);

    if (res.success) {
      setConfirmedTour(submissionCopy);
      setTourData(initialTourState);
      setTourBooked(true);
      setIsSubmitting(false);
    } else {
      if (res.error?.code === 'PGRST205' || res.error?.message?.includes('schema cache')) {
        setApiError("Database table 'campus_visits' is pending creation in Supabase. Run 'supabase/schema.sql' in your Supabase SQL Editor.");
      } else {
        setApiError(res.error?.message || 'Unable to save to database. Please try again.');
      }
      // Fallback: still show success state to visitor
      setConfirmedTour(submissionCopy);
      setTourData(initialTourState);
      setTourBooked(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-animate-enter">
      <div className="hero-glass-wrapper" style={{ minHeight: '340px' }}>
        <img src="/images/campus_1.webp" alt="Visit PMS" className="hero-glass-bg" />
        <div className="hero-glass-overlay"></div>
        <div className="container hero-glass-content">
          <span className="eyebrow-solid light">CAMPUS LOCATION & VISITS</span>
          <h1 className="heading-xl hero-glass-title" style={{ marginTop: '14px' }}>Contact & Visit Our Campus</h1>
          <p className="hero-glass-desc">
            Experience our quiet, purposeful classroom atmosphere in person. Schedule a guided tour or reach out to our administration.
          </p>
        </div>
      </div>

      {/* DEDICATED LOCATION & ADDRESS SECTION */}
      <section className="section-space">
        <div className="container">
          <div className="liquid-split-grid">
            {/* Left Column: Official Campus Address & Info */}
            <div>
              <span className="eyebrow-solid">CAMPUS DIRECTORY</span>
              <h2 className="heading-lg" style={{ margin: '14px 0 24px' }}>Official School Address</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="glass-card-main" style={{ borderLeft: '4px solid var(--brand-purple)' }}>
                  <h4 style={{ color: 'var(--brand-purple)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>📍</span> Physical Campus Address
                  </h4>
                  <p style={{ fontWeight: 700, color: 'var(--color-ink)', fontSize: '1.05rem', marginTop: '6px' }}>
                    23, New Road, Ballot Close
                  </p>
                  <p style={{ color: 'var(--color-text)', marginTop: '2px' }}>
                    Off Community Road, Satellite Town, Lagos State, Nigeria.
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '6px' }}>
                    Driving Directions: Accessible via Badagry Expressway / Alakija or Festac Link into Satellite Town.
                  </p>
                </div>

                <div className="glass-card-main" style={{ borderLeft: '4px solid var(--brand-gold)' }}>
                  <h4 style={{ color: 'var(--brand-purple)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>📞</span> Telephone Lines
                  </h4>
                  <p style={{ fontWeight: 700, color: 'var(--color-ink)', fontSize: '1.05rem', marginTop: '6px' }}>
                    0808 031 1206
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                    Administrative Hours: Monday – Friday, 7:30 AM to 4:00 PM.
                  </p>
                </div>

                <div className="glass-card-main" style={{ borderLeft: '4px solid var(--brand-flame)' }}>
                  <h4 style={{ color: 'var(--brand-purple)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>✉️</span> Official Email
                  </h4>
                  <p style={{ fontWeight: 700, color: 'var(--color-ink)', fontSize: '1.05rem', marginTop: '6px' }}>
                    info@pmsnigeria.com
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                    For general enquiries, admissions packets, and official correspondence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Book a Visit Solid Form with Supabase */}
            <div className="glass-form-card">
              <h3 className="heading-md" style={{ marginBottom: '8px' }}>Book a Campus Visit</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '22px' }}>
                Schedule an in-person walk-through with our admissions team.
              </p>

              {apiError && (
                <div style={{ padding: '12px 16px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '10px', color: '#B91C1C', fontSize: '0.85rem', marginBottom: '18px' }}>
                  {apiError}
                </div>
              )}

              {tourBooked ? (
                <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                  <div className="modal-gold-check">✓</div>
                  <h4 className="heading-md">Visit Scheduled!</h4>
                  <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>
                    Thank you, {confirmedTour.name}. We look forward to receiving you on {confirmedTour.date} ({confirmedTour.slot}) at our campus. Your appointment has been recorded.
                  </p>
                  <button className="btn-solid btn-solid-primary" style={{ marginTop: '20px' }} onClick={() => setTourBooked(false)}>
                    Book Another Visit
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTourSubmit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="form-group">
                      <label>Your Full Name *</label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        className="glass-input"
                        placeholder="e.g. Mr. Jerry Chukwuebuka"
                        value={tourData.name}
                        onChange={e => setTourData({ ...tourData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        disabled={isSubmitting}
                        className="glass-input"
                        placeholder="0808 000 0000"
                        value={tourData.phone}
                        onChange={e => setTourData({ ...tourData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Preferred Visit Date *</label>
                      <input
                        type="date"
                        required
                        disabled={isSubmitting}
                        className="glass-input"
                        value={tourData.date}
                        onChange={e => setTourData({ ...tourData, date: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Preferred Time Slot</label>
                      <select
                        className="glass-select"
                        disabled={isSubmitting}
                        value={tourData.slot}
                        onChange={e => setTourData({ ...tourData, slot: e.target.value })}
                      >
                        <option value="Morning (9:30 AM)">Morning (9:30 AM)</option>
                        <option value="Midday (11:30 AM)">Midday (11:30 AM)</option>
                        <option value="Afternoon (1:30 PM)">Afternoon (1:30 PM)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-solid btn-solid-primary"
                      style={{ marginTop: '10px', opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Confirm Campus Visit'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
