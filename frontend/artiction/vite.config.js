import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/', // Set this to './' if deploying to a subpath
  build: {
    outDir: 'dist', // Default build folder (Vercel looks for this)
  },
})
