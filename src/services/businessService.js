import { supabase } from "../supabaseClient";

const table = "profiles_with_roles";

export async function findBusinessById(id) {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function searchBusinessAndServices(query) {
  const { data: businessData, error: businessError } = await supabase
    .from(table)
    .select("*")
    .eq("role", "business");

  if (businessError) throw businessError;

  const { data: servicesData, error: servicesError } = await supabase
    .from("services")
    .select("*");

  if (servicesError) throw servicesError;

  const { data: businessHoursData, error: businessHoursError } = await supabase
    .from("business_hours")
    .select("*");

  if (businessHoursError) throw businessHoursError;

  const businessWithServices = businessData.map((business) => ({
    ...business,
    hours: businessHoursData.filter((hour) => hour.business_id === business.id),
    services: servicesData.filter(
      (service) => service.business_id === business.id
    ),
  }));

  const data = businessWithServices.filter((b) => {
    const businessesByName = b.name.toLowerCase().includes(query.toLowerCase());
    const servicesByName =
      b.services.filter((s) =>
        s.name.toLowerCase().includes(query.toLowerCase())
      ).length > 0;

    return businessesByName || servicesByName;
  });

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
