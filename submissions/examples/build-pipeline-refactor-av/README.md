# Modern PostCSS Build Pipeline Refactor

## What does this do?
Proposes ripping out the fragile, custom Node.js build scripts (including `build-minified-css.mjs`, `check-duplicates.mjs`, `resolve-conflict.mjs`, and `validate-package.mjs`) and replacing them entirely with an industry-standard **PostCSS** and **Stylelint** pipeline.

## How is it used?
The maintainer would run `npm i -D postcss postcss-cli postcss-import cssnano stylelint`. 
The custom, regex-heavy scripts in `package.json` would be instantly replaced with simple, highly reliable NPM scripts:

```json
"scripts": {
  "build": "postcss core/index.css -o dist/easemotion.min.css",
  "lint": "stylelint '**/*.css'"
}
```

Alongside a standard `postcss.config.js`:
```javascript
module.exports = {
  plugins: [
    require('postcss-import'),
    require('cssnano')({ preset: 'default' })
  ]
};
```

## Why is it useful?
Currently, the framework heavily relies on brittle, custom Node.js files to manually parse, validate, concatenate, and minify CSS code. Maintaining thousands of lines of regex-based AST parsers is a massive technical debt trap that limits scalability. 

By migrating to a PostCSS ecosystem:
1. `postcss-import` perfectly handles file concatenation and dependency trees via native `@import` statements.
2. `cssnano` safely and optimally minifies the output CSS.
3. `stylelint` completely replaces the custom `check-duplicates.mjs` script, catching namespace collisions natively and reliably.

This refactor allows the maintainer to confidently delete thousands of lines of fragile backend scripts and replace them with standard, battle-tested dependencies.
