# Source Map Generation for Build Script

1. **What does this do?**
   Enhances `scripts/build-minified-css.mjs` to generate `easemotion.min.css.map` alongside the minified CSS. The minified file includes a `/*# sourceMappingURL=easemotion.min.css.map */` comment. Use `--no-map` to skip source map generation for CDN builds.

2. **How is it used?**

   ```bash
   npm run build                    # builds with source map
   node scripts/build-minified-css.mjs --no-map  # without source map
   ```

3. **Why is this useful?**
   Without source maps, DevTools shows all CSS rules coming from a single minified line. Source maps let developers trace rules back to their original source files.
