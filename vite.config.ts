import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html'
      },
      srcDir: 'src',
      filename: 'sw.js',
      strategies: 'injectManifest',
      manifest: {
        name: 'Vazhi',
        short_name: 'Vazhi',
        description: 'Building nature',
        display: 'standalone',
        start_url: '/login',
        scope: '/',
        icons: [
          {
            src: '192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        launch_handler: {
          client_mode: ['focus-existing', 'navigate-existing']
        }
      }
    })
  ],
  server: {
    port: 3001
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  }
})
