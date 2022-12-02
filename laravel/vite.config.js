import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        vue(),
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts','resources/js/react_app.jsx',],
            refresh: true,
        }),
    ],
    server: {
        host: true
    }
});
