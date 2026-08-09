# Custom Focus Ring & A11y Indicator Mixins

This submission implements accessibility focus utility declarations matching SCSS mixin requirements.

---

## Technical Overview: The SCSS A11y Focus Mixin

Standard focus outlines look inconsistent across browser engines, prompting developers to write `outline: none`, which creates major accessibility blocks. Generating focus rings via SCSS mixins ensures high-contrast outlines are preserved:

```scss
// SCSS Custom Focus Ring Mixin
@mixin focus-ring($color: #38bdf8, $offset: 3px, $radius: 8px) {
  outline: none;
  
  // Use focus-visible to only apply outline to keyboard tab inputs
  &:focus-visible {
    outline: 2px solid $color;
    outline-offset: $offset;
    box-shadow: 0 0 0 ($offset + 3px) rgba($color, 0.25);
    border-color: $color;
  }
}

// Utility Classes
.btn-accessible {
  @include focus-ring(#7c3aed);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Press `Tab` on your keyboard.
3. Verify that focus shifts through the input field and buttons, displaying a high-contrast cyan outline and surrounding glow.
