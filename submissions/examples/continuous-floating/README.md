# Continuous Floating/Bouncing Animation Utilities

## Description
This submission resolves Issue #68966 by adding standard, infinite "floating" animation utility classes commonly used for hero section illustrations, 3D assets, or app icons.

## Features
- Pure CSS keyframe animations.
- `.ease-float-y` for vertical bouncing (`translateY`).
- `.ease-float-x` for horizontal bouncing (`translateX`).
- Natural physics at the apex of the bounce thanks to the `ease-in-out` timing function.
- Easily customizable animation duration via the `--float-duration` CSS variable (default is `3s`).

## Usage
Add the `.ease-float-y` or `.ease-float-x` class to any element you want to float. To change the speed, simply override the `--float-duration` custom property in your CSS or inline styles.

```html
<!-- Default vertical float (3s) -->
<div class="ease-float-y">
  <img src="my-3d-asset.png" alt="Floating Asset">
</div>

<!-- Fast vertical float (1.5s) -->
<div class="ease-float-y" style="--float-duration: 1.5s;">
  <img src="fast-asset.png" alt="Fast Floating Asset">
</div>

<!-- Horizontal float -->
<div class="ease-float-x">
  <span>Hovering sideways...</span>
</div>
```
