import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '@/components/contact/ContactForm';

describe('ContactForm', () => {
  it('permite preencher e enviar o formulário (simulado)', async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    const nome = screen.getByLabelText(/Nome/i);
    const email = screen.getByLabelText(/E-mail/i);
    const mensagem = screen.getByLabelText(/Mensagem/i);
    const submit = screen.getByRole('button', { name: /Enviar/i });

    await user.type(nome, 'Eduardo');
    await user.type(email, 'edu@example.com');
    await user.type(mensagem, 'Olá!');

    await user.click(submit);

    // Seu componente limpa os campos após submit — validar esse comportamento
    expect(nome).toHaveValue('');
    expect(email).toHaveValue('');
    expect(mensagem).toHaveValue('');
  });
});
