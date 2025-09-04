import { supabase } from "../supabaseClient";

const table = "businesses";

export async function findBusinessById(id) {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function updateBusiness({ id, cnpj }) {
  const currentBusiness = await findBusinessById(id);

  const { data, error } = await supabase
    .from(table)
    .update({ cnpj: cnpj ?? currentBusiness.cnpj })
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}
