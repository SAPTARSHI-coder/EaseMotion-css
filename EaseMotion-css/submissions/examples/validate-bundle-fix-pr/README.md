# validate-bundle.mjs Line Ending Fix

## What does this do?

It normalizes Windows carriage returns (`\r\n` -> `\n`) in the stylesheet bundle file strings before comparing them, fixing false-positive stale bundle check errors on Windows systems.

## How is it used?

It is a fix for the development check script `scripts/validate-bundle.mjs`. The comparison logic is updated as follows:

```javascript
const normalize = (str) => str.replace(/\r\n/g, "\n");

if (normalize(originalBundle) !== normalize(rebuiltBundle)) {
  // Stale bundle handling...
}
```

## Why is it useful?

This ensures cross-platform compatibility and a seamless developer experience for all Windows contributors running local tests and validations before pushing their changes.
