import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'public',
  build: {
    outDir: './public',
    emptyOutDir: false,
  },
  plugins: [react()],
});
