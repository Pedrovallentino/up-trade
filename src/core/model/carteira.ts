import Backend from "@/backend";

export class Carteira {
  constructor(
    private id_carteira: number,
    private nome: string,
    private dataCriacao: Date,
    private valorAtual: number,
    private id_usuario: number
  ) {}

  creditar(valor: number): void {
    if (valor <= 0) throw new Error("Valor inválido para crédito.");
    this.valorAtual += valor;
  }

  debitar(valor: number): void {
    if (valor <= 0) throw new Error("Valor inválido para débito.");
    if (valor > this.valorAtual) throw new Error("Saldo insuficiente.");
    this.valorAtual -= valor;
  }

  getId(): number {
    return this.id_carteira;
  }

   getNome(): string {
    return this.nome;
  }

  getDataCriacao(): Date {
    return this.dataCriacao; 
  }

  getValorAtual(): number {
    return this.valorAtual;
  }

  getIdUsuario(): number {
    return this.id_usuario;
  }
}
