import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  base: '/preact-build-a-wikipedia-viewer/',
  plugins: [preact()],
});
