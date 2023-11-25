// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define:{
//     'process.env.BASE_URL':JSON.stringify(process.env.BASE_URL)
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
  },
});
