import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

