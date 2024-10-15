import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from "@vitejs/plugin-react"

export default defineConfig(() => {
  return {
    base: '/arepero-mayor/',
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        workbox: { globPatterns: ['**/*.{js,css,html,ico,png,svg}'] },
        manifest: {
          protocol_handlers: [{ protocol: 'mailto', url: '/newEmail?to=%s' }],
          display_override: ['window-controls-overlay'],
          name: 'El Arepero Mayor',
          short_name: 'AM Coffee',
          start_url: './',
          display: 'standalone',
          description: 'Esta es una Progressive Web App (PWA).',
          lang: 'ES',
          dir: 'auto',
          theme_color: '#c7c7c7',
          background_color: '#fff',
          orientation: 'any',
          id: 'bs2024',
          iarc_rating_id: 'e58c174a-81d2-5c3c-32cc-34b8de4a52e9',
          categories: ['business', 'productivity'],
          icons: [
            {
              src: 'https://i.imgur.com/doOlD07.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'https://i.imgur.com/doOlD07.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable',
            },
            {
              src: 'https://i.imgur.com/65ljLzo.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'https://i.imgur.com/65ljLzo.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],

          scope: '/',
          screenshots: [
            {
              src: 'https://i.imgur.com/V5kpUnI.png',
              sizes: '1920x1080',
              type: 'image/png',
              description: 'Home Screen',
            },
          ],
          shortcuts: [
            {
              name: 'Home',
              url: '/',
              icons: [
                {
                  src: 'https://i.imgur.com/doOlD07.png',
                  sizes: '96x96',
                  type: 'image/png',
                  purpose: 'any',
                },
              ],
            },
          ],
          related_applications: [
            {
              platform: 'windows',
              url: 'https://rcristianh.github.io/myBlog/',
              id: 'blog.personalMB',
            },
            {
              platform: 'windows',
              url: 'https://rcristianh.github.io/api-rest-moviedb/',
            },
          ],
          version: '2.0.3',
        },
      }),
    ],
  };
});
