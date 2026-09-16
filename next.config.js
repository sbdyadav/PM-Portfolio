/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/case-studies/meesho", destination: "/work/meesho-reseller-teardown", permanent: true },
      { source: "/writing", destination: "/blog", permanent: true },
      { source: "/work", destination: "/#work", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
};

module.exports = nextConfig;
