import Hero from '@/components/hero';
import Features from '@/components/features';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cover bg-center text-emerald-40">
      <Hero />
      <Features />
    </main>
  );
}