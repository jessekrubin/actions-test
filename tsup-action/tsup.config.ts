import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  tsconfig: './tsconfig.json',
});

