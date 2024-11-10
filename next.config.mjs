/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          // Rewrites for images, keep locale in the path for images
          source: "/:locale/image/:path*",
          destination: "/image/:path*",
        },
        {
          // Rewrites for fonts, keep locale in the path for fonts but map it to the root public/fonts
          source: "/:locale/fonts/:path*",
          destination: "/fonts/:path*",  // Keeps fonts accessible under /fonts regardless of the locale
        },
      ];
    },
  };
  
  export default nextConfig;
  