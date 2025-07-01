/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://nqaqonpeiviufcjuzsjx.supabase.co/**")],
  },
};

export default nextConfig;
