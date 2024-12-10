import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    fs: {
      // Allow serving files from outside the project root
      strict: false,
      allow: ['C:/Users/syedh/OneDrive/D_Drive/Cursor Projects/BSPurnima/src']
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});