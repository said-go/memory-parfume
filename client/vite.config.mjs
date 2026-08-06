import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/memory-parfume/',
  plugins: [react()],
});
