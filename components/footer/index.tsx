import Image from "next/image";

export function Footer() {
    return (
        <footer className="ml-24 mr-24 mt-30 border-t border-emerald-20">
            <div className="flex flex-col flex-wrap w-full items-center justify-start p-8 gap-4">
                <h2 className="text-headline-base font-bold text-emerald-60">Feito para o desafio do Lacrei Saúde.</h2>
                <div className="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/lacrei.saude/" className="text-emerald-60 underline"><Image src="/logo-facebook.svg" width={50} height={20} alt="Logo Facebook" /></a>
                <a href="https://www.instagram.com/lacrei.saude" className="text-emerald-60 underline"><Image src="/logo-instagram.svg" width={50} height={20} alt="Logo Instagram" /></a>
                <a href="https://www.linkedin.com/company/lacrei/" className="text-emerald-60 underline"><Image src="/logo-linkedin.svg" width={50} height={20} alt="Logo LinkedIn" /></a>
                </div>
                <h1>Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65</h1>
            </div>
        </footer>
    );
}