const nextConfig = {
  experimental:{
    serverActions:true, 
  },
  reactStrictMode: true,

  async redirects() {
    return [];
  },
  env:{
    POSTGRES_URL: process.env.POSTGRES_URL
  }
};

export default nextConfig;
module.exports = nextConfig
