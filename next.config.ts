import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "coursera.org", // Add Coursera
      "images.credly.com", // Add Credly if needed
      // Add any other badge domains here
    ],
  },
};

export default nextConfig;
