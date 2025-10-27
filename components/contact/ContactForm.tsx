"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState<string | null>(null);
  const [mostrarAjuda, setMostrarAjuda] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ nome, email, mensagem });
    setEnviado('Mensagem enviada com sucesso (simulado).');
    setNome('');
    setEmail('');
    setMensagem('');
  }

  function limparCampos() {
    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-10 p-8 rounded-lg shadow-xl" aria-label="Formulário de contato da Lacrei Saúde">
      <div>
        <label htmlFor="contact-nome" className="block text-sm font-medium text-gray-70">Nome</label>
        <input id="contact-nome" aria-required="true" autoComplete="name" value={nome} onChange={e => setNome(e.target.value)} className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-60 transition" required />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-70">E-mail</label>
        <input id="contact-email" type="email" aria-required="true" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-60 transition" required />
      </div>

      <div>
        <label htmlFor="contact-mensagem" className="block text-sm font-medium text-gray-70">Mensagem</label>
        <textarea id="contact-mensagem" aria-required="true" value={mensagem} onChange={e => setMensagem(e.target.value)} className="mt-1 block w-full border rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-emerald-60 transition" required />
        <button type="button" aria-controls="ajuda-mensagem" aria-expanded={mostrarAjuda} onClick={() => setMostrarAjuda(v => !v)} className="mt-2 text-emerald-60 underline">
          {mostrarAjuda ? 'Ocultar ajuda' : 'Mostrar ajuda'}
        </button>
        <p id="ajuda-mensagem" hidden={!mostrarAjuda} className="text-text-sm text-gray-60 mt-1">
          Dica: descreva sua necessidade de forma objetiva e, se quiser, informe um telefone para contato.
        </p>
      </div>

      <div>
          <div className="flex gap-2">
            <button type="submit" className="bg-emerald-60 text-gray-10 px-6 py-2 rounded-md hover:bg-emerald-40 transition">Enviar</button>
            <button type="button" onClick={limparCampos} className="border border-emerald-60 text-emerald-60 px-4 py-2 rounded-md hover:bg-emerald-10 transition">Limpar</button>
          </div>
      </div>

      <output aria-live="polite" className="text-emerald-60">
        {enviado}
      </output>
    </form>
  );
}
