import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/*': {
        target: 'https://jsonplaceholder.typicode.com/todos', // 分页: https://jsonplaceholder.typicode.com/todos?_page=2&_limit=30
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
