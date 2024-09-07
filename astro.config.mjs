import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(),
		AstroPWA({
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
      registerType: 'autoUpdate',
      pwaAssets: {
        image: 'public/favicon.svg',
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: '/404',
      },
      manifest: {
        name: "blog",
        description: "blog description",
        theme_color: '#18181B',
        background_color: '#fff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
      },
    }),
		],
});
