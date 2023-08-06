import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xafeigvcjydsepxlzzee.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZmVpZ3Zjanlkc2VweGx6emVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxNTk3ODQsImV4cCI6MjAwNDczNTc4NH0.uNpE6azIC4tC5piYfm3z-oZ_elKGhIvZac6Rjrkr3GA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
