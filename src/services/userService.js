import { supabase } from "../supabaseClient";

export async function listUsers() {
  const { data, error } = await supabase.from("profiles").select("*");
  if (error) throw error;
  return data;
}

export async function createUser({ id, email, name, telephone, role }) {
  const { data, error } = await supabase
    .from("profiles")
    .insert([{ id, email, telephone, role }]);
  if (error) throw error;
  return data;
}

export async function updateUser(id, updates) {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", id);
  if (error) throw error;
  return data;
}

export async function deleteUser(id) {
  const { error } = await supabase.from("profiles").delete().eq("id", id);
  if (error) throw error;
  return true;
}
