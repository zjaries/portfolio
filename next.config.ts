import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  output: "export",
  basePath: "", // TODO: replace with your actual repo name
  trailingSlash: true,
  devIndicators: false,
};

export default nextConfig;
