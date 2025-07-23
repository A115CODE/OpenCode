import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

console.log('db on');

const supabaseUrl = 'https://hjjuytnpgjtpujlsdqiw.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqanV5dG5wZ2p0cHVqbHNkcWl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5ODcxNzYsImV4cCI6MjA2ODU2MzE3Nn0.EnY-4xGcJfTdYf2avOGCNoheecUeBycrirBQt9vifL0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
