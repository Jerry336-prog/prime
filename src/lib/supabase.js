import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://lzuquugosuzyxyzktvaj.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('⚠️ Supabase credentials missing. Check your .env file for VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Submit an admissions enquiry to Supabase
 */
export async function submitAdmissionsEnquiry(enquiry) {
  try {
    const { data, error } = await supabase
      .from('admissions_enquiries')
      .insert([
        {
          parent_name: enquiry.parentName,
          email: enquiry.email,
          phone: enquiry.phone,
          child_name: enquiry.childName,
          child_class: enquiry.childClass,
          start_term: enquiry.startTerm,
          notes: enquiry.notes || ''
        }
      ]);

    if (error) {
      console.error('Supabase Admissions Error:', error);
      return { success: false, error };
    }
    return { success: true, data };
  } catch (err) {
    console.error('Network / Supabase Exception:', err);
    return { success: false, error: err };
  }
}

/**
 * Submit a campus visit booking to Supabase
 */
export async function submitCampusVisit(visit) {
  try {
    const { data, error } = await supabase
      .from('campus_visits')
      .insert([
        {
          full_name: visit.name,
          phone: visit.phone,
          visit_date: visit.date,
          time_slot: visit.slot
        }
      ]);

    if (error) {
      console.error('Supabase Campus Visit Error:', error);
      return { success: false, error };
    }
    return { success: true, data };
  } catch (err) {
    console.error('Network / Supabase Exception:', err);
    return { success: false, error: err };
  }
}
