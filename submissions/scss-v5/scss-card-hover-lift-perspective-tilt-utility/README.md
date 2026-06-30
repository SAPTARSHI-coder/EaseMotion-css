# SCSS Utility: Card Hover Lift & Perspective Tilt Utility

## What does this do?
Provides a premium, reusable SCSS mixin to add 3D perspective tilt and translation lift effects to cards, buttons, or image wrappers on hover.

## Mixin Signature
```scss
@mixin card-hover-tilt(
  $lift-distance: -10px,
  $rotate-x: 5deg,
  $rotate-y: -5deg,
  $transition-duration: 0.4s,
  $shadow-hover: 0 20px 35px rgba(0, 0, 0, 0.15)
);
```

### Parameters
- `$lift-distance`: Vertical lift offset translation (default: `-10px`).
- `$rotate-x`: Rotation degrees around the horizontal X-axis on hover (default: `5deg`).
- `$rotate-y`: Rotation degrees around the vertical Y-axis on hover (default: `-5deg`).
- `$transition-duration`: Timing of the hover transition (default: `0.4s`).
- `$shadow-hover`: Box shadow applied on hover.

## Usage Example
```scss
@import "scss-card-hover-lift-perspective-tilt-utility";

.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  @include card-hover-tilt(-15px, 8deg, -8deg, 0.5s);
}
```

## Compiled CSS Output
```css
.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-style: preserve-3d;
  transform: perspective(1000px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg);
}
.product-card:hover {
  transform: perspective(1000px) translate3d(0, -15px, 15px) rotateX(8deg) rotateY(-8deg);
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
}
```
