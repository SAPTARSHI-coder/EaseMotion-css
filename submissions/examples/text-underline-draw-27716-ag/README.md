# Text Highlight Underline Draw Utilities

This guide details configuration specs for generating SCSS text highlight underline draw utilities.

---

## Technical Overview: The Underline Draw Mixin

Static underlines styled using `text-decoration: underline` cannot transition, limiting design animations. Adjusting `background-size` horizontally resolves this boundary:

```scss
// SCSS Text Underline Draw Mixin
@mixin text-underline-draw($color: #7c3aed, $thickness: 3px, $duration: 0.35s) {
  display: inline;
  position: relative;
  background-image: linear-gradient($color, $color);
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 0% $thickness;
  padding-bottom: 4px;
  transition: background-size $duration cubic-bezier(0.25, 1, 0.5, 1);
  
  &:hover {
    background-size: 100% $thickness;
  }
}

// Utility Class mapping
.underline-purple {
  @include text-underline-draw(#c4b5fd);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Hover over the colorful text spans (EaseMotion CSS, dynamic layouts, pure CSS styling).
3. Verify that high-contrast colored underlines draw themselves smoothly from left to right.
