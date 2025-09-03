import { supabase } from "../supabaseClient";

export async function register({
  email,
  password,
  name,
  telephone,
  role = "customer",
  extra = {},
}) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw authError;

  const userId = authData.user.id;

  return profileData;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;

  return true;
}
