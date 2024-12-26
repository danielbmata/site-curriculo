/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
  output: 'standalone',
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
