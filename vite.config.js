import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['*/.glb'],
  server: {
    https: {
      key: fs.readFileSync('/home/nitpicks/.acme.sh/riskedgesolutions.com/riskedgesolutions.com.key'),
      cert: fs.readFileSync('/home/nitpicks/.acme.sh/riskedgesolutions.com/fullchain.cer')
    },
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 2000, // Sets limit to 2000 kB
  },
});
