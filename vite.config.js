import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define your aliases here
      '@src': '/src',
      '@views': '/src/views',
      '@assets': '/src/assets',
      '@img': '/src/assets/img',
      '@components': '/src/components',
      '@footers': '/src/components/Footers',
      '@navbars': '/src/components/Navbars',
      '@headers': '/src/components/Headers',
      '@data': '/src/data',
    },
  },
});
