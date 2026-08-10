# Fix: Expose --ease-modal-backdrop Token in modals.css

## Problem

`.ease-modal-overlay` hardcoded the backdrop background with no CSS custom property:

```css
.ease-modal-overlay {
  background: rgba(15, 23, 42, 0.6); /* no token */
}
```

Users who want to adjust the overlay opacity or color must override `.ease-modal-overlay` directly with higher specificity.

## Solution

Expose `--ease-modal-backdrop` with the original value as fallback:

```css
.ease-modal-overlay {
  background: var(--ease-modal-backdrop, rgba(15, 23, 42, 0.6));
}
```

## Usage

```html
<!-- Default backdrop -->
<div class="ease-modal-overlay" id="modal">...</div>

<!-- Custom backdrop per modal -->
<div class="ease-modal-overlay" id="modal" style="--ease-modal-backdrop: rgba(108, 99, 255, 0.5);">...</div>
```

Global override:

```css
:root {
  --ease-modal-backdrop: rgba(0, 0, 0, 0.8);
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses CSS custom properties so users can customise components without specificity battles. Other components already expose their key values as tokens. The modal backdrop should follow the same pattern.

Fixes #10410
