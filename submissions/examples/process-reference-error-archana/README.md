# Bug Fix: Process Reference Error in Browser Environments

## What's the Issue?

The EaseMotion CSS runtime engine (`easemotion/engine/runtime.js`) references the `process` object to check the Node environment:

```javascript
if (process?.env?.NODE_ENV !== 'production') {
  console.warn(...)
}
```

**Problem:** In browser environments, `process` is **not defined**. While optional chaining (`?.`) is safe for nested properties, it **does not protect against undeclared root identifiers**.

This causes:
```
ReferenceError: process is not defined
```

...when:
- Using invalid `em` attribute values in browsers
- Bundling EaseMotion CSS without a global `process` polyfill
- Loading the runtime in browser-like DOM environments (jsdom, Playwright, etc.)

---

## Why This Matters

❌ **Before the fix:**
- Valid `em` values: ✅ Work fine
- Invalid `em` values in browsers: 💥 **Runtime crashes**
- Node.js environments: ✅ Work fine

✅ **After the fix:**
- Valid `em` values: ✅ Work fine
- Invalid `em` values in browsers: ⚠️ **Graceful warning** (no crash)
- Node.js environments: ✅ Work fine (unchanged)

---

## The Fix

Replace the unsafe optional chaining:

```javascript
// ❌ UNSAFE - throws ReferenceError in browsers
if (process?.env?.NODE_ENV !== 'production') {
  console.warn('Invalid em value...')
}
```

With a guarded `typeof` check:

```javascript
// ✅ SAFE - works everywhere
if (typeof process === 'undefined' || process.env?.NODE_ENV !== 'production') {
  console.warn('Invalid em value...')
}
```

**Why this works:**
- `typeof` is the only operator that safely checks undeclared identifiers
- Returns `"undefined"` for both missing and truly undefined variables
- Prevents ReferenceError before optional chaining is evaluated
- No performance impact; still uses optional chaining for the actual property check

---

## Test Cases

### ✅ Valid em Values
```html
<div em="1.5">Valid - will apply 1.5em</div>
<div em="2">Valid - will apply 2em</div>
<div em="0.5">Valid - will apply 0.5em</div>
```
→ Process without warnings

### ⚠️ Invalid em Values (After Fix)
```html
<div em="bad">Invalid - will warn gracefully</div>
<div em="invalid123">Invalid - will warn gracefully</div>
<div em="">Invalid - will warn gracefully</div>
```
→ Warn in console, **no ReferenceError**

### ✅ No em Attribute
```html
<div>Normal element - no issues</div>
```
→ Works as expected

---

## How to Test

1. **Open `demo.html` directly in a browser** (no server needed)
2. Press **F12** to open Developer Tools → Console tab
3. Click **"Run Runtime Test"** button
4. Verify:
   - ✅ No ReferenceError in console
   - ✅ Console logs show "Process check passed safely"
   - ✅ Invalid em values display as "invalid" in the test output

### Before this fix:
The page would crash with `ReferenceError: process is not defined` on load.

### After this fix:
The page loads perfectly and handles invalid values gracefully.

---

## Browser Compatibility

| Environment | Before Fix | After Fix |
|-------------|:----------:|:---------:|
| Chrome/Firefox/Safari/Edge (browsers) | ❌ ReferenceError | ✅ Works |
| Node.js | ✅ Works | ✅ Works |
| Bundled (ESM/UMD) | ❌ ReferenceError* | ✅ Works |
| jsdom/Playwright tests | ❌ ReferenceError* | ✅ Works |

*Without a `process` polyfill

---

## Impact Summary

- **Severity:** High (prevents runtime from working in browsers)
- **Scope:** Affects any user loading EaseMotion CSS in a browser environment
- **Breaking change:** No (only fixes a crash, doesn't change API)
- **Performance impact:** None
- **Affected code:** `easemotion/engine/runtime.js` (1 line change)

---

## Why This Fits EaseMotion CSS

EaseMotion CSS is designed to be **developer-friendly and universal**:
- ✅ Works in browsers (primary use case)
- ✅ Works in Node.js (testing, SSR)
- ✅ Works in any JavaScript environment
- ✅ Animations-first, with zero friction

This bug fix ensures the **runtime doesn't break on invalid input**, reinforcing EaseMotion's reliability and ease of use. Developers can confidently use EaseMotion CSS without worrying about environment-specific crashes.

---

## Files Included

- **`demo.html`** – Interactive demonstration of the fix (open in browser)
- **`style.css`** – Styling for the demo page
- **`README.md`** – This documentation

---

## Suggested Implementation

In `easemotion/engine/runtime.js`, apply this change wherever `process?.env?.NODE_ENV` is used:

```diff
- if (process?.env?.NODE_ENV !== 'production') {
+ if (typeof process === 'undefined' || process.env?.NODE_ENV !== 'production') {
    console.warn('Invalid em value...')
  }
```

---

## Notes for Maintainer

- This is a **critical stability fix** for browser environments
- The fix is minimal (1 line per occurrence) and has no side effects
- Recommend applying to **all instances** of `process?.env` checks in the engine
- Consider adding a test case in the test suite to catch this regression
- The `typeof process` pattern is standard practice for universal JS libraries

---

## Related Issues

- **Issue #40058** – Engine runtime throws ReferenceError for invalid em values in browsers
- **Issue context:** User reported crash when using `em` attributes in browser-based environments

---

*Submission for GSSoC 2026 – Bug fix contribution to EaseMotion CSS*