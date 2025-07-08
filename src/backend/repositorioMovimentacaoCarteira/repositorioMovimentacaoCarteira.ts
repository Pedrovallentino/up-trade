import { PrismaClient } from "@prisma/client/extension";
import { MovimentacaoCarteira } from "@/core/model/movimentacoes/movimentacaoCarteira";
import { Carteira } from "@/core/model/carteira";

const prisma = new PrismaClient();

export class RepositorioMovimentacaoCarteira {

  static async salvar(movimentacao: MovimentacaoCarteira, carteira: Carteira) {

    await prisma.movimentacaoCarteira.create({
      data: {
        nome: movimentacao.getNome(),
        valor: movimentacao.getValor(),
        dataCriacao: movimentacao.getDataCriacao(),
        modalidade: movimentacao.getModalidade(),
        tipo: movimentacao.getTipo(),
        id_carteira: movimentacao.getIdCarteira()
      }
    });

    await prisma.carteira.update({
      where: { id_carteira: movimentacao.getIdCarteira() },
      data: { valorAtual: carteira.getValorAtual() }
    });
  }

  static async excluir(id_movimentacaoCarteira: number) {
    return await prisma.movimentacaoCarteira.delete({
      where: { id_movimentacaoCarteira }
    });
  }

  static async listarPorCarteira(id_carteira: number) {
    return await prisma.movimentacaoCarteira.findMany({
      where: { id_carteira }
    });
  }

  static async ordenarPorValor(id_carteira: number, ordem: "asc" | "desc" = "asc") {
    return await prisma.movimentacaoCarteira.findMany({
      where: { id_carteira },
      orderBy: { valor: ordem }
    });
  }
}
