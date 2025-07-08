export class GerardorId {
  public static gerarId(): number {
    return Math.floor(1000 + Math.random() * 9999000);
  }
}
