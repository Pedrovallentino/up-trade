export class Carteira {
    constructor(
    private id_carteira: number,
    private nome: string,
    private dataCriacao: Date,
    private valorAtual: number, 
    private id_usuario: number
  ) {}

  renomear(novoNome: string): void {
    if (!novoNome || novoNome.trim().length === 0) {
      throw new Error("Nome inválido para a carteira.");
    }
    this.nome = novoNome.trim();
  }

  aplicarCapital(valor: number): void {
    if (valor <= 0) {
      throw new Error("O valor a ser aplicado deve ser positivo.");
    }
    this.valorAtual += valor;
  }

  retirarCapital(valor: number): void {
    if (valor <= 0) {
      throw new Error("O valor a ser retirado deve ser positivo.");
    }
    if (valor > this.valorAtual) {
      throw new Error("Saldo insuficiente.");
    }
    this.valorAtual -= valor;
  }

  // Getters

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
