import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wdsespcaiqxdbejdiuma.supabase.co";
const supabaseAnonKey = "sb_publishable_HV89n_mjDH_LXXipu0fyJQ_oHlQHI1w";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
