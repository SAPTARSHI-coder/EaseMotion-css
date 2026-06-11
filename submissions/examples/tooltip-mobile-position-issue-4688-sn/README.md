# Default Tooltip Mobile Position Fallback (Issue #4688)

## What does this do?
Ensures default tooltips without explicit `data-position` attribute correctly fallback to bottom positioning on mobile devices to prevent viewport cropping.

## How is it used?
When a default tooltip is hovered or focused on a mobile viewport (width < 640px), its position automatically shifts to the bottom.

## Why is it useful?
It fixes a layout bug where default tooltips would remain at the top and get cropped on small screens, ensuring mobile design responsiveness.

## Affected File (maintainer will copy to `components/tooltips.css`)
Modify the media query block in `components/tooltips.css` to add the `:not([data-position])` variants:
```css
    /* Fallback to bottom positioning on narrow viewports to avoid cropping */
    .ease-tooltip[data-position="top"]::after,
    .ease-tooltip:not([data-position])::after {
      bottom: auto;
      top: calc(100% + var(--ease-tooltip-gap));
      transform: translateX(-50%) translateY(-4px);
    }

    .ease-tooltip[data-position="top"]:hover::after,
    .ease-tooltip:not([data-position]):hover::after,
    .ease-tooltip[data-position="top"]:focus-within::after,
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
```
