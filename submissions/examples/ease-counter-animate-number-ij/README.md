# Counter Animate Number

A numeric counter that animates digit changes with a rotateX flip effect. Press + / - to increment or decrement the value.

## Features

- Flip animation on digit change via `@keyframes canFlip`
- Staggered three-digit display
- Pure CSS animation triggered by JS class toggle
- Smooth bounce easing

## Usage

Each `.can-digit` span displays one digit. When the digit changes, add the `.can-flip` class to trigger the flip animation. The `--can-duration` and `--can-easing` custom properties control the animation timing.

```css
.can-digit.can-flip {
  animation: canFlip 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
