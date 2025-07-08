'use server';

import { RepositorioMovimentacaoCarteira } from "./repositorioMovimentacaoCarteira";

export default async function ordenarMovimentacoesPorValor(id_carteira: number, ordem: "asc" | "desc" = "asc") {
  return await RepositorioMovimentacaoCarteira.ordenarPorValor(id_carteira, ordem);
}
