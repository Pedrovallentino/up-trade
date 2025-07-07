import "./carteiras.css";

export default function Movimentacoes() {
  return (
    <div className="transactions-container">
      {/* Header verde com ícone e título */}
      <div className="transactions-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 24 24">
          <path d="M21 7H3V5a2 2 0 012-2h14a2 2 0 012 2v2zM3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
        <span>Wallets</span>
      </div>

      {/* Ações: ordenar, saldo total e registrar */}
      <div className="transactions-actions">
        <button className="action-button">Sort</button>
        <div className="total-balance">R$ 153,21</div>
        <button className="action-button register-button">Register Transaction</button>
      </div>

      {/* Card 1 */}
      <div className="transaction-card">
        <div className="transaction-top">
          <span className="transaction-title">Nome da transação aqui</span>
          <button className="delete-button" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 24 24">
              <path d="M3 6h18v2H3zm3 3h12v13H6zM8 10v9h2v-9zm4 0v9h2v-9z" />
            </svg>
          </button>
        </div>
        <div className="transaction-bottom">
          <span className="transaction-balance positive">Saldo: R$ 177,84</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="transaction-card">
        <div className="transaction-top">
          <span className="transaction-title">Nome da transação aqui</span>
          <button className="delete-button" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 24 24">
              <path d="M3 6h18v2H3zm3 3h12v13H6zM8 10v9h2v-9zm4 0v9h2v-9z" />
            </svg>
          </button>
        </div>
        <div className="transaction-bottom">
          <span className="transaction-deadline">Due: 14.08.2025</span>
          <span className="transaction-balance negative">Saldo: R$ -24,63</span>
        </div>
      </div>

      {/* Card 3 vazio */}
      <div className="transaction-card">
        <div className="transaction-top">
          <span className="transaction-title"></span>
          <button className="delete-button" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 24 24">
              <path d="M3 6h18v2H3zm3 3h12v13H6zM8 10v9h2v-9zm4 0v9h2v-9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
