import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import string  from 'vite-plugin-string'

export default defineConfig({
  plugins: [vue(),
    string({
      include: ['**/*.svg']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/scss/_app.scss" as *;'
      }
    }
  }
})
