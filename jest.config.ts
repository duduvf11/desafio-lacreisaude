// jest.config.js
import nextJest from 'next/jest'
import path from 'node:path'

const createJestConfig = nextJest({
  dir: path.resolve(__dirname) // aponta para o diretório do Next.js
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Resolve imports que usam o alias '@/'
    '^@/(.*)$': '<rootDir>/$1'
  },
  // Sem "transform": next/jest usa o SWC do Next para TS/TSX
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json']
}

export default createJestConfig(customJestConfig)
