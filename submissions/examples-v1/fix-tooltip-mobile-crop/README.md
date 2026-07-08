# Fix for Default Tooltip Mobile Crop

Resolves Issue #8428.

## Description
This submission fixes a critical visual bug where default tooltips (those without `data-position` set) fail to adapt on mobile devices and get cropped out of the viewport.

In `components/tooltips.css`, the `@media (max-width: 640px)` query correctly moves top-positioned tooltips to the bottom. However, it only targets explicitly declared top tooltips (`.ease-tooltip[data-position="top"]`). It completely misses `.ease-tooltip:not([data-position])`, meaning the default behavior is broken on mobile.

This fix adds the missing `.ease-tooltip:not([data-position])` selectors to the media query fallback, ensuring all top-aligned tooltips safely move to the bottom on narrow screens.

## How to Apply
Maintainers should update `components/tooltips.css` line 194 to include the missing selectors:

```css
  @media (max-width: 640px) {
    /* ... */
    
    /* Fallback to bottom positioning on narrow viewports to avoid cropping */
    .ease-tooltip[data-position="top"]::after,
    .ease-tooltip:not([data-position])::after {
      bottom: auto;
      top: calc(100% + var(--ease-tooltip-gap));
      transform: translateX(-50%) translateY(-4px);
    }

    .ease-tooltip[data-position="top"]:hover::after,
    .ease-tooltip[data-position="top"]:focus-within::after,
    .ease-tooltip:not([data-position]):hover::after,
    .ease-tooltip:not([data-position]):focus-within::after {
      transform: translateX(-50%) translateY(0);
    }

    .ease-tooltip[data-position="top"]::before,
    .ease-tooltip:not([data-position])::before {
      bottom: auto;
      top: calc(100% - 2px);
      border-top-color: transparent;
      border-bottom-color: var(--ease-tooltip-bg);
    }
  }
```
