/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compress: true,

  images: {
    domains: ["d3nu1pf5s8i6xp.cloudfront.net"],
  },
};

module.exports = nextConfig;
