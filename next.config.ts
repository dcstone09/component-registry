import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/component-registry",
  assetPrefix: "/component-registry/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
