import "./globals.css";

export default function PaginaInicial() {
  return (
    <div className="pagina-inicial">
      <div className="painel">
        <button className="btn btn-carteiras">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
            <path d="M21 7H3V5a2 2 0 012-2h14a2 2 0 012 2v2zM3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          </svg>
          <span>Carteiras</span>
        </button>

        <button className="btn btn-metas">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 2a8 8 0 110 16A8 8 0 0112 4zm0 2a6 6 0 00-1 11.91V13h-2v-2h2V9a3 3 0 013-3h1v2h-1a1 1 0 00-1 1v2h2v2h-2v2.91A6 6 0 0012 6z" />
          </svg>
          <span>Metas</span>
        </button>

        <button className="btn btn-caixinhas">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
            <path d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16l-6-3-6 3V4z" />
          </svg>
          <span>Caixinhas de<br />Poupança</span>
        </button>
      </div>
    </div>
  );
}

/*
Este arquivo deverá ser implmentado como a página inicial do sistema. Tudo que foi dentro da div
escrito é apenas um exemplo e deve ser alterado por quem for implementar. 

Esse comentário também deverá ser removido deste arquivo por quem começar a implementá-lo. 
*/