"use client";

import "./carteiras.css";
import { useState } from "react";

type Carteira = {
  nome: string;
};

export default function Carteiras() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nomeCarteira, setNomeCarteira] = useState("");
  const [carteiras, setCarteiras] = useState<Carteira[]>([]);
  const [editandoIndex, setEditandoIndex] = useState<number | null>(null);
  const [nomeEditando, setNomeEditando] = useState("");

  function abrirModal() {
    setMostrarModal(true);
  }

  function fecharModal() {
    setMostrarModal(false);
    setNomeCarteira("");
  }

  function criarCarteira(e: React.FormEvent) {
    e.preventDefault();
    if (!nomeCarteira.trim()) return;

    setCarteiras((prev) => [...prev, { nome: nomeCarteira }]);
    fecharModal();
  }

  function excluirCarteira(index: number) {
    setCarteiras((prev) => prev.filter((_, i) => i !== index));
  }

  function iniciarEdicao(index: number, nomeAtual: string) {
    setEditandoIndex(index);
    setNomeEditando(nomeAtual);
  }

  function salvarEdicao(index: number) {
    if (!nomeEditando.trim()) return;
    setCarteiras((prev) =>
      prev.map((c, i) => (i === index ? { ...c, nome: nomeEditando } : c))
    );
    setEditandoIndex(null);
  }

  function cancelarEdicao() {
    setEditandoIndex(null);
    setNomeEditando("");
  }

  return (
    <div className="wallet-app-wallets-container">
      {/* Cabeçalho */}
      <div className="wallet-app-wallets-header">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
          <path d="M336-120q-91 0-153.5-62.5T120-336q0-38 13-74t37-65l142-171-97-194h530l-97 194 142 171q24 29 37 65t13 74q0 91-63 153.5T624-120H336Zm144-200q-33 0-56.5-23.5T400-400q0-33 23.5-56.5T480-480q33 0 56.5 23.5T560-400q0 33-23.5 56.5T480-320Zm-95-360h190l40-80H345l40 80Zm-49 480h288q57 0 96.5-39.5T760-336q0-24-8.5-46.5T728-423L581-600H380L232-424q-15 18-23.5 41t-8.5 47q0 57 39.5 96.5T336-200Z" />
        </svg>
        <span>Carteiras</span>
      </div>

      {/* Botões */}
      <div className="wallet-app-wallets-actions">
        <button className="wallet-app-sort-button">Ordenar</button>
        <button className="wallet-app-create-button" onClick={abrirModal}>
          Criar nova carteira
        </button>
      </div>

      {/* Lista de carteiras */}
      {carteiras.map((carteira, index) => (
        <div className="wallet-app-wallet-card" key={index}>
          {editandoIndex === index ? (
            <input
              className="wallet-app-wallet-edit-input"
              value={nomeEditando}
              onChange={(e) => setNomeEditando(e.target.value)}
              onBlur={() => salvarEdicao(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  salvarEdicao(index);
                } else if (e.key === "Escape") {
                  cancelarEdicao();
                }
              }}
              autoFocus
            />
          ) : (
            <span
              className="wallet-app-wallet-name"
              onClick={() => iniciarEdicao(index, carteira.nome)}
              style={{ cursor: "pointer" }}
              title="Clique para editar"
            >
              {carteira.nome}
            </span>
          )}

          <div className="wallet-app-wallet-details">
            <span className="wallet-app-wallet-balance wallet-app-positive-balance">
              Saldo: R$ 0,00
            </span>
            <div className="wallet-app-wallet-actions">
              <button title="Editar" className="wallet-app-edit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#48752C"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
              </button>
              <button
                title="Excluir"
                className="wallet-app-delete-btn"
                onClick={() => excluirCarteira(index)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal de criação */}
      {mostrarModal && (
        <div className="wallet-app-modal-overlay">
          <div className="wallet-app-modal">
            <h3>Criar Nova Carteira</h3>
            <form onSubmit={criarCarteira}>
              <label>
                Nome:
                <input
                  type="text"
                  value={nomeCarteira}
                  onChange={(e) => setNomeCarteira(e.target.value)}
                  required
                />
              </label>
              <div className="wallet-app-modal-buttons">
                <button type="submit">Criar</button>
                <button type="button" onClick={fecharModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

