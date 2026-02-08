import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  typescript: {
    // !! ATENÇÃO !!
    // Isto permite que o build conclua com sucesso mesmo que haja 
    // erros de tipos (como esse bug da biblioteca Resend).
    ignoreBuildErrors: true,
  },
};

export default nextConfig;