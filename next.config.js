/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n is handled via middleware in App Router
  images: {
    domains: [],
  },
}

module.exports = nextConfig

