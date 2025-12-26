import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/file_manage',
  reactStrictMode: true,

};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

export default nextConfig;
