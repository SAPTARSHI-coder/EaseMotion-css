# Modal Zindex Navbar Fix

## What does this do?
Demonstrates and fixes the z-index conflict where `.ease-modal-overlay` appears behind a sticky `.ease-navbar`. Introduces a centralized CSS custom property z-index scale (`:root { --z-navbar: 100; --z-modal-overlay: 200; }`) ensuring modals always layer above navbars.

## How is it used?
```html
<div class="ease-modal-overlay" role="dialog" aria-modal="true">
  <div class="ease-modal-box">Content</div>
</div>
```

## Why is it useful?
Without a shared z-index token scale, components compete for stacking order. This submission shows the correct layering hierarchy using CSS custom properties, a pattern the maintainer can integrate into `variables.css`.

## Fixes
Fixes #9844
