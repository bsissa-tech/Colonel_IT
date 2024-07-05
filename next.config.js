/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    APP_ACCESS_KEY_ID: process.env.APP_ACCESS_KEY_ID,
    APP_ACCESS_KEY: process.env.APP_ACCESS_KEY,
    APP_REGION: process.env.APP_REGION,
  },
};

module.exports = nextConfig;