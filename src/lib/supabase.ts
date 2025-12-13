import { createClient } from '@supabase/supabase-js';

// Access variables explicitly so Vite can statically replace them
const astroUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const astroKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Access process.env safely for Node/Server environments
const processUrl = typeof process !== 'undefined' && process.env ? process.env.PUBLIC_SUPABASE_URL : undefined;
const processKey = typeof process !== 'undefined' && process.env ? process.env.PUBLIC_SUPABASE_ANON_KEY : undefined;

// Fallback logic
const supabaseUrl = astroUrl || processUrl || '';
const supabaseAnonKey = astroKey || processKey || '';

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('CRITICAL ERROR: Supabase environment variables are missing!');
    console.error('URL Found:', !!supabaseUrl);
    console.error('Key Found:', !!supabaseAnonKey);
}

// Robust client creation that won't crash even if keys are missing
export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder'
);
