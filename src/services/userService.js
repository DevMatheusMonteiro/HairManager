import { MdExposurePlus1 } from "react-icons/md";
import { supabase } from "../supabaseClient";
import { updateBusiness } from "./businessService";
import { updateCustomer } from "./custormerService";

export async function listUsers() {
  const { data, error } = await supabase
    .from("profiles_with_roles")
    .select("*");
  if (error) throw error;
  return data;
}

export async function findUserByEmail(email) {
  const { data, error } = await supabase
    .from("profiles_with_roles")
    .select("*")
    .eq("email", email)
    .single();

  if (error) throw error;

  return data;
}

export async function findUserById(id) {
  const { data, error } = await supabase
    .from("profiles_with_roles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
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

  console.log();

  if (profileError) throw profileError;

  let roleTable =
    role === "admin"
      ? "admins"
      : role === "business"
      ? "businesses"
      : "customers";

  const { data: roleData, error: roleError } = await supabase
    .from(roleTable)
    .insert([{ id: id, ...extra }]);

  if (roleError) throw roleError;

  return { ...profileData[0], ...roleData[0] };
}

export async function updateUser({
  id,
  email,
  name,
  telephone,
  role = "customer",
  extra = {},
}) {
  const currentProfile = await findUserById(id);

  const profileUpdate = {
    email: email ?? currentProfile.email,
    name: name ?? currentProfile.name,
    telephone: telephone ?? currentProfile.telephone,
  };

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .update(profileUpdate)
    .eq("id", id)
    .select()
    .single();

  if (profileError) throw profileError;
  const roleData =
    role === "customer"
      ? updateCustomer({ id: profileData.id, ...extra })
      : role === "business"
      ? updateBusiness({ id: profileData.id, ...extra })
      : null;

  return { ...profileData, ...roleData };
}

export async function deleteUser(id) {
  const { error } = await supabase.from("profiles").delete().eq("id", id);
  if (error) throw error;
  return true;
}
