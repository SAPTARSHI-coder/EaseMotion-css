# Micro-Interaction Button Ripple Effect Mixins

This guide details configuration specs for generating SCSS button ripple mixins.

---

## Technical Overview: The Button Ripple Mixin

Writing manual pseudo-element scaling rules repeatedly makes stylesheet files verbose. Packaging background ripple parameters inside SCSS mixins ensures clean layouts:

```scss
// SCSS Button Ripple Mixin
@mixin button-ripple($color: #7c3aed, $size: 140px) {
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: $size; height: $size;
    background: radial-gradient(circle, rgba($color, 0.4) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    pointer-events: none;
  }
  
  &:active::after {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 1;
    transition: transform 0.4s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.4s ease;
  }
}

// Class mapping
.ripple-violet { @include button-ripple(#7c3aed); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click the **Cyan Ripple** and **Violet Ripple** buttons.
3. Verify that radial color overlays expand outwards from the button centers on active click events.
