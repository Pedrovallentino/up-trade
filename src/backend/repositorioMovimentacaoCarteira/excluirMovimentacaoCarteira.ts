'use server';

import { RepositorioMovimentacaoCarteira } from "./repositorioMovimentacaoCarteira";

export default async function excluirMovimentacaoCarteira(id: number) {
  return await RepositorioMovimentacaoCarteira.excluir(id);
}
