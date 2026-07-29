# Architecture Fix: Automated Vendor Prefixing

This submission documents and provides the architectural requirement to ban manual CSS vendor prefixing, removing massive codebase bloat currently plaguing 1,002 component files.

## Issue Description
Currently, across more than a thousand component submissions, contributors are manually typing out legacy vendor prefixes (e.g., `-webkit-transform`, `-moz-transition`, `-ms-flex`). This is a disastrous practice. It violently bloats the CSS files, creating severe maintenance nightmares. Furthermore, manual prefixing guarantees bugs because contributors often forget a prefix, misspell them, or include prefixes for outdated browsers that no longer require them, while missing prefixes for modern browser quirks.

## Proposed Fix
To obliterate this maintenance nightmare, manual vendor prefixing must be strictly banned. Contributors must write clean, standard, un-prefixed CSS. The build pipeline (`scripts/build-minified-css.mjs`) MUST be upgraded to integrate the `autoprefixer` PostCSS plugin. This tool will automatically parse the standard CSS at build time and dynamically inject the mathematically exact prefixes required based on data from `caniuse.com`.

### Example

**❌ Incorrect (Current Architecture):**
```css
.card {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
```

**✅ Correct (New Architecture):**
```css
.card {
  transform: scale(1.1);
}
/* The build pipeline dynamically handles all browser compatibilities! */
```

The `demo.html` in this folder documents this architectural requirement. Maintainers must immediately implement PostCSS Autoprefixer in the build pipeline, and all 1,002 existing bloated components must be scrubbed of manual prefixes to restore codebase sanity.
