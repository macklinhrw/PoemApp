/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home.html",
      },
    ];
  },
};

module.exports = nextConfig;
