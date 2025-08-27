import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ['cdn.sanity.io','images.unsplash.com'],
  // },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.sanity.io',
  //       pathname: '/photo/**', // Allows images from /photo/ and its subdirectories
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'images.unsplash.com',
  //       port: '', 
  //       pathname: '', 
  //     },
  //   ],
  // },
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: "false",
  },
};

export default nextConfig;
