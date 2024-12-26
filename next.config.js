/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
  output: 'export',
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
