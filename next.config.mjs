/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig
