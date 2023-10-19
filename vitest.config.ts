import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    root: './',
    include: ['**/*.{spec,e2e-spec}.?(c|m)[jt]s?(x)'],
    coverage: {
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        '**/*.spec.ts',
        '**/*.e2e-spec.ts',
        '**/*.d.ts',
        '**/*.entity.ts',
        '**/*.interface.ts',
        '**/*.module.ts',
        '**/*.schema.ts',
        '**/*.dto.ts',
        '**/*.enum.ts',
        'index.ts',
        'main.ts',
      ],
      all: true,
    },
  },
  resolve: {
    alias: {
      '~': './src',
      '@modules': './src/modules',
      '@common': './src/common',
      '@config': './src/config',
    },
  },
  plugins: [
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})
