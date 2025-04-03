import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"",
  // for use localhost
  base:"/channa-maduranga-photography-web/",
  resolve: {
    alias: {
      '@fortawesome/fontawesome-free': 'node_modules/@fortawesome/fontawesome-free'
    }
  },

})
