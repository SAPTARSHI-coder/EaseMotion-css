# Fix: Defensive Check for ast.fill in compiler.js

## What does this do?
Adds a defensive null check for `ast.fill` in `easemotion/engine/compiler.js` to prevent invalid CSS output.

## How is it used?
```javascript
// Before:
const fillStr = ` ${ast.fill}`;  // Could be "undefined"

// After:
const fillStr = ast.fill ? ` ${ast.fill}` : "";
```

## Why is it useful?
- Prevents "undefined" from appearing in generated CSS
- Makes the compiler more robust
- Ensures valid CSS output in all cases
