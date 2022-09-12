/** @type {import('next').NextConfig} */
const nextConfig = {
  future: { webpack: true },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
