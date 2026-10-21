import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger's managed Next.js app expects .next and uses `next start`.
  // The export command opts into out/ for manual static uploads.
  output: process.env.NEXT_STATIC_EXPORT === "1" ? "export" : undefined,
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    // Serve bundled images directly without a server-side decoding step.
    unoptimized: true,
  },
};

export default nextConfig;
