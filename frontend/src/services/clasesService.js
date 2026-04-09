import { supabase } from "../supabaseClient";

export async function getClases() {
  return await supabase.from("Clase").select("*");
}

export async function inscribirse(claseId, userId) {
  return await supabase
    .from("Usuario_Clase")
    .insert([{ Usuario_idUsuario: userId, Clase_idClase: claseId }]);
}
