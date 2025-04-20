import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // For root domain deployment
  build: {
    outDir: '../dist', // Builds directly into frontend/dist
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html' // Explicit entry point
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
