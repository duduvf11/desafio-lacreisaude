import Image from 'next/image';
import InfoCard from '@/components/info/InfoCard';

export const metadata = {
  title: 'Sobre',
};

export default function SobrePage() {
  return (
    <main id="conteudo" className="bg-gray-10" role="main" aria-labelledby="titulo-sobre">
      <div className="container mx-auto px-6 py-12">
        <h1 id="titulo-sobre" className="sr-only">Sobre a Lacrei Saúde</h1>
        {/* Intro: texto à esquerda e imagem à direita */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-headline-lg font-bold mb-4">Atendimento qualificado, seguro e inclusivo</h1>
            <div className="w-24 h-1 bg-emerald-60 mb-6" />
            <p className="text-gray-70 mb-4">
              Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.
            </p>
            <p className="text-gray-70 mb-4">
              Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência
              no acesso a profissionais da saúde para as pessoas LGBTQIAPN+.
            </p>
            <p className="text-gray-70">
              Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentos.
            </p>
          </div>

          <div className="flex justify-center">
            <div className=" w-1/3 rounded-xl overflow-hidden shadow-lg">
              <Image src="/sobre-right-1.jpg" alt="Sobre imagem" width={400} height={400} className="object-cover w-full h-full" />
            </div>
          </div>
        </section>

        {/* Missão, visão e valores */}
        <section className="text-center mb-12 bg-[url('/sobre-right-2.jpg')] bg-cover bg-center py-20 rounded-xl shadow-md">
          <h2 className="text-headline-base font-bold">Missão, visão e valores da Lacrei Saúde</h2>
          <p className="text-gray-80 text-text-xl mt-2 mb-8">O que nos motiva</p>

          <div className="flex justify-center min-h-40 items-start">
              <div className=" space-y-4">
                <InfoCard title="Missão" text="Proporcionar a inclusão da comunidade ao atendimento clínico." />
                <InfoCard title="Visão" text="Ser a plataforma de serviços de saúde da comunidade LGBTQIAPN+ no Brasil." />
                <InfoCard title="Valores" text="Representatividade, segurança e acessibilidade da comunidade LGBTQIAPN+." />
            </div>
          </div>
        </section>

        {/* Nosso propósito */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">

          <div className="flex justify-center">
            <div className="w-auto h-auto rounded-md overflow-hidden shadow-md">
              <Image src="/sobre-main.jpg" alt="Propósito" width={400} height={300} className="object-cover w-full h-full" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Nosso propósito</h3>
            <p className="text-gray-700 mb-4">
              A Lacrei Saúde facilita a conexão entre pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico a
              profissionais da saúde.
            </p>
            <p className="text-gray-700">
              Buscamos proporcionar um atendimento de qualidade, sustentado pelos pilares da inclusão, representatividade e segurança.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}