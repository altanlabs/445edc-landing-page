import { defineConfig } from 'vite';

// DO NOT CHANGE '@vitejs/plugin-react-swc' if not the previews will stop working. 

import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        rollupOptions: {
            onwarn: function (warning, warn) {
                if (warning.code === 'ESLINT_ERROR')
                    return;
                warn(warning);
            }
        }
    }
});
