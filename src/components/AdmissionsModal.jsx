import React from 'react';
import { CheckIcon } from './Icons';

export default function AdmissionsModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  return (
    <div className="liquid-modal-backdrop" onClick={onClose}>
      <div className="liquid-modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-gold-check">
          <CheckIcon size={24} color="#3B127B" />
        </div>
        <h3 className="heading-md">Enquiry Received</h3>
        <p style={{ color: 'var(--color-text-muted)', margin: '14px 0 24px', fontSize: '0.95rem' }}>
          Thank you, <strong>{data.parentName}</strong>. We have registered your admissions interest for <strong>{data.childName}</strong> ({data.childClass}). Our admissions desk will reach out to you at <strong>{data.phone}</strong> shortly.
        </p>
        <button className="btn-solid btn-solid-gold" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
