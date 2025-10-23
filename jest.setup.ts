// jest.setup.ts
import '@testing-library/jest-dom'
import React from 'react'

// Mock global para next/image - devolve img simples para testes
jest.mock('next/image', () => ({
  __esModule: true,
  default: function Image(
    props: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }
  ) {
    const { src, alt, className } = props;
    return React.createElement('img', { src, alt, className })
  }
}))

