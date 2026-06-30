# Tooltip Viewport Overflow Fix

## 1. What does this do?

Fixes the tooltip component (`components/tooltips.css`) to prevent overflow when tooltips appear near viewport edges. Previously, tooltips near the right edge would extend beyond the viewport causing horizontal scrollbars.

**CSS changes:**

- Added `max-width: min(300px, 90vw)` to all tooltips
- Added `overflow-wrap: break-word` and `word-break: break-word` for long text
- Right-positioned tooltips (`data-position="right"`) near right edge: constrained to `calc(100vw - 100% - 2rem)`
- Left-positioned tooltips (`data-position="left"`) near left edge: constrained to `calc(100% - 2rem)`
- Mobile override: `max-width: calc(100vw - 2rem)` on small viewports
- All fixes wrapped in `@layer easemotion-components`

## 2. How is it used?

No markup changes required. Existing tooltip usage is unaffected:

```html
<span class="ease-tooltip" data-tooltip="Tooltip text" data-position="right">
  Hover me
</span>
```

The fix is purely CSS — tooltips now automatically respect viewport boundaries.

## 3. Why is this useful?

- Eliminates horizontal scrollbar caused by overflowing tooltips
- Long tooltip text wraps instead of overflowing
- Works on all four positions (top, bottom, left, right)
- Mobile-friendly with viewport-aware constraints
- Backward compatible — no markup or API changes
