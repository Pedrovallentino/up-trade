import buscarCarteiraPorId from "./repositorioCarteira/buscarPorId";
import excluirCarteira from "./repositorioCarteira/excluirCarteira";
import listarCarteiras from "./repositorioCarteira/listarCarteiras";
import listarCarteirasOrdenadas from "./repositorioCarteira/listarOrdenadoPorData";
import renomearCarteira from "./repositorioCarteira/renomearCarteira";
import salvarCarteira from "./repositorioCarteira/salvarCarteira";
import { RepositorioCarteira } from "./repositorioCarteira/repositorioCarteira";

import excluirMovimentacaoCarteira from "./repositorioMovimentacaoCarteira/excluirMovimentacaoCarteira";
import listarMovimentacoesPorCarteira from "./repositorioMovimentacaoCarteira/listarMovimentacoesPorCarteira";
import ordenarMovimentacoesPorValor from "./repositorioMovimentacaoCarteira/ordenarMovimentacoesPorValor";
import salvarMovimentacaoCarteira from "./repositorioMovimentacaoCarteira/salvarMovimentacaoCarteira";

export default class Backend{
    
    static readonly carteiras = {
        salvarCarteira, 
        renomearCarteira, 
        listarCarteiras, 
        listarCarteirasOrdenadas, 
        excluirCarteira, 
        buscarCarteiraPorId
    }

    static readonly movimentacaoCarteira = {
        salvarMovimentacaoCarteira, 
        excluirMovimentacaoCarteira, 
        listarMovimentacoesPorCarteira, 
        ordenarMovimentacoesPorValor
    }
}