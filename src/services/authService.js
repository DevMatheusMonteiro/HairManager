import { supabase } from "../supabaseClient";
import { createUser } from "./userService";

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

  const userId = authData.user?.id;

  if (authError) throw authError;

  const profileData = await createUser({
    id: userId,
    email,
    telephone,
    name,
    role,
    extra,
  });

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
