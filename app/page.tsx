import Hero from '@/components/hero';
import Features from '@/components/features';

export default function HomePage() {
  return (
    <main id="conteudo" className="min-h-screen bg-cover bg-center text-emerald-40" role="main">
      <Hero />
      <Features />
    </main>
  );
}