import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "wallpapers.com" },
      { protocol: "https", hostname: "wallpapercave.com" }
    ]
  }
};

export default nextConfig;
