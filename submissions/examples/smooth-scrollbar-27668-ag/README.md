# Smooth Scrollbar Styling & Hover Mixins

This guide details configuration specs for generating SCSS scrollbar styling mixins.

---

## Technical Overview: The Custom Scrollbar Mixin

Hardcoding browser-specific scrollbar rules makes stylesheet files bulky and hard to read. Packaging webkit custom properties inside an SCSS mixin scales parameters uniformly:

```scss
// SCSS Smooth Scrollbar Mixin
@mixin smooth-scrollbar($thumb-color: rgba(124, 58, 237, 0.4), $track-color: rgba(0, 0, 0, 0.2), $width: 8px) {
  // Webkit engines (Chrome, Safari, Edge)
  &::-webkit-scrollbar {
    width: $width;
  }
  
  &::-webkit-scrollbar-track {
    background: $track-color;
    border-radius: 99px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: $thumb-color;
    border-radius: 99px;
    
    &:hover {
      background: scale-color($thumb-color, $lightness: -20%);
    }
  }
  
  // Firefox support
  scrollbar-width: thin;
  scrollbar-color: $thumb-color $track-color;
}

// Utility class mapping
.custom-scroll-violet {
  @include smooth-scrollbar(rgba(124, 58, 237, 0.4));
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Scroll down on the **Violet Scrollbar** box — verify scrollbar track and thumb styling.
3. Hover over the scrollbar thumbs — verify scrollbar thumb color shifts to active highlights.
