/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compress: true,

  images: {
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
