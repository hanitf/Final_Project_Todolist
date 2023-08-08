import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://fjodiuujrneuddxniziw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqb2RpdXVqcm5ldWRkeG5peml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1MTE4MjQsImV4cCI6MjAwNzA4NzgyNH0.rpI7qqUYUaCsGWvESJIyuP6o7r1EhAdkODlDqTPV88c";

export default createClient(supabaseUrl, supabaseAnonKey);