import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin()
  ],
  base: './',
  build: {
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // บังคับรวมไฟล์ JS และ Dynamic Imports ทั้งหมดเข้าไว้ในไฟล์เดียว
        inlineDynamicImports: true,
        // สุ่ม Hash ต่อท้ายชื่อไฟล์เหมือนเดิม (เช่น index-D5WeNLll.js)
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
