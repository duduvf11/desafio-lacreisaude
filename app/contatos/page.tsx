import Image from 'next/image';
import ContactForm from '@/components/contact/ContactForm';

export default function ContatosPage() {
  return (
    <main className="min-h-screen bg-gray-10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <ContactForm />
          </div>

          <div className="w-full">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image src="/bg-contatos.jpg" alt="Contato" width={900} height={900} className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}