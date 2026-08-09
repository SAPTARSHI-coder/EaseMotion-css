# Fix: Header Logo Too Small — Issue #43263

## What does this do?

Fixes the header logo being too small (24 px) and difficult to notice. The updated size is **48 px** on desktop, scaling down gracefully to **36 px** on mobile viewports, keeping the logo clearly visible while staying proportional to the navigation links.

## How is it used?

Replace the small logo `<img>` or `<svg>` in the site header with the corrected size class:

```html
<!-- Before (too small) -->
<a href="/" class="brand-logo" aria-label="EaseMotion CSS Home">
  <svg class="logo-icon logo-icon--small" ...></svg>
  <span class="brand-name">EaseMotion</span>
</a>

<!-- After (fixed) -->
<a href="/" class="brand-logo" aria-label="EaseMotion CSS Home">
  <svg class="logo-icon logo-icon--fixed" ...></svg>
  <span class="brand-name">EaseMotion</span>
</a>
```

Key CSS rules applied:

```css
/* Fixed logo — desktop */
.logo-icon--fixed {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

/* Responsive — mobile */
@media (max-width: 480px) {
  .logo-icon--fixed {
    width: 36px;
    height: 36px;
  }
}
```

- Aspect ratio is preserved because `width` and `height` are set to equal values on the SVG/image, and the SVG uses a square `viewBox`.
- Vertical alignment is handled via `display: flex; align-items: center` on the `.brand-logo` anchor.
- `flex-shrink: 0` prevents the logo from collapsing when nav links crowd the header.

## Why is it useful?

The logo is the primary branding element in the header. When it is too small, users on first visit may not register the project name or associate it with the EaseMotion identity. Increasing the logo to 48 px brings it in line with standard header logo sizes (40–56 px as suggested in the issue) without disrupting the layout balance. The responsive rule ensures the fix does not overflow on narrow screens, and the `prefers-reduced-motion` guard disables transitions for users who have motion sensitivity.
