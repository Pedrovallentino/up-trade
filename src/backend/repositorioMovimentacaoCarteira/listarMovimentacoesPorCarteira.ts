'use server';

import { RepositorioMovimentacaoCarteira } from "./repositorioMovimentacaoCarteira";

export default async function listarMovimentacoesPorCarteira(id_carteira: number) {
  return await RepositorioMovimentacaoCarteira.listarPorCarteira(id_carteira);
}
