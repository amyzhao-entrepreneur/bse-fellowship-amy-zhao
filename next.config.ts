import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev server listens on every interface so the preview browser can
  // connect. That browser still calls the site 127.0.0.1, which Next would
  // otherwise block as a cross-origin dev request.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
