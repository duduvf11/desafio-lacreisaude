import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <main>

    <section className="container max-w-screen mx-auto px-6 py-12 bg-linear-to-r from-[#018383] to-[#014687]">
      <div className="text-center mb-8">
        <h2 className="text-2xl text-emerald-30 font-bold">Conheça o jeito Lacrei Saúde de cuidar</h2>
        <p className="text-gray-10 mt-2">Atendimento de qualidade e inclusivo</p>
      </div>

      <div className="m-auto max-w-2/3 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Inclusão"
          description="Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+."
        />
        <FeatureCard
          title="Acolhimento"
          description="As pessoas profissionais da saúde entendem as necessidades da comunidade LGBTQIAPN+."
        />
        <FeatureCard
          title="Segurança"
          description="Protegemos seus dados e validamos pacientes e profissionais da saúde."
        />
      </div>
    </section>
    </main>
  );
}
