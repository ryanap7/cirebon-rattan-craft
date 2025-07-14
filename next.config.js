/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
