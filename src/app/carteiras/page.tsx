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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="..." />
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
                ✏️
              </button>
              <button
                title="Excluir"
                className="wallet-app-delete-btn"
                onClick={() => excluirCarteira(index)}
              >
                🗑️
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





/*
Esse arquivo deverá ser usado para estrutura as páginas do sistema a que eles se referem, de acordo 
com o que foi definido nos protótipos. Tudo que foi escrito dentro da div principal é apenas um exemplo e 
deve ser alterado.

Esse comentário também deverá ser removido deste arquivo por quem começar a implementá-lo. 
*/