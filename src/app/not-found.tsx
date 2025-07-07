import "./globals.css";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="notfound-container">
            <h1 className="notfound-title">404 - Página não encontrada</h1>
            <p className="notfound-message">
                A página que você está tentando acessar não existe ou foi movida.
            </p>
            <Link href="/" className="notfound-link">
                Voltar para a tela inicial
            </Link>
        </div>
    );
}
