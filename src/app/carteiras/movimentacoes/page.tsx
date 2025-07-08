import "../carteiras.css";

export default function Movimentacoes() {
  return (
    <div className="transactions-container">
      {/* Header verde com ícone e título */}
      <div className="transactions-header">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
              <path d="M336-120q-91 0-153.5-62.5T120-336q0-38 13-74t37-65l142-171-97-194h530l-97 194 142 171q24 29 37 65t13 74q0 91-63 153.5T624-120H336Zm144-200q-33 0-56.5-23.5T400-400q0-33 23.5-56.5T480-480q33 0 56.5 23.5T560-400q0 33-23.5 56.5T480-320Zm-95-360h190l40-80H345l40 80Zm-49 480h288q57 0 96.5-39.5T760-336q0-24-8.5-46.5T728-423L581-600H380L232-424q-15 18-23.5 41t-8.5 47q0 57 39.5 96.5T336-200Z" />
            </svg>
        <span>Carteiras</span>
      </div>

      <div className="transactions-name">
        <span>Nome da Carteira Atual</span>
      </div>

      {/* Ações: ordenar, saldo total e registrar */}
      <div className="transactions-actions">
        <button className="action-button">Ordenar</button>
        <div className="total-balance">R$ 153,21</div>
        <button className="action-button register-button">Registrar Transação</button>
      </div>

      {/* Card 1 */}
      <div className="transaction-card">
        <div className="transaction-top">
          <span className="transaction-title">Nome da transação aqui</span>
          <button className="delete-button" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
          </button>
        </div>
        <div className="transaction-bottom">
          <span className="transaction-deadline">Prazo: 14/08/2025</span>
          <span className="transaction-balance negative">Saldo: R$ -24,63</span>
        </div>
      </div>

      {/* Card 3 vazio */}
      <div className="transaction-card">
        <div className="transaction-top">
          <span className="transaction-title"></span>
          <button className="delete-button" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
