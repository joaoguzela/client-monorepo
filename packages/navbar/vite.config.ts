import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  cacheDir: '../../node_modules/.vite',

  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
