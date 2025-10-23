import { render, screen } from '@testing-library/react';
import { Header } from '@/components/header/index'; // ajusta o caminho se necessário

describe('Header', () => {
  it('renderiza o título Lacrei Saúde', () => {
    render(<Header />);
    expect(screen.getByText(/Lacrei Saúde/i)).toBeInTheDocument();
  });

  it('tem links para Sobre e Contato', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Sobre/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contato/i })).toBeInTheDocument();
  });
});
