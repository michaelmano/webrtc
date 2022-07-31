import { defineConfig } from 'vite';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

const vitestConfig: VitestUserConfigInterface = {
    test: {
        globals: true,
    },
};

export default defineConfig({
    test: vitestConfig.test,
    plugins: [vue()],
    base: '/dist/',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
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
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: 'css/[name].[ext]',
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
