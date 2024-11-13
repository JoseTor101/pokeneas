import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': process.env.VITE_BACKEND_URL || 'http://localhost:3001',
    },
  },
});
