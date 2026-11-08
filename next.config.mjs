import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS === 'true' ? '/TVBox-Knowledge-Portal' : '',
  assetPrefix: process.env.GITHUB_ACTIONS === 'true' ? '/TVBox-Knowledge-Portal/' : '',
};

export default withMDX(config);
