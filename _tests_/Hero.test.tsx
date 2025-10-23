import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/hero/index';

describe('Hero', () => {
  it('renderiza título e botão conhecer', () => {
    render(<Hero />);
    // botão pode ser link ou button; procuramos por texto
    expect(screen.getByText(/O que é a Lacrei Saúde\?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Conhecer/i }) || screen.getByRole('button', { name: /Conhecer/i })).toBeTruthy();
  });
});
