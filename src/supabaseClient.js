import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

//export async function getProfile() {
//   const {
//     data: { session },
//     error,
//   } = await supabase.auth.getSession();

//   if (error || !session) {
//     return null;
//   }

//   //   console.log(session);
//   //   const { data, error: error_user } = await supabase
//   //     .from("profiles")
//   //     .select(`username, website, avatar_url`)
//   //     .eq("id", session.user.id)
//   //     .single();

//   //   console.log(data);

//   //   if (error_user) {
//   //     throw error_user;
//   //   }

//   return {
//     email: session.user.email,
//   };
// }
