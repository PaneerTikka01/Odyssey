import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip ESLint checks during build 
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
