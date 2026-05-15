import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/banani-generated-images/**",
      },
    ],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
