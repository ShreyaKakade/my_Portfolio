/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Ignore ESLint errors during builds (still works locally)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
