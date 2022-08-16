import { defineConfig } from 'vite';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const vitestConfig : VitestUserConfigInterface = {
  test: {
    globals: true,
    include: ['./tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
};

export default defineConfig({
  test: vitestConfig.test,
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, '/src'),
    },
  },
  build: {
    outDir: '../wwwroot/dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: './src/main.ts',
      },
      output: {
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name][extname]';
          }

          if ((name ?? '').endsWith('.css')) {
            return 'assets/css/[name][extname]';
          }

          return 'assets/[name][extname]';
        },
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  server: {
    hmr: {
      protocol: 'ws',
    },
  },
});
