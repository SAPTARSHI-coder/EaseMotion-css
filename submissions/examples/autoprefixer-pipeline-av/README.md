# Autoprefixer Pipeline Architecture

## What does this do?

Proposes a structural build pipeline upgrade to integrate **Autoprefixer** and fully remove all hardcoded vendor prefixes (e.g., `-webkit-backdrop-filter`, `-webkit-box-shadow`, `-moz-appearance`) from the framework's raw source code.

## How is it used?

Maintainers and contributors must rip out all manual vendor prefixes from the `components/` directory. Instead, only pure, standard W3C CSS is written in the source files.

The build pipeline natively injects the necessary prefixes by adding Autoprefixer to the PostCSS configuration:

```javascript
// postcss.config.js
module.exports = {
  plugins: [require("autoprefixer")],
};
```

To strictly enforce this architecture moving forward, we propose adding Stylelint with the `property-no-vendor-prefix` and `value-no-vendor-prefix` rules to the CI pipeline to outright reject PRs that attempt to manually hardcode prefixes:

```json
"rules": {
  "property-no-vendor-prefix": true,
  "value-no-vendor-prefix": true
}
```

## Why is it useful?

Currently, files like `cards.css`, `navbar.css`, and `modals.css` rely heavily on manually typed vendor prefixes (such as `-webkit-backdrop-filter`). This approach is highly prone to human error, unnecessarily bloats the source code, and requires constant manual maintenance as browsers rapidly evolve and drop prefix requirements. By migrating to an Autoprefixer pipeline, the source CSS becomes significantly cleaner, smaller, and inherently future-proof. The build step automatically resolves and injects exactly the prefixes needed based on a standard `.browserslistrc` target, drastically reducing maintenance overhead for the community.
