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
        hostname: "jcavwlwklgkfcittablk.supabase.co", // Adicione o host do seu Supabase aqui
      },
    ],
  },
};
export default nextConfig;