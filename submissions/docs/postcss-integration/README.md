# Build: PostCSS Integration Proposal

## Description
This documentation package serves as an official architectural proposal and implementation guide for Issue #56789. Because the GSSoC bot restricts contributors from modifying the root `package.json` or core build scripts, this proposal is submitted via the `submissions/docs/` directory.

## Implementation Guide for Core Maintainers

To future-proof the EaseMotion CSS framework and ensure maximum browser compatibility, the build pipeline should integrate `postcss` and `postcss-preset-env`.

### 1. Install Dependencies
Run the following in the repository root:
```bash
npm install --save-dev postcss postcss-cli postcss-preset-env
```

### 2. Create Configuration File
Create a new file named `postcss.config.js` in the root of the repository:

```javascript
module.exports = {
  plugins: [
    require('postcss-preset-env')({
      // Stage 2 enables most modern CSS features (nesting, custom media queries)
      stage: 2,
      // Automatically adds vendor prefixes based on Browserslist
      autoprefixer: { grid: true },
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'color-function': true, // Polyfills modern colors like color(display-p3 ...)
      }
    })
  ]
}
```

### 3. Add Browserslist to `package.json`
To tell PostCSS which browsers to target for polyfills and prefixes, append this to `package.json`:
```json
"browserslist": [
  "defaults",
  "not IE 11",
  "maintained node versions"
]
```

### 4. Update Build Scripts
Modify the existing CSS build script in `package.json` to pipe the SCSS output through PostCSS:

```json
"scripts": {
  "build:css": "sass core/easemotion.scss easemotion.css --no-source-map && postcss easemotion.css -o easemotion.css",
  "build:minify": "postcss easemotion.css -o easemotion.min.css --env production"
}
```

*Note: You may want to add `cssnano` to the PostCSS plugins list for the minification step.*

## Files Provided
- `demo.html` - A visual presentation of this proposal.
- `style.css` - Custom styling for the proposal documentation.
- `README.md` - This guide.
