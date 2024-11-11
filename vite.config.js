import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    assetsInlineLimit: 4096, // Images smaller than 4 kB are inlined as base64
  
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          // Split out certain modules into separate chunks
          if (id.includes('react')) return 'vendor-react';
          if (id.includes('lodash')) return 'vendor-lodash';
        }
      },
    },
  },

  chunkSizeWarningLimit: 1300,
},
})
