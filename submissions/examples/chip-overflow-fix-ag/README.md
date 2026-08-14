# Chip Text Overflow Fix (Issue #18335)

## What does this do?
Demonstrates the corrected `.ease-chip` pattern that prevents long unbroken strings from overflowing their container by applying `overflow: hidden`, `text-overflow: ellipsis`, and `white-space: nowrap` alongside a `max-width: 100%` constraint.

## How is it used?
```html
<div style="display: flex; width: 200px;">
  <span class="ease-chip">SuperLongTagNameThatExceedsNormalBounds</span>
</div>
```

## Why is it useful?
Without `overflow: hidden` + `text-overflow: ellipsis` + `white-space: nowrap`, any chip containing a long unbroken string (like a URL, hash, or camelCase word) will push past its flex container and overlap sibling elements. This fix ensures chips always stay within their bounds and degrade gracefully with an ellipsis.
