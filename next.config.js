/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/case-studies/meesho",
        destination: "/work/meesho-reseller-teardown",
        permanent: true,
      },
      { source: "/writing", destination: "/blog", permanent: true },
    ];
  },
};

module.exports = nextConfig;
