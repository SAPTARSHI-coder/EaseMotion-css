# Button Ripple Effect Mixins

This submission implements micro-interaction button ripple overlays matching SCSS mixin specifications.

---

## Technical Overview: The SCSS Ripple Mixin

Writing manual coordinate variables or inline keyframe styling repeatedly limits scalability. Scoping ripple properties inside SCSS mixins standardizes container overflow layers and color overrides:

```scss
// SCSS Button Ripple Mixin
@mixin button-ripple($base-color, $ripple-color: rgba(255, 255, 255, 0.25)) {
  position: relative;
  overflow: hidden;
  background-color: $base-color;
  
  // Ripple overlay hook
  .ripple-circle {
    position: absolute;
    background: $ripple-color;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
    animation: rippleEffect 0.6s ease-out;
  }
}

// Utility Class mapping
.btn-primary {
  @include button-ripple(#7c3aed);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click any of the buttons (Primary, Cyan, Emerald).
3. Verify that a light translucent circle expands smoothly from the exact coordinate clicked and fades out.
