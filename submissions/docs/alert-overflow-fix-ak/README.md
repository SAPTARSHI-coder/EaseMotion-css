# Alert Overflow Fix — Small Screens

## What does this do?
Fixes `.alert` component text overflowing its container on small screens by applying responsive word wrapping, as reported in issue #55661.

## How is it used?
```html
<div class="alert alert--error">
  Your long alert message wraps correctly instead of overflowing.
</div>
```

## Why is it useful?
Long alert messages previously extended beyond the container on small viewports, breaking layout and readability (issue #55661). This fix applies `overflow-wrap: break-word` and `word-break: break-word` so messages wrap within the container at any screen size, matching the issue's suggested fix. `demo.html` includes a before/after comparison so the maintainer can visually verify the fix before integrating it into `core/`.

## Notes
- This submission only demonstrates the fix (per contribution freeze rules, `core/` is not modified directly).
- Tested down to 320px viewport width.
