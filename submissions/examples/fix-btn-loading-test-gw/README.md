# Bug Fix: `.ease-btn-loading` smoke test mismatch

## What does this do?

Identifies and resolves a mismatch between the smoke test assertion (`font-size: 0`) and the actual CSS implementation (`color: transparent !important`) used to hide button text in the `.ease-btn-loading` loading state.

---

## How is it used?

### The bug — exact file locations

**`tests/smoke.test.js` — line 91 (the failing assertion):**
```js
it('should hide plain text in loading buttons and keep the spinner visible', () => {
  expect(css).toContain('.ease-btn-loading');
  expect(css).toContain('font-size: 0');        // ← WRONG — this string does not exist
  expect(css).toContain('.ease-btn-loading > *');
  expect(css).toContain('visibility: hidden');
  expect(css).toContain('.ease-btn-loading::after');
  expect(css).toContain('border: 2px solid currentColor');
});
```

**`components/buttons.css` — lines 212–216 (the actual implementation):**
```css
.ease-btn-loading {
  pointer-events: none;
  position: relative;
  color: transparent !important;   /* ← text hidden via color, NOT font-size */
}
```

`font-size: 0` appears **nowhere** in `buttons.css` — so `expect(css).toContain('font-size: 0')` always fails.

---

### Proposed fix — Option A ⭐ (recommended: fix the test)

`color: transparent` is the better approach — it keeps text in the accessibility tree and preserves em-based spinner sizing. Fix the test to match:

```diff
// tests/smoke.test.js line 91
- expect(css).toContain('font-size: 0');
+ expect(css).toContain('color: transparent');
```

### Proposed fix — Option B (fix the component)

If `font-size: 0` was the original design intent:

```diff
/* components/buttons.css — .ease-btn-loading */
.ease-btn-loading {
  pointer-events: none;
  position: relative;
- color: transparent !important;
+ font-size: 0;
}
```

⚠️ Note: `font-size: 0` collapses `em` to zero — the spinner's `0.85em` sizing in `::after` would need to change to `px` values.

---

## Why is it useful?

The smoke test suite is the project's first line of defence against regressions. A test that always fails (even when the component works correctly) erodes confidence in the entire test suite and forces contributors to ignore red test output.

| | Before (bug) | After (fix) |
|---|---|---|
| Smoke test passes | ❌ Always fails | ✅ Passes |
| Component behaviour | ✅ Correct | ✅ Unchanged |
| Accessibility (text in a11y tree) | ✅ `color: transparent` keeps it | ✅ Preserved |
| Spinner sizing | ✅ `em`-relative, stable | ✅ Stable |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Live button demo (both approaches) + diff patches for maintainer |
| `style.css` | CSS implementing both `color: transparent` and `font-size: 0` variants |
| `README.md` | This file |

---

*Submitted by: gw · Issue: `.ease-btn-loading` test asserts `font-size: 0` but component uses `color: transparent`*
