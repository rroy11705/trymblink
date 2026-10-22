import { withPayload } from '@payloadcms/next/withPayload'

// Token format: vercel_blob_rw_<storeId>_<secret>; BLOB_STORE_ID overrides it
const blobStoreId = (
  process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN?.split('_')[3] || ''
).toLowerCase()

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@payloadcms/db-mongodb'],
  // Vercel Blob hosts Payload media uploads
  images: {
    // Pinned to this project's store so the optimizer can't proxy other stores
    remotePatterns: blobStoreId
      ? [
          {
            protocol: 'https',
            hostname: `${blobStoreId}.public.blob.vercel-storage.com`,
            port: '',
            pathname: '/media/**',
          },
        ]
      : [],
  },
  // Ensure environment variables are available at runtime
  env: {
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    DATABASE_URI: process.env.DATABASE_URI,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
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
