'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../Button.style";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // controla o estado do menu mobile

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

      {/* === NAVEGAÇÃO === */}
      <nav
        role="navigation"
        aria-label="Menu principal"
        className={`
          flex flex-col md:flex-row items-center gap-4
          md:static absolute top-full left-0 w-full md:w-auto bg-gray-10 md:bg-transparent
          transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-96 p-4 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full overflow-hidden"}
        `}
      >
        <Link href="/sobre">
          <Button>Sobre</Button>
        </Link>
        <Link href="/contatos">
          <Button>Contato</Button>
        </Link>
      </nav>
    </header>
  );
}
