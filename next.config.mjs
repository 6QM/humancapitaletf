import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

export default withMDX(nextConfig);

