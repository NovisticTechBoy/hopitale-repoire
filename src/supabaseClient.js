import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn(
    '⚠️ Supabase credentials missing! Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env.local or hosting dashboard (e.g. Vercel).'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

