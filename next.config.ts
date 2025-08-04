import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "coursera.org", // Add Coursera
      "images.credly.com", // Add Credly if needed
      "github.com",
      // Add any other badge domains here
    ],
  },
  // output: "export", // Enables static HTML export
};

export default nextConfig;
