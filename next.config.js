/** @type {import('next').NextConfig} */

// eslint-disable-next-line
const withPlugins = require('next-compose-plugins')

// eslint-disable-next-line
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfiguration = {
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ['statics.bitswired.com'],
  },
}

module.exports = withPlugins(
  [
    withMDX({
      pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    }),
  ],
  nextConfiguration
)
