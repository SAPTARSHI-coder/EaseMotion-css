# Custom Glassmorphism Overlay Utilities

This guide details configuration specs for SCSS glassmorphism utility classes and backdrop filters.

---

## Technical Overview: The SCSS Glassmorphism Mixin

Writing manual backdrop blurs, opacity values, and border overlays repeatedly introduces inconsistencies. Utilizing an SCSS mixin maps all configuration fields uniformly:

```scss
// SCSS Glassmorphism Mixin
@mixin glassmorphism($bg-opacity: 0.05, $blur-radius: 12px, $border-opacity: 0.08) {
  background: rgba(255, 255, 255, $bg-opacity);
  border: 1px solid rgba(255, 255, 255, $border-opacity);
  backdrop-filter: blur($blur-radius);
  -webkit-backdrop-filter: blur($blur-radius);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
}

// Utility Classes
.glass-overlay-sm { @include glassmorphism(0.02, 6px, 0.05); }
.glass-overlay-md { @include glassmorphism(0.05, 12px, 0.08); }
.glass-overlay-lg { @include glassmorphism(0.1, 24px, 0.12); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the glass card layered over colorful background blobs.
3. Slide the **Blur Radius** slider — verify the glass blurring increases or decreases smoothly.
