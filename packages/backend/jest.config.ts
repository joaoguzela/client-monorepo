import type { Config } from 'jest';

const config: Config = {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  modulePaths: ['<rootdir>/src'],
  testMatch: ['**/test/*.spec.ts'],
  testEnvironment: 'node',
  collectCoverageFrom: ['./src/modules/client/service/*'],
  coverageReporters: ['text-summary', 'lcov'],
  collectCoverage: true,
  clearMocks: true,
};

export default config;
