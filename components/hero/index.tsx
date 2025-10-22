import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image src="/bg-home.jpg" alt="Lacrei" width={900} height={400} className="" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-gray-10 rounded-lg p-8 shadow-md border">
            <h2 className="text-headline-lg font-bold mb-4">O que é a Lacrei Saúde?</h2>
            <p className="text-text-base text-gray-700 mb-6">
              O nosso papel é construir a conexão entre as pessoas da comunidade LGBTQIAPN+ que precisam
              de atendimento clínico com profissionais da saúde. Tudo isso com segurança, inclusão e representatividade.
            </p>
            <Link href="/sobre" className="inline-block bg-gray-10 border-2 border-emerald-60 text-emerald-60 px-6 py-2 rounded-md font-semibold hover:bg-emerald-60 hover:text-gray-10 transition">
              Conhecer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
