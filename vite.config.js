import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ── Code-splitting for better caching ──
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-carousel': ['embla-carousel-react', 'embla-carousel-autoplay'],
          'vendor-maps': ['react-simple-maps', 'd3-geo'],
        },
      },
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Inline assets < 8KB as base64 to reduce HTTP requests
    assetsInlineLimit: 8192,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Source maps off in production for smaller builds
    sourcemap: false,
  },
})
