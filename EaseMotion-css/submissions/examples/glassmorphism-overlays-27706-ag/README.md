# Custom Glassmorphism Overlay Utilities

This guide details configuration specs for generating SCSS glassmorphic overlay mixins.

---

## Technical Overview: The Glassmorphism Mixin

Hardcoding static translucency parameters repeatedly leads to styling discrepancies across pages. Packaging glass attributes inside an SCSS mixin scales parameters uniformly:

```scss
// SCSS Glassmorphism Mixin
@mixin glass-overlay($bg-opacity: 0.03, $blur: 12px, $border-opacity: 0.08) {
  background: rgba(255, 255, 255, $bg-opacity);
  border: 1px solid rgba(255, 255, 255, $border-opacity);
  backdrop-filter: blur($blur);
  -webkit-backdrop-filter: blur($blur);
}

// Utility Classes
.glass-card {
  @include glass-overlay(0.03, 12px, 0.08);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe background blobs glowing blur shapes behind the right card container.
3. Slide the **Blur Radius** slider — verify the blur depth alters dynamically.
