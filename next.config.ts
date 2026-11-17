import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in /out so it can be hosted for free as static files
  // (Cloudflare Workers static assets). Single static page, so no server is needed.
  output: "export",
  // Static hosting has no image optimizer; images are served as-is.
  images: { unoptimized: true },
  // Lets you open the dev server from other devices on your Wi-Fi
  // (e.g. http://192.168.1.10:3000 on a phone). Dev-only; no effect in production.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
