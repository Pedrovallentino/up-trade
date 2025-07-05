import "./carteiras.css"

export default function Carteiras() {
  return (
    <div className="wallet-app-wallets-container">
      {/* Cabeçalho da seção */}
      <div className="wallet-app-wallets-header">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M336-120q-91 0-153.5-62.5T120-336q0-38 13-74t37-65l142-171-97-194h530l-97 194 142 171q24 29 37 65t13 74q0 91-63 153.5T624-120H336Zm144-200q-33 0-56.5-23.5T400-400q0-33 23.5-56.5T480-480q33 0 56.5 23.5T560-400q0 33-23.5 56.5T480-320Zm-95-360h190l40-80H345l40 80Zm-49 480h288q57 0 96.5-39.5T760-336q0-24-8.5-46.5T728-423L581-600H380L232-424q-15 18-23.5 41t-8.5 47q0 57 39.5 96.5T336-200Z"/></svg>
        <span>Carteiras</span>
      </div>

      {/* Botões de ação */}
      <div className="wallet-app-wallets-actions">
        <button className="wallet-app-sort-button">Ordenar</button>
        <button className="wallet-app-create-button">Criar nova carteira</button>
      </div>

      {/* Cartões de carteira */}
      <div className="wallet-app-wallet-card">
        <span className="wallet-app-wallet-name">Nova carteira</span>
        <div className="wallet-app-wallet-details">
          <span className="wallet-app-wallet-balance wallet-app-positive-balance">Saldo: R$ 177,84</span>
          <button className="wallet-app-delete-wallet" title="Excluir">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
          </button>
        </div>
      </div>

      <div className="wallet-app-wallet-card">
        <span className="wallet-app-wallet-name"></span>
        <div className="wallet-app-wallet-details">
          <span className="wallet-app-wallet-balance wallet-app-negative-balance">Saldo: R$ -24,63</span>
        </div>
      </div>

      <div className="wallet-app-wallet-card">
        <span className="wallet-app-wallet-name"></span>
        <div className="wallet-app-wallet-details"></div>
      </div>
    </div>
  );
}


/*
Esse arquivo deverá ser usado para estrutura as páginas do sistema a que eles se referem, de acordo 
com o que foi definido nos protótipos. Tudo que foi escrito dentro da div principal é apenas um exemplo e 
deve ser alterado.

Esse comentário também deverá ser removido deste arquivo por quem começar a implementá-lo. 
*/