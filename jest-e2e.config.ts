import type { Config } from 'jest'

import defaultJestConfig from './jest.config'

const configuration: Config = {
  ...defaultJestConfig,
  testMatch: ['<rootDir>/test/**/*.e2e-spec.ts'],
  roots: ['<rootDir>/test'],
}

export default configuration
