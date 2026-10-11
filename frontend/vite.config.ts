import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      proxy: {
        '/auth': 'http://localhost:8000',
        '/students': 'http://localhost:8000',
        '/rooms': 'http://localhost:8000',
        '/allocations': 'http://localhost:8000',
        '/complaints': 'http://localhost:8000',
        '/visitors': 'http://localhost:8000',
        '/notices': 'http://localhost:8000',
        '/feedback': 'http://localhost:8000',
        '/analytics': 'http://localhost:8000'
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
