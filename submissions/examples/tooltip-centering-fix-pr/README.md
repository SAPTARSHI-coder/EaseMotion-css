# Tooltip Centering Fix under prefers-reduced-motion

This submission provides a fix for the alignment bug affecting tooltip components when motion reduction overrides are active.

## The Bug

When `prefers-reduced-motion: reduce` is enabled, the tooltips stylesheet originally stripped all transforms on `.ease-tooltip::after`:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-tooltip::after {
    transform: none !important;
  }
}
```

This removed the layout-essential `translateX(-50%)` (for top/bottom alignments) and `translateY(-50%)` (for left/right alignments), causing tooltips to misalign.

## The Fix

This fix overrides the media query to preserve layout positioning transforms while setting motion-offset values to `0`:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-tooltip::after,
  .ease-tooltip::before {
    transition: none !important;
  }

  .ease-tooltip[data-position="top"]::after,
  .ease-tooltip:not([data-position])::after {
    transform: translateX(-50%) translateY(0) !important;
  }
  .ease-tooltip[data-position="bottom"]::after {
    transform: translateX(-50%) translateY(0) !important;
  }
  .ease-tooltip[data-position="left"]::after,
  .ease-tooltip[data-position="right"]::after {
    transform: translateY(-50%) translateX(0) !important;
  }
}
```

## How to Verify

1. Open `demo.html` in a web browser.
2. Emulate `prefers-reduced-motion: reduce` using your browser's developer tools.
3. Hover over each button (Top, Bottom, Left, Right) and verify that the tooltip boxes are perfectly centered relative to the buttons.
