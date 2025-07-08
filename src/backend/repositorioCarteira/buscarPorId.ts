'use server'

import { RepositorioCarteira } from "./repositorioCarteira";

export default async function buscarCarteiraPorId(id_carteira: number) {
  return await RepositorioCarteira.buscarPorId(id_carteira);
}
