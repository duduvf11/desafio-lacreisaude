import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: {
    default: "Lacrei Saúde",
    template: "%s | Lacrei Saúde",
  },
  description: "Plataforma com foco em atendimento de saúde inclusivo e seguro para a comunidade LGBTQIAPN+.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="pt-BR">
      <body className={`antialiased` }>
        {/* Skip link para acessibilidade */}
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-emerald-60 text-white px-3 py-2 rounded">
          Pular para o conteúdo
        </a>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
