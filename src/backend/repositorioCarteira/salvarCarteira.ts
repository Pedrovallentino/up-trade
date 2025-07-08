'use server'
import { Carteira } from "@/core/model/carteira";
import { GerardorId } from "@/core/utils/geradorId";
import { RepositorioCarteira } from "./repositorioCarteira";

export default async function salvarCarteira(carteira: Carteira){
    const novaCarteira = new Carteira(
        carteira.getId() ?? GerardorId.gerarId(),
        carteira.getNome(),
        carteira.getDataCriacao(),
        carteira.getValorAtual(),
        carteira.getIdUsuario()
);
    RepositorioCarteira.salvar(novaCarteira); 
}