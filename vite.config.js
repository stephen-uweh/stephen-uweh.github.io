import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./stephen-uweh.github.io/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  }
})
