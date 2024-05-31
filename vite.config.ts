import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/antv-vue',
  publicDir: 'public',
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      "@": '/src'
    }
  }
})
