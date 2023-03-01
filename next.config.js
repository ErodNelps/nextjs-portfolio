/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ['en-US', 'vi-VN'],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
