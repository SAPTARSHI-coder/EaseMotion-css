# Smooth Scrollbar Styling & Hover Mixins

This guide details configuration specs for generating SCSS scrollbar styling mixins.

---

## Technical Overview: The Scrollbar Mixin

Relying on default browser scrollbars often breaks visual dark theme flows. Customizing thumbs using webkit parameters ensures smooth integration:

```scss
// SCSS Scrollbar Mixin
@mixin custom-scrollbar($width: 6px, $color: #7c3aed) {
  // Webkit target browsers
  &::-webkit-scrollbar {
    width: $width;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.02);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba($color, 0.3);
    border-radius: 999px;
    
    &:hover {
      background: rgba($color, 0.6);
    }
  }
  
  // Firefox fallback
  scrollbar-width: thin;
  scrollbar-color: rgba($color, 0.3) rgba(255, 255, 255, 0.02);
}

// Class mapping
.smooth-scrollbar {
  @include custom-scrollbar(6px, #7c3aed);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Scroll inside the **Interactive Logs Box**.
3. Verify that the scrollbar is thin (6px) and color transitions from transparent purple to bright purple on scroll-thumb hover.
