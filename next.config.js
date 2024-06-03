const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx'],  // Only .tsx extensions for pages
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: "export"
};

module.exports = nextConfig;