# ESM __dirname Fix for smoke.test.js

**Fixes:** #2778
**File Modified:** `tests/smoke.test.js`

---

## Problem

The `tests/smoke.test.js` file used ES Module imports but relied on
the CommonJS `__dirname` variable for path resolution. In native
Node.js ESM environments, `__dirname` is undefined and throws a
ReferenceError.

## Fix

Replaced `__dirname` with ESM-compatible path resolution using
`fileURLToPath` and `import.meta.url`:

```js
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
```

## Result

The test file now follows Node.js ESM best practices and works
correctly without relying on Vitest's CommonJS polyfill.