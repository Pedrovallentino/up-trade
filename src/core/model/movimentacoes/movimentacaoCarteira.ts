import { Carteira } from "../carteira";

export class MovimentacaoCarteira {
  constructor(
    private nome: string,
    private valor: number,
    private dataCriacao: Date,
    private modalidade: string, 
    private tipo: string,       
    private id_carteira: number
  ) {}

  aplicar(carteira: Carteira): void {
    if (this.tipo === "renda") {
      carteira.creditar(this.valor);
    } else if (this.tipo === "despesa") {
      carteira.debitar(this.valor);
    } else {
      throw new Error("Tipo de movimentação inválido.");
    }
  }

  getNome(): string{
    return this.nome; 
  }

  getValor(): number{
    return this.valor;
  }

  getDataCriacao(): Date{
    return this.dataCriacao; 
  }

  getModalidade(): string{
    return this.modalidade; 
  }

  getTipo(): string{
    return this.tipo; 
  }

  getIdCarteira(): number{
    return this.id_carteira;
  }
}
