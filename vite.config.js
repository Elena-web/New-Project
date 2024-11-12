import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: './public',
    emptyOutDir: false,
  },
  plugins: [react()],

  server: {
    proxy: {
      '/posts.json': 'http://localhost:3000',
    },
  },
});
