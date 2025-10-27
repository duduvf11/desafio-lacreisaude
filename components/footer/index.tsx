import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t border-emerald-20 bg-gray-10">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 py-8 flex flex-col items-center gap-4">
                <h2 className="text-headline-base font-bold text-emerald-60 text-center">Feito para o desafio do Lacrei Saúde.</h2>
                <div className="flex flex-wrap gap-3">
                    <a href="https://www.facebook.com/lacrei.saude/" className="inline-flex items-center justify-center w-11 h-11 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-60" aria-label="Facebook">
                        <Image src="/logo-facebook.svg" width={24} height={24} sizes="44px" alt="Logo Facebook" />
                    </a>
                    <a href="https://www.instagram.com/lacrei.saude" className="inline-flex items-center justify-center w-11 h-11 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-60" aria-label="Instagram">
                        <Image src="/logo-instagram.svg" width={24} height={24} sizes="44px" alt="Logo Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/lacrei/" className="inline-flex items-center justify-center w-11 h-11 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-60" aria-label="LinkedIn">
                        <Image src="/logo-linkedin.svg" width={24} height={24} sizes="44px" alt="Logo LinkedIn" />
                    </a>
                </div>
                <p className="text-center">Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65</p>
            </div>
        </footer>
    );
}