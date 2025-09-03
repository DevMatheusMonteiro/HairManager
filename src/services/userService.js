import { supabase } from "../supabaseClient";

export async function listUsers() {
  const { data, error } = await supabase.from("profiles").select("*");
  if (error) throw error;
  return data;
}

export async function findUser(id) {
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (profileError) throw profileError;

  let roleTable =
    role === "admin"
      ? "admins"
      : role === "business"
      ? "businesses"
      : "customers";

  const { data: roleData, error: roleError } = await supabase
    .from(roleTable)
    .select("*")
    .eq("id", id)
    .single();

  if (roleError) throw roleError;

  return { profileData, roleData };
}

export async function createUser({
  id,
  email,
  name,
  telephone,
  role = "customer",
  extra = {},
}) {
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .insert([{ id, email, name, telephone, role }]);

  if (profileError) throw profileError;

  let roleTable =
    role === "admin"
      ? "admins"
      : role === "business"
      ? "businesses"
      : "customers";

  const { data: roleData, error: roleError } = await supabase
    .from(roleTable)
    .insert([{ id: profileData.id, ...extra }]);

  if (roleError) throw roleError;

  return { ...profileData, ...roleData };
}

export async function updateUser({
  id,
  email,
  name,
  telephone,
  role = "customer",
  extra = {},
}) {
  const { currentProfile, currentRole } = await findUser(id);

  const profileUpdate = {
    email: email ?? currentUser.email,
    name: name ?? currentUser.name,
    telephone: telephone ?? currentUser.telephone,
  };

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .update(profileUpdate)
    .eq("id", id)
    .select()
    .single();

  if (profileError) throw profileError;

  let roleTable =
    role === "admin"
      ? "admins"
      : role === "business"
      ? "businesses"
      : "customers";

  const { data: roleData, error: roleError } = await supabase
    .from(roleTable)
    .insert([{ id: profileData.id, ...extra }]);

  if (roleError) throw roleError;

  return { ...profileData, ...roleData };
}

export async function deleteUser(id) {
  const { error } = await supabase.from("profiles").delete().eq("id", id);
  if (error) throw error;
  return true;
}
