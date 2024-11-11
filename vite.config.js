import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    chunkSizeWarningLimit: 2000, // Sets limit to 1000 kB
  },
  server: {
    https: {
      key: '/path/to/some_folder/ssl/SSLforMyHosts-key.pem',
      cert: '/path/to/some_folder/ssl/SSLforMyHosts-certificate.pem',
    }
  },
})
