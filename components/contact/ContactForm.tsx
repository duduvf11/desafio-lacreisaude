"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ nome, email, mensagem });
    alert('Mensagem enviada (simulada)');
    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-10 p-8 rounded-lg shadow-xl">
      <div>
        <label htmlFor="contact-nome" className="block text-sm font-medium text-gray-70">Nome</label>
        <input id="contact-nome" value={nome} onChange={e => setNome(e.target.value)} className="mt-1 block w-full border rounded-md p-2" required />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-70">E-mail</label>
        <input id="contact-email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full border rounded-md p-2" required />
      </div>

      <div>
        <label htmlFor="contact-mensagem" className="block text-sm font-medium text-gray-70">Mensagem</label>
        <textarea id="contact-mensagem" value={mensagem} onChange={e => setMensagem(e.target.value)} className="mt-1 block w-full border rounded-md p-2 h-32" required />
      </div>

      <div>
        <button type="submit" className="bg-emerald-60 text-gray-10 px-6 py-2 rounded-md">Enviar</button>
      </div>
    </form>
  );
}
