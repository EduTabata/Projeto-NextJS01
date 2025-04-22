const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/app/Home.tsx',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

