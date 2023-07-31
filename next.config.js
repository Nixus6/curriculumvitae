/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    reactStrictMode: true,
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
