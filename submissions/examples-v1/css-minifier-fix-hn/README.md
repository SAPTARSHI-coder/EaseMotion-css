# CSS Minifier String Corruption Fix

## What does this do?

This contribution fixes a critical bug in the custom CSS minification script (`build-minified-css.mjs`) where string literals, content quotes, and embedded SVG backgrounds were corrupted due to global whitespace stripping around structural tokens (like colons, brackets, and commas).

## How is it used?

The build system utilizes the updated `minifyCss` function automatically during CSS bundling. The core change uses a string-masking placeholder pattern:

```javascript
function minifyCss(css) {
  let cleanCss = removeCSSComments(css);
  const placeholders = [];

  // Protect string literals and url() definitions
  const stringOrUrlPattern =
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|url\((?:\s*"(?:\\.|[^"\\])*"\s*|\s*'(?:\\.|[^'\\])*'\s*|[^)]*)\))/g;

  cleanCss = cleanCss.replace(stringOrUrlPattern, (match) => {
    const placeholder = `__EASEMOTION_STR_PH_${placeholders.length}__`;
    placeholders.push(match);
    return placeholder;
  });

  // Structural CSS compression...

  // Restore strings
  for (let i = 0; i < placeholders.length; i++) {
    cleanCss = cleanCss.replace(`__EASEMOTION_STR_PH_${i}__`, placeholders[i]);
  }
  return cleanCss;
}
```

## Why is it useful?

It preserves the validity of string variables, text contents, and embedded SVG backgrounds in the minified release bundle (`easemotion.min.css`). Previously, compiling the codebase corrupted values inside content tags and broke SVG rendering, affecting layouts and custom themes.
