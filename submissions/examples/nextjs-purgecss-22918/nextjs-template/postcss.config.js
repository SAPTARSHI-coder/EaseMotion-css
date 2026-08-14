// submissions/nextjs-purgecss-22918/nextjs-template/postcss.config.js
module.exports = {
  plugins: [
    // Next.js recommended defaults (usually handled internally, but good to make explicit if overriding)
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    // Only run PurgeCSS in production to keep development builds lightning fast!
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              // Scan all files in the app directory for EaseMotion utility classes
              content: [
                './app/**/*.{js,jsx,ts,tsx}',
                './components/**/*.{js,jsx,ts,tsx}',
              ],
              defaultExtractor: (content) => {
                // Ensure we capture all classes, including those with special characters
                return content.match(/[\w-/:]+(?<!:)/g) || [];
              },
              // Ensure we never purge essential structural tags that Next.js requires
              safelist: ['html', 'body', /^ease-/], 
              // Note: If you want maximum bundle reduction, remove `/^ease-/` from safelist 
              // and let PurgeCSS strip unused ease- classes based strictly on the 'content' scan!
            },
          ],
        ]
      : []),
  ],
};
