/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'INFOCUS Technologies',
    description: 'The official INFOCUS Servers.',
    icon: 'https://infocus-groups.github.io/kasm-registry/1.0/blue-logo.png',
    listUrl: 'https://infocus-groups.github.io/kasm-registry/1.0/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
