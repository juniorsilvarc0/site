/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "jcavwlwklgkfcittablk.supabase.co",
      },
      // Permite imagens absolutas servidas pelo próprio frontend (ex.: http://localhost:3000/arquivo.jpg)
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
};

export default nextConfig;
