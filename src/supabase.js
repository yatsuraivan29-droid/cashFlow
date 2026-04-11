const supabaseUrl = 'https://nhxwxjlxmrvphqrezukf.supabase.co';
const supabaseKey = 'sb_publishable_6-DWxKHkQkdXSxmxO_tbPw_QVZtB_6f'; // Переконайся, що він повний і довгий

// Спробуємо звернутися до бібліотеки через глобальний об'єкт supabase
// CDN зазвичай створює об'єкт window.supabase
export const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);