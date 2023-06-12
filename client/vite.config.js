import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project_three_js_ai/", //This is the base url of the website
  plugins: [react()],
})
