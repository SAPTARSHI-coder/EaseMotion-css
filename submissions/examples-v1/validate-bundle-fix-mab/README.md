# validate-bundle.mjs Windows CRLF Line Ending Fix

## 1. What does this do?

Resolves the false-positive "stale bundle" error on Windows machines by normalizing line endings (`\r\n` to `\n`) before comparing the original minified CSS bundle against the rebuilt bundle.

## 2. How is it used?

The fix is applied inside `scripts/validate-bundle.mjs`. A helper function `normalizeLineEndings` is defined to strip out carriage returns:

```javascript
function normalizeLineEndings(str) {
  return str.replace(/\r\n/g, "\n");
}
```

The validation comparison is then updated from:

```javascript
if (originalBundle !== rebuiltBundle) {
```

to:

```javascript
if (normalizeLineEndings(originalBundle) !== normalizeLineEndings(rebuiltBundle)) {
```

This ensures the script checks for actual content changes in the CSS rather than platform-specific line ending styles.

## 3. Why is it useful?

Currently, contributors on Windows with Git's default `core.autocrlf = true` setting cannot pass validation checks (like `npm run validate:bundle` or `npm run release:check`). 

This is because Git automatically converts LF (`\n`) to CRLF (`\r\n`) when checking out the minified CSS bundle. However, the build script `build-minified-css.mjs` generates files with LF line endings. This mismatch causes the byte-for-byte comparison to fail even when the CSS content is identical. 

Normalizing line endings removes this barrier for all Windows-based contributors without affecting the validation logic on Unix-based CI systems.
