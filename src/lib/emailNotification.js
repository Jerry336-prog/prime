import emailjs from '@emailjs/browser';

/**
 * Service configuration
 * These can be set in your .env file:
 * VITE_EMAILJS_SERVICE_ID
 * VITE_EMAILJS_TEMPLATE_ID
 * VITE_EMAILJS_PUBLIC_KEY
 * VITE_SCHOOL_NOTIFICATION_EMAIL
 */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const TARGET_EMAIL = import.meta.env.VITE_SCHOOL_NOTIFICATION_EMAIL || 'admissions@primemontessorischools.com';

/**
 * Send an Admissions Enquiry direct to the school's email inbox(es)
 */
export async function sendAdmissionsEmailNotification(enquiry) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.info(
      '📧 Email notification ready. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to .env to receive direct emails.'
    );
    return { success: true, simulated: true };
  }

  // Support multiple recipient emails separated by comma or semicolon
  const recipients = TARGET_EMAIL.split(/[,;]/).map(e => e.trim()).filter(Boolean);

  try {
    const promises = recipients.map(recipient => {
      const templateParams = {
        to_email: recipient,
        title: `Admissions: ${enquiry.childName} (${enquiry.childClass})`,
        subject: `New Admissions Enquiry: ${enquiry.childName} (${enquiry.childClass})`,
        name: enquiry.parentName,
        email: enquiry.email,
        parent_name: enquiry.parentName,
        parent_email: enquiry.email,
        parent_phone: enquiry.phone,
        child_name: enquiry.childName,
        child_class: enquiry.childClass,
        start_term: enquiry.startTerm,
        notes: enquiry.notes || 'None provided',
        submitted_at: new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })
      };
      return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    });

    await Promise.allSettled(promises);
    return { success: true };
  } catch (error) {
    console.error('EmailJS Admissions Dispatch Error:', error);
    return { success: false, error };
  }
}

/**
 * Send a Campus Visit Booking direct to the school's email inbox(es)
 */
export async function sendCampusVisitEmailNotification(visit) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.info(
      '📧 Email notification ready. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to .env to receive direct emails.'
    );
    return { success: true, simulated: true };
  }

  const recipients = TARGET_EMAIL.split(/[,;]/).map(e => e.trim()).filter(Boolean);

  try {
    const promises = recipients.map(recipient => {
      const templateParams = {
        to_email: recipient,
        title: `Campus Tour: ${visit.name} (${visit.date})`,
        subject: `New Campus Tour Booking: ${visit.name} on ${visit.date}`,
        name: visit.name,
        email: recipient,
        visitor_name: visit.name,
        visitor_phone: visit.phone,
        visit_date: visit.date,
        time_slot: visit.slot,
        submitted_at: new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })
      };
      return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    });

    await Promise.allSettled(promises);
    return { success: true };
  } catch (error) {
    console.error('EmailJS Campus Visit Dispatch Error:', error);
    return { success: false, error };
  }
}
