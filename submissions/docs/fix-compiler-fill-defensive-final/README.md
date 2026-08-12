# Compiler Fill — Defensive Check Fix

### 1. What does this do?
Adds defensive null/undefined check for `ast.fill` in the `compile()` function to prevent `undefined` from appearing in generated CSS.

### 2. How is it used?
Apply the fix in `easemotion/engine/compiler.js`:

```javascript
// Before (bug):
const fillStr = ` ${ast.fill}`;

// After (fix):
const fillStr = ast.fill ? ` ${ast.fill}` : "";
```

### 3. Why is it useful?
Without this check, if `ast.fill` is `undefined`, the generated CSS will contain `undefined` as a literal string.
