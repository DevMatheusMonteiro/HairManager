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

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .insert([{ id: userId, email, name, telephone, role }]);

  if (profileError) throw profileError;

  let roleTable = null;
  if (role === "admin") roleTable = "admins";
  else if (role === "business") roleTable = "businesses";
  else if (role === "customer") roleTable = "customers";

  if (roleTable) {
    const { error: roleError } = await supabase
      .from(roleTable)
      .insert([{ id: userId, ...extra }]);
    if (roleError) throw roleError;
  }

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
