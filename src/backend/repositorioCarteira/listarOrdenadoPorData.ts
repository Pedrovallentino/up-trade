'use server'

import { RepositorioCarteira } from "./repositorioCarteira";

export default async function listarCarteirasOrdenadas(ordem: "asc" | "desc" = "asc") {
  return await RepositorioCarteira.listarOrdenadoPorData(ordem);
}
