import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/cart484-docs',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
