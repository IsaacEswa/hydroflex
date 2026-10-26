import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit({
      // Move your svelte.config.js options here, for example:
      kit: {
        adapter: adapter(),
        // ...other kit options
      }
    })
  ]
});