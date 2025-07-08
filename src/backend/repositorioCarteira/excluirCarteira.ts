'use server'

import { RepositorioCarteira } from "./repositorioCarteira";

export default async function excluirCarteira(id_carteira: number) {
  await RepositorioCarteira.excluir(id_carteira);
}
