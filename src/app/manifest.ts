import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Musical Esperança',
    short_name: 'M. Esperança',
    description: 'Banda para bailes e festas no Sul do Brasil',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
