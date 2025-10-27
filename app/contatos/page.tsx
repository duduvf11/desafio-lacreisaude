import Image from 'next/image';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contatos',
};

export default function ContatosPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-gray-10 py-12" role="main" aria-labelledby="titulo-contatos">
      <div className="container mx-auto px-6 md:mx-12">
        <h1 id="titulo-contatos" className="sr-only">Fale conosco</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <ContactForm />
          </div>

          <div className="w-full max-w-md mx-auto">
            <div className="relative aspect-9/12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/bg-contatos.jpg"
                alt="Contato"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}