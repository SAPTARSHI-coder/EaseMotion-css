# ease-pagination Print Media Query Fix

Fixes issue **#48289** — adds `@media print` optimization to the ease-pagination component.

## What does this do?

This submission demonstrates the fix for the ease-pagination component's lack of print media query optimization. When users print pages containing the pagination component, heavy gradients, box-shadows, and background colors waste ink and reduce readability. This fix adds a `@media print` block that strips decorative styles and ensures clean, readable output on paper.

## How is it used?

Add the following `@media print` block after the existing pagination styles:

```css
@media print {
  .ease-page-btn {
    background: transparent !important;
    box-shadow: none !important;
    border: 1px solid #000 !important;
    color: #000 !important;
  }

  .ease-page-btn-active {
    background: #000 !important;
    color: #fff !important;
    border-color: #000 !important;
    font-weight: 700;
  }

  .ease-page-btn:disabled {
    opacity: 0.3;
    color: #666 !important;
  }

  .ease-page-btn-ellipsis {
    border: none !important;
    color: #000 !important;
  }
}
```

## Why is it useful?

- **Saves ink** — removes gradients, shadows, and heavy backgrounds
- **Improves readability** — ensures black text on white/transparent backgrounds
- **Maintains usability** — active page still distinguishable via bold text
- **Follows best practices** — standard print optimization pattern used by major frameworks

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained demo with three pagination sizes and print button |
| `style.css` | CSS with the `@media print` fix applied |
| `README.md` | This file |
