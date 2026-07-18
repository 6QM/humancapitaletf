/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/zh',
        permanent: false,
      },
      {
        source: '/framework',
        destination: '/zh/framework',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/zh/about',
        permanent: true,
      },
      {
        source: '/programs',
        destination: '/zh/programs',
        permanent: true,
      },
      {
        source: '/notes/:path*',
        destination: '/zh/programs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

