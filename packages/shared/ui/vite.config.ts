import path from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import swc from 'unplugin-swc'
import rollupTs from 'rollup-plugin-typescript2';

import { defineConfig } from 'vite'

import pkg from './package.json'

export default defineConfig({
  define: {
    "process.env": {}
  },
  optimizeDeps: {
    exclude: ['react-hook-form'],
  },
  build: {
    sourcemap: true,
    lib: {
      name: "Lib",
      entry: path.resolve(__dirname, 'index.ts'),
      fileName: 'index',
    },
    emptyOutDir: false,
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
    },
  },
  plugins: [
    dts({ staticImport: true }),
    {
      ...rollupTs({
          check: true,
          tsconfig: './tsconfig.json',
          tsconfigOverride: {
              noEmits: true,
          },
      }),
      // run before build
      enforce: 'pre',
  },
    react(),
    tsconfigPaths(),
    swc.vite(),
    swc.rollup({
      minify: true,
    }),
  ],
})