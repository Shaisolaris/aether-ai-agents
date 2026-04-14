/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aether-ai-agents',
  assetPrefix: '/aether-ai-agents/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
