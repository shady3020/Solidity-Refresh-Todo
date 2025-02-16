import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5173-shady3020-solidityrefre-s4u38jzr8w7.ws-eu117.gitpod.io'],
  },
});
