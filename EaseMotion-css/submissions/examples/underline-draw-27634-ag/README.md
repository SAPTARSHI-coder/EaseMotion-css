# Text Highlight Underline Draw Utilities

This guide details configuration specs for generating SCSS text underline drawing mixins.

---

## Technical Overview: The Underline Mixin

Declaring manual relative block offsets repeatedly makes stylesheet files verbose. Utilizing pseudo-elements coupled with 2D scale transformations ensures clean layout scaling:

```scss
// SCSS Underline Draw Mixin
@mixin underline-draw($color: #7c3aed, $height: 2px, $origin: left) {
  position: relative;
  text-decoration: none;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: $height;
    background-color: $color;
    transform: scaleX(0);
    transform-origin: $origin;
    transition: transform 0.3s ease-in-out;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
}

// Utility Class mapping
.draw-left-right {
  @include underline-draw(#7c3aed, 2px, left);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Hover over the **Left to Right Draw** link — verify that the underline draws horizontally starting from the left.
3. Hover over the **Center Expand Draw** link — verify that the underline expands outwards from the center.
