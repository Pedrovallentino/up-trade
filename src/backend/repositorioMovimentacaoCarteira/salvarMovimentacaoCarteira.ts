'use server'

import { MovimentacaoCarteira } from "@/core/model/movimentacoes/movimentacaoCarteira";
import { RepositorioMovimentacaoCarteira } from "./repositorioMovimentacaoCarteira";
import { RepositorioCarteira } from "../repositorioCarteira/repositorioCarteira";
import { Carteira } from "@/core/model/carteira";

export default async function salvarMovimentacaoCarteira(movimentacaoCarteira: MovimentacaoCarteira) {
    
  const dadosCarteira = await RepositorioCarteira.buscarPorId(movimentacaoCarteira.getIdCarteira());

  if (!dadosCarteira) {
    throw new Error("Carteira não encontrada para aplicar movimentação.");
  }

  const carteira = new Carteira(
    dadosCarteira.id_carteira,
    dadosCarteira.nome,
    dadosCarteira.dataCriacao,
    dadosCarteira.valorAtual,
    dadosCarteira.id_usuario
  );

  movimentacaoCarteira.aplicar(carteira);

  await RepositorioMovimentacaoCarteira.salvar(movimentacaoCarteira, carteira);
}