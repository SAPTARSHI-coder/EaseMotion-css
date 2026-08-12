/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [/^ease-/], // Optionally safelist dynamic classes, but for the demo we'll show purging unused ones
        deep: [],
        greedy: []
      }
    }
  },
};

export default config;
