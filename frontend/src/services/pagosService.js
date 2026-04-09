import { supabase } from "../supabaseClient";

export async function getPagos() {
  return await supabase.from("Pago").select("*");
}

export async function crearPago(pago) {
  return await supabase.from("Pago").insert([pago]);
}
