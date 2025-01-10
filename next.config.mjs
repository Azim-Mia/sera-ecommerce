/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
      protocol:"https",
      hostname:"google.com",
      }
    ]
  },
    images:{
    localPatterns:[
      {
pathname: '/assets/images/**',
        search: '',
      },
            {
pathname: '/images/**',
        search: '',
      },
    ]
    }
};

export default nextConfig;