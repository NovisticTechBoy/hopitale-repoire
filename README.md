# 🩺 MedConnect — Healthcare & Doctor Booking Platform

MedConnect is a modern React application built with Vite and Supabase that connects patients with trusted healthcare professionals, allows doctor search by specialty, and enables online appointment scheduling and management.

---

## 🚀 Recent Changes & Features Implemented

1. **Supabase Integration & Database Backend**:
   - Real-time fetching of verified doctors from Supabase (`doctors` table).
   - Real appointment creation (`appointments` table) and patient profiles (`profiles` table).

2. **User Appointments Dashboard (`/appointments`)**:
   - Logged-in patients can view all scheduled consultations.
   - Live status badges (`CONFIRMED`, `CANCELLED`) and appointment cancellation functionality.

3. **Authentication & Password Recovery**:
   - User Registration (`/signup`) and Login (`/login`) powered by Supabase Auth.
   - Password Reset request flow and password update page (`/reset-password`).
   - Automatic redirect to `/login` when unauthenticated users attempt to book an appointment.

4. **Dark & Light Theme Mode**:
   - Integrated `ThemeContext` with custom CSS theme tokens.
   - Navbar toggle button (`Sun` / `Moon`) persisting preference in `localStorage`.

5. **Navigation & Page Upgrades**:
   - Replaced full-page reload `<a>` tags in `Footer` with React Router `<Link>` components.
   - Enhanced `About` and `Contact` pages with rich content and interactive forms.
   - Configured dev server to run on port `8000`.

---

## 🛠️ Environment Variables Setup

1. Copy `.env.example` to create `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-supabase-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
   ```

> **Note**: Obtain these values from your [Supabase Dashboard](https://supabase.com/dashboard) under **Project Settings -> API**.

---

## 🗄️ Database Setup (Supabase SQL)

To set up a fresh Supabase database for this project, run the following SQL script in your Supabase **SQL Editor**:

```sql
-- 1. Create Profiles Table (linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  role TEXT DEFAULT 'patient',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Doctors Table
CREATE TABLE IF NOT EXISTS public.doctors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  specialty TEXT NOT NULL,
  rating NUMERIC(3,2) DEFAULT 4.8,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Appointments Table
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  patient_name TEXT,
  doctor_id UUID REFERENCES public.doctors(id) ON DELETE SET NULL,
  doctor_name TEXT,
  specialty TEXT,
  appointment_date DATE,
  appointment_time TEXT,
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS Policies
CREATE POLICY "Allow public read access to doctors" ON public.doctors
  FOR SELECT USING (true);

CREATE POLICY "Allow individual read access to profiles" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Allow individual update access to profiles" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Allow read access to user appointments" ON public.appointments
  FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Allow insert access to appointments" ON public.appointments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow update to user appointments" ON public.appointments
  FOR UPDATE USING (auth.uid() = user_id OR user_id IS NULL);

-- 6. Insert Initial Doctor Seed Data
INSERT INTO public.doctors (name, specialty, rating) VALUES
  ('Dr. Sarah Williams', 'Cardiologist', 4.90),
  ('Dr. James Brown', 'Dentist', 4.80),
  ('Dr. Grace Adams', 'Neurologist', 4.70),
  ('Dr. Michael Chen', 'Pediatrician', 4.95),
  ('Dr. Emily Taylor', 'Ophthalmologist', 4.85),
  ('Dr. David Martinez', 'Orthopedic', 4.75);
```

---

## 📦 Installation & Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local server (runs on `http://localhost:8000`):
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
