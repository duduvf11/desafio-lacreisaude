import { render, screen } from '@testing-library/react'
import React from 'react'
import { Footer } from '@/components/footer'

describe('Footer', () => {
  it('renderiza o footer como landmark e título do desafio', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(screen.getByText(/Feito para o desafio do Lacrei Saúde\./i)).toBeInTheDocument()
  })

  it('contém links de redes sociais com nomes acessíveis e hrefs corretos', () => {
    render(<Footer />)

    const facebook = screen.getByRole('link', { name: /facebook/i })
    const instagram = screen.getByRole('link', { name: /instagram/i })
    const linkedin = screen.getByRole('link', { name: /linkedin/i })

    expect(facebook).toHaveAttribute('href', 'https://www.facebook.com/lacrei.saude/')
    expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/lacrei.saude')
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/company/lacrei/')
  })

  it('exibe aviso de direitos autorais', () => {
    render(<Footer />)
    expect(screen.getByText(/copyright/i)).toBeInTheDocument()
  })
})
