import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hiplando-presentation/',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  }
})