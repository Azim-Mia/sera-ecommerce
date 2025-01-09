/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
      protocol:"https",
      hostname:"google.com",
    },
     {
      protocol:"http",
      hostname:"localhost:3000",
    }
    ]
  }
};

export default nextConfig;