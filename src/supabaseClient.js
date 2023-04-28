import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hdnelugfbjgnjgrwegpv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkbmVsdWdmYmpnbmpncndlZ3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4MTQ0NTIsImV4cCI6MTk5MzM5MDQ1Mn0.0ouFVtkxeCSWtuCmsNfqFYvjo7tXUnbnbEMZ-Qs6u6U'
export const supabase = createClient(supabaseUrl, supabaseKey)