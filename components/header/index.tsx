'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="flex flex-col md:flex-row justify-between items-center bg-gray-10 p-4 relative"
      role="banner"
      aria-label="Cabeçalho principal com logo e navegação"
    >
      {/* === LOGO E TÍTULO === */}
      <div className="flex items-center justify-between w-full md:w-auto ml-4 gap-2">
        <Link href="/" aria-label="Página inicial">
          <Image
            src="/logo.png"
            width={50}
            height={20}
            alt="Logo Lacrei Saúde"
          />
        </Link>
        <h1 className="text-headline-base font-bold text-emerald-60">
          Lacrei Saúde
        </h1>

        {/* === BOTÃO DE MENU (visível apenas no mobile) === */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-60"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <Image
            src="/Menu_icon.svg"
            width={24}
            height={24}
            alt={menuOpen ? "Fechar menu" : "Abrir menu"}
            priority
          />
        </button>
      </div>

      {/* === NAVEGAÇÃO DESKTOP === */}
      <nav
        role="navigation"
        aria-label="Menu principal"
        className="hidden md:flex items-center gap-2 pr-4"
      >
        <Link
          href="/sobre"
          className="inline-flex items-center justify-center rounded-md px-4 py-3 min-h-6 text-emerald-70 hover:bg-emerald-20 focus:outline-none focus:ring-2 focus:ring-emerald-60"
        >
          Sobre
        </Link>
        <Link
          href="/contatos"
          className="inline-flex items-center justify-center rounded-md px-4 py-3 min-h-6 text-emerald-70 hover:bg-emerald-20 focus:outline-none focus:ring-2 focus:ring-emerald-60"
        >
          Contatos
        </Link>
      </nav>

      {/* === NAVEGAÇÃO MOBILE (renderizada apenas quando aberta) === */}
      {menuOpen && (
        <nav
          role="navigation"
          aria-label="Menu principal"
          className="flex md:hidden flex-col items-stretch gap-2 w-full bg-gray-10 p-4"
        >
          <Link
            href="/sobre"
            className="inline-flex items-center justify-start rounded-md px-4 py-3 min-h-6 text-emerald-70 hover:bg-emerald-20 focus:outline-none focus:ring-2 focus:ring-emerald-60"
          >
            Sobre
          </Link>
          <Link
            href="/contatos"
            className="inline-flex items-center justify-start rounded-md px-4 py-3 min-h-6 text-emerald-70 hover:bg-emerald-20 focus:outline-none focus:ring-2 focus:ring-emerald-60"
          >
            Contatos
          </Link>
        </nav>
      )}
    </header>
  );
}
