import type { Config } from 'jest';

const config: Config = {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testMatch: ['*.spec.ts'],
  testEnvironment: 'node',
  projects: ['<rootDir>/packages/backend/jest.config.js'],
  coverageReporters: ['text-summary', 'lcov'],
  collectCoverage: true,
  clearMocks: true,
};

export default config;
