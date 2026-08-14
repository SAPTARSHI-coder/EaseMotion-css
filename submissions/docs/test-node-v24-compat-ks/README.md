# Fix: 3 Test Suites Failing on Node.js v24+

## What does this do?

Documents that 3 test suites (`modal.test.js`, `reveal.test.js`, `tabs.test.js`) crash at startup on Node.js v24+ with `"No such built-in module: node:"` because `@vitest-environment jsdom` is incompatible with `node:`-prefixed built-in module imports.

The affected test files use `import fs from 'fs'` and `import path from 'path'` which Node.js v24+ requires as `import { readFileSync } from 'node:fs'` and `import { resolve } from 'node:path'` — but vitest's jsdom environment cannot resolve these.

## How is it used?

```bash
# Run the test suite on Node.js v24+:
npm test

# Expected: 61 tests pass
# Actual: 3 suites fail with "No such built-in module: node:"
```

Before the fix:
```
 FAIL  tests/modal.test.js [ tests/modal.test.js ]
 FAIL  tests/reveal.test.js [ tests/reveal.test.js ]
 FAIL  tests/tabs.test.js [ tests/tabs.test.js ]
 Error: No such built-in module: node:
```

After the fix:
```
 ✓ tests/engine.test.js (29 tests)
 ✓ tests/modal.test.js (8 tests)
 ✓ tests/reveal.test.js (4 tests)
 ✓ tests/tabs.test.js (7 tests)
 ✓ tests/smoke.test.js (13 tests)
```

## Why is it useful?

- Prevents CI failures on modern Node.js versions
- The smoke.test.js already uses `node:fs`/`node:path` correctly (in the default Node environment with manual JSDOM)
- Only the three failing files need alignment with Node.js v24's module resolution
- The existing production code is correct — only test infrastructure needs updating

## Files to update in core:

1. `tests/modal.test.js` — Remove `@vitest-environment jsdom`, switch to default Node env + manual JSDOM with `dom.window.eval()` for the modal IIFE
2. `tests/reveal.test.js` — Keep `@vitest-environment jsdom`, inline the reveal.js logic (or use the same manual JSDOM approach as smoke.test.js)
3. `tests/tabs.test.js` — Keep `@vitest-environment jsdom`, inline the tabs.js logic

## Fix approaches compared:

| Approach | modal.test.js | reveal.test.js | tabs.test.js |
|----------|:---:|:---:|:---:|
| Manual JSDOM (like smoke.test.js) | ✅ Works | ⚠️ Complex | ⚠️ Complex |
| Inline logic | ❌ IIFE dependent | ✅ Works | ✅ Works |

**Recommended:** modal.test.js uses manual JSDOM, reveal.test.js and tabs.test.js inline the logic.
