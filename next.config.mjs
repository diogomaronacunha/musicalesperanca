/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.facebook.com' },
      { protocol: 'https', hostname: '*.fbcdn.net' },
    ],
  },
}

export default nextConfig
