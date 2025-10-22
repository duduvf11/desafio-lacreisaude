import Link from "next/link";

export default function ContatosPage() {
    return (
      <main className="bg-gray-10">
      <h1>Contato</h1>
      <p>Entre em contato com a Lacrei Saúde.</p>

      <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>

      <Link href="/">Voltar para a Home</Link>
      </main>
    );
  }