# Micro-Interaction Button Ripple Effect Mixins

This guide details configuration specs for generating SCSS button ripple micro-interaction mixins.

---

## Technical Overview: The Button Ripple Mixin

Writing manual coordinate-relative keyframe scripts for every active event makes styling sheets complex. Utilizing center-positioned scaling pseudo-elements simplifies visual feedback:

```scss
// SCSS Button Ripple Mixin
@mixin button-ripple($ripple-color: rgba(255, 255, 255, 0.2), $size: 120px) {
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: $size;
    height: $size;
    background: $ripple-color;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  
  &:active::after {
    transform: translate(-50%, -50%) scale(2);
    opacity: 1;
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  }
}

// Utility Class mapping
.ripple-purple {
  @include button-ripple(rgba(167, 139, 250, 0.3));
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click the **Trigger Ripple** buttons.
3. Verify that an expanding color circle ripples outward from the center of the button, transitioning its scale and opacity smoothly.
