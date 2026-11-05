-- =======================================================================
-- PRIME MONTESSORI SCHOOLS — SUPABASE DATABASE SCHEMA
-- =======================================================================
-- Run this script in your Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- It creates the tables, indexes, and Row Level Security (RLS) policies
-- allowing the public website to submit admissions and campus visits.
-- =======================================================================

-- 1. Table: admissions_enquiries
CREATE TABLE IF NOT EXISTS public.admissions_enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  child_name TEXT NOT NULL,
  child_class TEXT NOT NULL,
  start_term TEXT NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'admitted', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Table: campus_visits
CREATE TABLE IF NOT EXISTS public.campus_visits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  visit_date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'rescheduled', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.admissions_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campus_visits ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies: Allow public anonymous submission from website
DROP POLICY IF EXISTS "Allow public admissions insert" ON public.admissions_enquiries;
CREATE POLICY "Allow public admissions insert"
  ON public.admissions_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public campus visit insert" ON public.campus_visits;
CREATE POLICY "Allow public campus visit insert"
  ON public.campus_visits
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 5. RLS Policies: Allow authenticated staff / admin users to read and update
DROP POLICY IF EXISTS "Allow admin read admissions" ON public.admissions_enquiries;
CREATE POLICY "Allow admin read admissions"
  ON public.admissions_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow admin read visits" ON public.campus_visits;
CREATE POLICY "Allow admin read visits"
  ON public.campus_visits
  FOR SELECT
  TO authenticated
  USING (true);
