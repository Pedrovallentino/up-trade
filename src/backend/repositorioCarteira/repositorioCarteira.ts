import { PrismaClient } from "@prisma/client/extension";
import { Carteira } from "@/core/model/carteira";

const prisma = new PrismaClient();

export class RepositorioCarteira {
  static async salvar(carteira: Carteira): Promise<Carteira> {
    return await prisma.carteira.create({
      data: {
        nome: carteira.getNome(),
        dataCriacao: carteira.getDataCriacao(),
        valorAtual: carteira.getValorAtual(),
        id_usuario: carteira.getIdUsuario()
      }
    });
  }

  static async excluir(id_carteira: number) {
    return await prisma.carteira.delete({
      where: { id_carteira }
    });
  }

  static async renomear(id_carteira: number, novoNome: string): Promise<Carteira> {
    return await prisma.carteira.update({
      where: { id_carteira },
      data: { nome: novoNome }
    });
  }

  static async listarOrdenadoPorData(ordem: "asc" | "desc" = "asc"): Promise<Carteira[]> {
    return await prisma.carteira.findMany({
      orderBy: { dataCriacao: ordem }
    });
  }

  static async buscarPorId(id_carteira: number): Promise<Carteira> {
    return await prisma.carteira.findUnique({
      where: { id_carteira }
    });
  }

  static async listarTodas(): Promise<Carteira[]> {
    return await prisma.carteira.findMany();
  }
}