import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["marketplace.canva.com", "encrypted-tbn0.gstatic.com"], // add your external image domains here
  },
};

export default nextConfig;
