import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api' :'playtube-mern-app-ivory.vercel.app'
    },
  },
  plugins: [react()]
  
})
