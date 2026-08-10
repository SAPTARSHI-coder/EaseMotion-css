# PurgeCSS Production Optimization Guide

## Description
This documentation package serves as an official architectural proposal and implementation guide for Issue #56790. Because the GSSoC bot restricts contributors from modifying the root `README.md` directly, this documentation proposal is submitted via the `submissions/docs/` directory.

## Implementation Guide for Core Maintainers

To dramatically improve Production Performance, EaseMotion needs an official `PurgeCSS` configuration block that users can copy-paste into their webpack, vite, or postcss configs.

### Proposed Documentation Addition
Please append the following Markdown block to the **"Production"** section of the root `README.md`:

```markdown
## Optimizing for Production (PurgeCSS)

EaseMotion ships with hundreds of utility classes. To ensure your production CSS bundle remains as small as possible, we highly recommend using [PurgeCSS](https://purgecss.com/).

### Standard Configuration

If you are using PostCSS, add the following to your `postcss.config.js`:

\`\`\`javascript
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.vue'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      // Safelist dynamic animation classes that might be injected via JS
      safelist: {
        standard: [/^ease-/],
        deep: [/ease-animate-/, /ease-transition-/]
      }
    })
  ]
}
\`\`\`

**Why Safelist?**
Because some EaseMotion animations (like scroll reveals) dynamically inject classes like `.ease-fade-in` using JavaScript, PurgeCSS might accidentally delete them during the build process since they don't appear directly in your HTML strings. The `safelist` configuration above ensures that any class starting with `ease-` is protected from deletion!
```

## Files Provided
- `demo.html` - A visual presentation of this proposal.
- `style.css` - Custom styling for the proposal documentation.
- `README.md` - This guide.
