import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://isofgvrdtdxjnzfptkrn.supabase.co"; // replace this
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzb2ZndnJkdGR4am56ZnB0a3JuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDI4NTUyOSwiZXhwIjoyMDU5ODYxNTI5fQ.Loc4W-VLtEzT7fd9XC6_lyJo771SqYb7MZSwoANzY6g"; // replace this

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
