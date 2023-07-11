import type { Config } from 'jest'

const configuration: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  verbose: true,
  collectCoverageFrom: ['**/*.(t|j)s'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/.stryker-tmp/',
    '.js',
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@modules/app(.*)$': '<rootDir>/src/modules/app/$1',
    '^@modules/auth(.*)$': '<rootDir>/src/modules/auth/$1',
    '^@modules/users(.*)$': '<rootDir>/src/modules/users/$1',
    '^@modules/messages(.*)$': '<rootDir>/src/modules/messages/$1',
    '^@modules/embeddings(.*)$': '<rootDir>/src/modules/embeddings/$1',
    '^@modules/openai(.*)$': '<rootDir>/src/modules/openai/$1',
    '^@modules/sessions(.*)$': '<rootDir>/src/modules/sessions/$1',
    '^@common/filters(.*)$': '<rootDir>/src/common/filters/$1',
    '^@common/enums(.*)$': '<rootDir>/src/common/enums/$1',
    '^@common/constants(.*)$': '<rootDir>/src/common/constants/$1',
    '^@common/decorators(.*)$': '<rootDir>/src/common/decorators/$1',
    '^@common/api-messages(.*)$': '<rootDir>/src/common/api-messages',
  },
  coveragePathIgnorePatterns: [
    '.*\\.(interface|module|schema|entity|dto|enum|d).ts',
    '.*\\.e2e-spec.ts',
    'index.ts',
    'main.ts',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
}

export default configuration
