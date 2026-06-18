import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
        type: 'module'
      },
      srcDir: 'src',
      filename: 'sw.js',
      strategies: 'injectManifest',
      manifest: {
        name: 'React',
        short_name: 'vite',
        description: 'Sample React App',
        theme_color: '#7F00FF',
        background_color: '#7F00FF',
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
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  }
})
