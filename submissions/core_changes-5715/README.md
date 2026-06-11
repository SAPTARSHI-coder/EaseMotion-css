# Issue #5715: Test expects 'font-size: 0' but CSS uses 'color: transparent'

## Description
`tests/smoke.test.js` line 98 asserts `expect(css).toContain('font-size: 0')`, but `components/buttons.css` line 221 uses `color: transparent !important`. The test assertion will always fail.

## Root Cause
The test was written to expect `font-size: 0` but the actual CSS implementation uses `color: transparent !important` to hide the button text while keeping the spinner visible.

## Proposed Fix
In `tests/smoke.test.js` line 98, change:
```js
expect(css).toContain('font-size: 0');
```
to:
```js
expect(css).toContain('color: transparent');
```

## Files
- `style.css` — documents the mismatch
- `demo.html` — shows the loading button with `color: transparent` applied
- `README.md` — this file
