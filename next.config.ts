import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/new_portfolio",
  assetPrefix: "/new_portfolio",
};

export default nextConfig;
