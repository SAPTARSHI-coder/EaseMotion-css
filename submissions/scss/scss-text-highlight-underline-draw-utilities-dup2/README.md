# SCSS Utility: Text Highlight Underline Draw Utilities

## What does this do?
Provides a clean, reusable SCSS mixin to add customizable, animated drawing underline/highlight effects to links and text spans on hover.

## Mixin Signature
```scss
@mixin text-highlight-underline(
  $underline-color: #10b981,
  $underline-height: 2px,
  $transition-duration: 0.3s,
  $origin: left
);
```

### Parameters
- `$underline-color`: The background color of the drawn line (default: `#10b981`).
- `$underline-height`: Height/thickness of the underline (default: `2px`).
- `$transition-duration`: The speed of the drawing animation (default: `0.3s`).
- `$origin`: The starting point of the drawing animation (`left`, `right`, or `center`).

## Usage Example
```scss
@import "scss-text-highlight-underline-draw-utilities";

.nav-link-draw {
  color: #1e293b;
  @include text-highlight-underline(#3b82f6, 3px, 0.25s, center);
}
```

## Compiled CSS Output
```css
.nav-link-draw {
  color: #1e293b;
  position: relative;
  text-decoration: none;
}
.nav-link-draw::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #3b82f6;
  transform: translateX(-50%) scaleX(0);
  transition: transform 0.25s ease-in-out;
  left: 50%;
  transform-origin: bottom center;
}
.nav-link-draw:hover::after {
  transform: translateX(-50%) scaleX(1);
}
```
 Pregenerated utilities are also available in the compiled sheet:
- `.ease-text-draw-left`: Draw from left.
- `.ease-text-draw-center`: Draw from center.
- `.ease-text-draw-right`: Draw from right.
