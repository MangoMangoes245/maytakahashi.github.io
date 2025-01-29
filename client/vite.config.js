import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/proxy': {
        target: 'https://maytakahashi-github-io-server-f2tl0f6s4.vercel.app', // Replace with your backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy/, '')
      },
      '/send_email': {
        target: 'https://maytakahashi-github-io-server-2lhef7esx.vercel.app', // Replace with your backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/send_email/, '/send_email')
      }
    }
  }
});
