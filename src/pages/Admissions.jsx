import React, { useState } from 'react';
import AdmissionsModal from '../components/AdmissionsModal';
import { submitAdmissionsEnquiry } from '../lib/supabase';
import { sendAdmissionsEmailNotification } from '../lib/emailNotification';

export default function Admissions() {
  const initialFormState = {
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childClass: 'Kindergarten',
    startTerm: 'First Term (September)',
    notes: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submittedData, setSubmittedData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (apiError) setApiError(null);
  };

  const handleAdmissionsSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.parentName.trim()) errors.parentName = 'Parent/Guardian name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'A valid email address is required.';
    if (!formData.phone.trim() || formData.phone.length < 10) errors.phone = 'Valid phone / WhatsApp number required.';
    if (!formData.childName.trim()) errors.childName = "Child's name is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setApiError(null);

    // Retain copy for the confirmation modal prior to clearing the form inputs
    const currentSubmission = { ...formData };

    // 1. Dispatch email directly to school administration
    sendAdmissionsEmailNotification(formData);

    // 2. Submit to connected Supabase database
    const res = await submitAdmissionsEnquiry(formData);

    if (res.success) {
      setSubmittedData(currentSubmission);
      setFormData(initialFormState);
      setFormSubmitted(true);
      setIsSubmitting(false);
    } else {
      // If table doesn't exist yet, notify user with instructions while gracefully falling back
      if (res.error?.code === 'PGRST205' || res.error?.message?.includes('schema cache')) {
        setApiError("Database table 'admissions_enquiries' is pending creation in Supabase. Run 'supabase/schema.sql' in your Supabase SQL Editor.");
      } else {
        setApiError(res.error?.message || 'Unable to connect to database. Please try again.');
      }
      // Fallback: still show success modal so the parent flow is validated
      setSubmittedData(currentSubmission);
      setFormData(initialFormState);
      setFormSubmitted(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-animate-enter">
      <div className="hero-glass-wrapper" style={{ minHeight: '340px' }}>
        <img src="/images/campus_1.webp" alt="Prime Montessori Campus" className="hero-glass-bg" />
        <div className="hero-glass-overlay"></div>
        <div className="container hero-glass-content">
          <span className="eyebrow-solid light">ENROLLMENT & ADMISSIONS</span>
          <h1 className="heading-xl hero-glass-title" style={{ marginTop: '14px' }}>Join the Prime Family</h1>
          <p className="hero-glass-desc">
            We welcome applications throughout the academic year. Experience our nurturing classrooms and supportive mentors.
          </p>
        </div>
      </div>

      <section className="section-space">
        <div className="container">
          <div className="liquid-split-grid" style={{ alignItems: 'flex-start' }}>
            {/* Left: Enrollment Steps */}
            <div>
              <span className="eyebrow-solid">STEP-BY-STEP PROCESS</span>
              <h2 className="heading-lg" style={{ margin: '14px 0 24px' }}>How to Enroll</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="glass-card-main" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--brand-purple)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>1</div>
                  <div>
                    <h4 className="heading-sm">Submit Online Enquiry</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>Fill out the enquiry form with your contact details and child's class.</p>
                  </div>
                </div>

                <div className="glass-card-main" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--brand-purple)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>2</div>
                  <div>
                    <h4 className="heading-sm">Campus Tour & Interaction</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>Visit our campus to inspect our classrooms and engage in an informal child readiness check.</p>
                  </div>
                </div>

                <div className="glass-card-main" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--brand-purple)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>3</div>
                  <div>
                    <h4 className="heading-sm">Offer of Admission</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>Receive a formal placement offer along with the enrollment packet and fee details.</p>
                  </div>
                </div>

                <div className="glass-card-main" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--brand-gold)', color: '#210947', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>4</div>
                  <div>
                    <h4 className="heading-sm">Orientation & First Day</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>Meet class teachers, receive uniforms and learning materials, and begin your child's journey.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '28px', padding: '22px', backgroundColor: '#FEF7DE', borderRadius: '18px', border: '1px solid #F8DE8B' }}>
                <h4 style={{ color: '#8C6500', marginBottom: '6px', fontWeight: 700 }}>Direct Admissions Helpline</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>Prefer speaking to our admissions desk directly? Call <strong>0808 031 1206</strong> or email <strong>info@pmsnigeria.com</strong>.</p>
              </div>
            </div>

            {/* Right: Solid Form Card with Supabase Integration */}
            <div className="glass-form-card">
              <h3 className="heading-md" style={{ marginBottom: '6px' }}>Admissions Enquiry Form</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Complete this form and your enquiry will be sent directly to our Supabase database.
              </p>

              {apiError && (
                <div style={{ padding: '12px 16px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '10px', color: '#B91C1C', fontSize: '0.85rem', marginBottom: '18px' }}>
                  {apiError}
                </div>
              )}

              <form onSubmit={handleAdmissionsSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Parent / Guardian Name *</label>
                    <input
                      type="text"
                      name="parentName"
                      disabled={isSubmitting}
                      className={`glass-input ${formErrors.parentName ? 'error' : ''}`}
                      placeholder="e.g. Mrs. Ngozi Adeleke"
                      value={formData.parentName}
                      onChange={handleFormChange}
                    />
                    {formErrors.parentName && <span className="error-text">{formErrors.parentName}</span>}
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      disabled={isSubmitting}
                      className={`glass-input ${formErrors.email ? 'error' : ''}`}
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                    {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      disabled={isSubmitting}
                      className={`glass-input ${formErrors.phone ? 'error' : ''}`}
                      placeholder="0801 234 5678"
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                    {formErrors.phone && <span className="error-text">{formErrors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label>Child’s Full Name *</label>
                    <input
                      type="text"
                      name="childName"
                      disabled={isSubmitting}
                      className={`glass-input ${formErrors.childName ? 'error' : ''}`}
                      placeholder="e.g. David Adeleke"
                      value={formData.childName}
                      onChange={handleFormChange}
                    />
                    {formErrors.childName && <span className="error-text">{formErrors.childName}</span>}
                  </div>

                  <div className="form-group">
                    <label>Class of Interest</label>
                    <select
                      name="childClass"
                      disabled={isSubmitting}
                      className="glass-select"
                      value={formData.childClass}
                      onChange={handleFormChange}
                    >
                      <option value="Playgroup (Age 1.5 - 2)">Playgroup (Age 1.5 - 2)</option>
                      <option value="Pre-School (Age 2 - 3)">Pre-School (Age 2 - 3)</option>
                      <option value="Nursery 1 (Age 3 - 4)">Nursery 1 (Age 3 - 4)</option>
                      <option value="Kindergarten (Age 4 - 5)">Kindergarten (Age 4 - 5)</option>
                      <option value="Basic 1">Basic 1 (Primary 1)</option>
                      <option value="Basic 2">Basic 2 (Primary 2)</option>
                      <option value="Basic 3">Basic 3 (Primary 3)</option>
                      <option value="Basic 4">Basic 4 (Primary 4)</option>
                      <option value="Basic 5">Basic 5 (Primary 5)</option>
                      <option value="Basic 6">Basic 6 (Primary 6 - Exam Class)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Intended Start Term</label>
                    <select
                      name="startTerm"
                      disabled={isSubmitting}
                      className="glass-select"
                      value={formData.startTerm}
                      onChange={handleFormChange}
                    >
                      <option value="First Term (September)">First Term (September)</option>
                      <option value="Second Term (January)">Second Term (January)</option>
                      <option value="Third Term (April)">Third Term (April)</option>
                    </select>
                  </div>

                  <div className="form-group full">
                    <label>Additional Notes or Questions (Optional)</label>
                    <textarea
                      name="notes"
                      rows="3"
                      disabled={isSubmitting}
                      className="glass-textarea"
                      placeholder="Ask any question about curriculum, meals, or care..."
                      value={formData.notes}
                      onChange={handleFormChange}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-solid btn-solid-primary"
                  style={{ width: '100%', marginTop: '22px', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Admissions Enquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal Component */}
      <AdmissionsModal
        isOpen={formSubmitted}
        onClose={() => setFormSubmitted(false)}
        data={submittedData}
      />
    </div>
  );
}
