'use client';
import Link from "next/link";
import Image from 'next/image'
import { Button } from "../Button.style";

export function Header() {
    return (
        <header className="flex justify-between items-center bg-gray-10 p-2">
            <div className="flex items-center justify-between ml-8 gap-2">
            <Link className="" href="/"><Image src="/logo.png" width={50} height={20} alt="Logo Lacrei Saúde" /></Link>
            <h1 className="text-headline-base font-bold text-emerald-60">Lacrei Saúde</h1>
            </div>
            <nav className="space-x-4 font-bold text-emerald-60 mr-8">
                <Link className="" href="/sobre"><Button>Sobre</Button></Link>
                <Link className="" href="/contatos"><Button>Contato</Button></Link>
            </nav>
        </header>
    );
}