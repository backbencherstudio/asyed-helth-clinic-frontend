import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Add domain configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
  // Add redirects to ensure www and non-www consistency
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '109.221.167.72.host.secureserver.net',
          },
        ],
        destination: 'https://northaveimmediatecare.com/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "northaveimmediatecare.com",
      },
      {
        protocol: "https",
        hostname: "www.northaveimmediatecare.com",
      },
    ],
  },
};

export default nextConfig;
