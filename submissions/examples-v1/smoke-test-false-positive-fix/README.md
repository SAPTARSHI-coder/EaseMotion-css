# Bug Fix — False-Positive Substring Match in Smoke Tests

## What does this do?

Identifies and resolves a false-positive assertion check in `tests/smoke.test.js` where the test case incorrectly passed by using substring matching. The smoke test asserted `expect(css).toContain('font-size: 0')` to check if text was hidden inside the loading button state `.ease-btn-loading`. However, `.ease-btn-loading` does not define `font-size: 0`, and the test only passed because the string was matched as a substring of unrelated class declarations containing decimal values (such as `font-size: 0.875rem` or `font-size: 0.75rem`).

---

## Technical Details & Exact Locations

### The Bug Location

**`tests/smoke.test.js` — lines 96–103:**

```javascript
it("should hide plain text in loading buttons and keep the spinner visible", () => {
  expect(css).toContain(".ease-btn-loading");
  expect(css).toContain("font-size: 0"); // ← BUG: Falsely matches 0.875rem or 0.75rem from other classes!
  expect(css).toContain(".ease-btn-loading > *");
  expect(css).toContain("visibility: hidden");
  expect(css).toContain(".ease-btn-loading::after");
  expect(css).toContain("border: 2px solid currentColor");
});
```

**`components/buttons.css` — lines 218–222:**

```css
/* Loading spinner inside button */
.ease-btn-loading {
  pointer-events: none;
  position: relative;
  color: transparent !important; /* ← Target element uses color: transparent, NOT font-size: 0 */
}
```

---

## Solution & Patch

Because repository validation rules block contributors from directly modifying core files (such as `tests/smoke.test.js`), we provide the correct assertion check as a maintainer patch file inside this submission:

- **Patch File:** [`submissions/examples/smoke-test-false-positive-fix/core-patch/smoke.test.patch.js`](file:///c:/Users/harsh/OneDrive/Desktop/NSoC/Folder/EaseMotion-css/submissions/examples/smoke-test-false-positive-fix/core-patch/smoke.test.patch.js)

The maintainer can manually apply this diff to `tests/smoke.test.js` to change the assertion check:

```diff
// tests/smoke.test.js
   it('should hide plain text in loading buttons and keep the spinner visible', () => {
     expect(css).toContain('.ease-btn-loading');
-    expect(css).toContain('font-size: 0');
+    expect(css).toContain('color: transparent');
     expect(css).toContain('.ease-btn-loading > *');
```

---

## Interactive Sandbox & Demo

An interactive simulation lab is provided in `demo.html` allowing contributors to:
1. Load a mockup CSS containing buttons and decimal font sizes.
2. Select between the **Buggy Substring Check** (asserting `font-size: 0`), **Fixed Substring Check** (asserting `color: transparent`), and a **Strict Selector & Declaration Check** (verifying boundaries).
3. Inspect how naive substring matching leads to false-positive test runs and check live status results.

### Files Created
- `demo.html`: Live interactive sandbox lab interface.
- `style.css`: Clean, visually stunning dark mode layout for the lab.
- `core-patch/smoke.test.patch.js`: The maintainer patch script.
- `README.md`: This documentation.

---

_Submitted by: SAPTARSHI-coder · Issue: False-Positive Substring Match in Smoke Tests_
