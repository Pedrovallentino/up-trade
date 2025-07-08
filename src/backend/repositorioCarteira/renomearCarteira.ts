'use server'

import { RepositorioCarteira } from "./repositorioCarteira";

export default async function renomearCarteira(id_carteira: number, novoNome: string) {
  return await RepositorioCarteira.renomear(id_carteira, novoNome);
}
