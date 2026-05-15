import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,mp3,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 30 * 1024 * 1024,
        skipWaiting: true,
        clientsClaim: true,
      },
      manifest: {
        name: 'Mot à Mot',
        short_name: 'མོཊ་ཨ་མོཊ',
        description: 'Textes bouddhistes tibétains avec découpage mot à mot',
        theme_color: '#1a1a1a',
        background_color: '#0a0a0a',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
})
