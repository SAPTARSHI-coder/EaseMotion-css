# Tooltip Mobile Fallback Fix

## What's fixed
On mobile viewports (<= 640px), tooltips with `data-position="top"` correctly fall back to bottom positioning. But default tooltips (no `data-position` attribute) were missing from the media query — causing them to stay on top and get cropped on small screens.

## Root cause
The mobile override media query only targeted `[data-position="top"]` and missed `:not([data-position])`:

```css
/* Before — incomplete */
@media (max-width: 640px) {
  .ease-tooltip[data-position="top"]::after { /* default tooltips missing */ }
}
```

## The fix — add :not([data-position]) to all 3 selectors
```css
/* After — complete */
@media (max-width: 640px) {
  .ease-tooltip[data-position="top"]::after,
  .ease-tooltip:not([data-position])::after {        /* ← added */
    bottom: auto;
    top: calc(100% + var(--ease-tooltip-gap));
    transform: translateX(-50%) translateY(-4px);
  }

  .ease-tooltip[data-position="top"]:hover::after,
  .ease-tooltip:not([data-position]):hover::after,   /* ← added */
  .ease-tooltip[data-position="top"]:focus-within::after,
  .ease-tooltip:not([data-position]):focus-within::after { /* ← added */
    transform: translateX(-50%) translateY(0);
  }

  .ease-tooltip[data-position="top"]::before,
  .ease-tooltip:not([data-position])::before {       /* ← added */
    bottom: auto;
    top: calc(100% - 2px);
    border-top-color: transparent;
    border-bottom-color: var(--ease-tooltip-bg);
  }
}
```

## Usage — unchanged
```html
<!-- Default (was broken on mobile, now fixed) -->
<span class="ease-tooltip" data-tooltip="Hello">Hover me</span>

<!-- Explicit top (always worked) -->
<span class="ease-tooltip" data-tooltip="Hello" data-position="top">Hover me</span>
```

## Zero regression
- All other positions (bottom, left, right) unchanged
- Desktop behavior identical
- `prefers-reduced-motion` unaffected
- No JavaScript
