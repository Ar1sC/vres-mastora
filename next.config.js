/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  i18n: {
    locales: ['en', 'el'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig 