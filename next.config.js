/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    loader: "custom",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
