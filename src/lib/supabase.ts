import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('CRITICAL ERROR: Supabase environment variables are missing!');
    console.error('PUBLIC_SUPABASE_URL:', supabaseUrl ? 'Set' : 'Missing');
    console.error('PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set' : 'Missing');
}

// Create client even if keys are missing to prevent crash on import, but queries will fail
export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder'
);
