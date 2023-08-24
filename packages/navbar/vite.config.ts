import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  cacheDir: '../../node_modules/.vite',

  plugins: [react(), tsconfigPaths()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
