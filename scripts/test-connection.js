import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Manual env parsing
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        env[key.trim()] = value.trim();
    }
});

const supabaseUrl = env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.PUBLIC_SUPABASE_ANON_KEY;

console.log('Checking Supabase connection...');
console.log('URL:', supabaseUrl ? 'Set' : 'Missing');
console.log('Key:', supabaseAnonKey ? 'Set' : 'Missing');

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing environment variables!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
    try {
        console.log('Attempting fetch...');
        // Use 'services' table which we know exists, or 'blog_posts'
        const { data, error } = await supabase.from('blog_posts').select('*').limit(1);

        if (error) {
            console.error('Supabase Error:', error.message);
            console.error('Full Error:', JSON.stringify(error, null, 2));
        } else {
            console.log('Connection successful!');
            console.log('Data sample:', data);
        }
    } catch (err) {
        console.error('Runtime Error:', err);
    }
}

testConnection();
