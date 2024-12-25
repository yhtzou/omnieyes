import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "c121cd069a75fafdd6667d1bb88d56ff.r2.cloudflarestorage.com",
  //       port: "",
  //       pathname: "/omnieyes/public/**",
  //       search: "",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "pub-0eeb3cbe46f74bdeb646de1321ba03d0.r2.dev",
  //       port: "",
  //       pathname: "",
  //       search: "",
  //     },
  //   ],
  // },
};

export default withNextIntl(nextConfig);
