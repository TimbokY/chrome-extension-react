import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'extension',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/[name].js',
        entryFileNames: 'static/[name].js',
        assetFileNames: 'static/[name].[ext]',
      },
    }
  }
})
