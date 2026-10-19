/**
 * Nashiuso Terminal Portfolio
 * Author: Nashiuso
 * GitHub: https://github.com/nashiuso
 * License: MIT
 */
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2022',
    sourcemap: false,
    minify: 'oxc',
  },
  server: {
    open: true,
  },
});
