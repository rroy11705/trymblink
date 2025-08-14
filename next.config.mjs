import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // AWS Amplify configuration
  output: 'standalone',
  serverExternalPackages: ['@payloadcms/db-mongodb'],
  // Image configuration for CloudFront CDN
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd10hq6w2woc1e.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Ensure environment variables are available at runtime
  env: {
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    DATABASE_URI: process.env.DATABASE_URI,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    S3_BUCKET: process.env.S3_BUCKET,
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_REGION: process.env.S3_REGION,
    CLOUDFRONT_DOMAIN: process.env.CLOUDFRONT_DOMAIN,
    NEXT_PUBLIC_CDN_URL: process.env.NEXT_PUBLIC_CDN_URL,
  },
  // Webpack configuration for PayloadCMS
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
