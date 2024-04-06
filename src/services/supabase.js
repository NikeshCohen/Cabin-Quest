import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jimuwsdqsoktnugvcicl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppbXV3c2Rxc29rdG51Z3ZjaWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzOTQ4MDYsImV4cCI6MjAyNjk3MDgwNn0.W-fe9aw9slLmpIckkyZBwFJ3sXrMqYWFK2RRGLBC7sQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
