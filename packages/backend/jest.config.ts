import type { Config } from 'jest';

const config: Config = {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testMatch: ['**/test/*.spec.ts'],
  testEnvironment: 'node',
  collectCoverageFrom: ['./src/client/service/*'],
  coverageReporters: ['text-summary', 'lcov'],
  collectCoverage: true,
  clearMocks: true,
};

export default config;
