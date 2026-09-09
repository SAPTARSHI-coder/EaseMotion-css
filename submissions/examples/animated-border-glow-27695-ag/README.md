# Animated Border Draw & Glow Keyframe Mixins

This guide details configuration specs for generating SCSS SVG-drawing and glowing border utilities.

---

## Technical Overview: The Border Draw Mixin

Hardcoding static border widths or box-shadow offsets misses out on the dynamic visual flow of SVG path offsets. Declaring stroke dash arrays and transitioning offsets creates high-quality outline tracing effects:

```scss
// SCSS SVG Border Drawing Mixin
@mixin border-draw($color: #7c3aed, $width: 3px, $perimeter: 1100) {
  fill: none;
  stroke: $color;
  stroke-width: $width;
  stroke-linecap: round;
  stroke-dasharray: $perimeter;
  stroke-dashoffset: $perimeter;
  transition: stroke-dashoffset 0.8s ease-in-out, stroke 0.3s ease;
  
  &:hover {
    stroke-dashoffset: 0;
  }
}

// Utility class mapping
.border-rect {
  @include border-draw(#7c3aed, 3px, 1100);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Hover over the showcase card container.
3. Verify that a purple outline draws itself smoothly along the border perimeter of the card, while a soft purple shadow glows behind.
4. Leave the card — verify that the outline retracts.
