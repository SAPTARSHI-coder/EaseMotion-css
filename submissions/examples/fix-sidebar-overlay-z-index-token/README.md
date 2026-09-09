# Fix: Use --ease-z-overlay Token for Sidebar Mobile Overlay z-index

## Problem

`components/sidebar.css` hardcoded `z-index: 100` inside the mobile media query:

```css
@media (max-width: 768px) {
  .ease-sidebar {
    z-index: 100;
  }
}
```

`variables.css` defines `--ease-z-overlay: 100` exactly for this purpose. Using the hardcoded literal instead of the token means the sidebar z-index cannot be adjusted via the token system and may fall out of sync if the z-index scale is updated globally.

## Solution

Use `--ease-z-overlay` with the original value as fallback:

```css
@media (max-width: 768px) {
  .ease-sidebar {
    z-index: var(--ease-z-overlay, 100);
  }
}
```

## Usage

Override globally:

```css
:root {
  --ease-z-overlay: 200;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS defines a z-index token scale (`--ease-z-base`, `--ease-z-raised`, `--ease-z-overlay`, `--ease-z-modal`, `--ease-z-toast`) for consistent stacking order management. All components should use these tokens so z-index can be adjusted globally without targeting individual component selectors.

Fixes #10415
