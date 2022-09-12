/** @type {import('next').NextConfig} */
const nextConfig = {
  future: { webpack: true },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
