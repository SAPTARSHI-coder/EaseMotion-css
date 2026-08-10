# Fix: Expose --ease-tooltip-max-width Token for Tooltip Width Customisation

## Problem

`components/tooltips.css` hardcoded `max-width` on tooltip width variants:

```css
.ease-tooltip[data-width="wide"]::after { max-width: 250px; }
.ease-tooltip[data-width="full"]::after { max-width: 320px; }
```

Users who need different tooltip widths must override these attribute selectors directly with higher specificity — inconsistent with other tooltip tokens already exposed (`--ease-tooltip-bg`, `--ease-tooltip-padding` etc.).

## Solution

Expose `--ease-tooltip-max-width` with original values as fallbacks:

```css
.ease-tooltip[data-width="wide"]::after {
  max-width: var(--ease-tooltip-max-width, 250px);
}
.ease-tooltip[data-width="full"]::after {
  max-width: var(--ease-tooltip-max-width, 320px);
}
```

## Usage

```html
<!-- Per-instance override -->
<button class="ease-tooltip"
        data-tooltip="Wide tooltip"
        data-width="wide"
        style="--ease-tooltip-max-width: 400px;">
  Hover me
</button>
```

```css
/* Global override */
:root {
  --ease-tooltip-max-width: 300px;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS already exposes `--ease-tooltip-bg`, `--ease-tooltip-text`, `--ease-tooltip-padding`, `--ease-tooltip-radius` as tokens. Tooltip max-width should follow the same pattern so all key dimensions are customisable via the token system.

Fixes #10421
