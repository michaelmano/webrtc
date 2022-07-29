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
});
