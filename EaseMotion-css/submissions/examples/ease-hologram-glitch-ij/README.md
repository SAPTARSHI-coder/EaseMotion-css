# Hologram Glitch

A floating hologram tears into horizontal slices with hue shifts when hovered or transmitted, simulating a damaged signal.

## How is it used?

The figure uses `clip-path` + `transform` jumps inside a single `steps()` keyframe loop:

```css
@keyframes glitch-slice {
  0% {
    clip-path: inset(0 0 0 0);
    transform: translate(0, 0);
    filter: hue-rotate(0deg);
  }
  25% {
    clip-path: inset(20% 0 40% 0);
    transform: translate(6px, -4px);
    filter: hue-rotate(90deg);
  }
  ...
}
```

## Why is it useful?

`clip-path: inset()` slices out a horizontal band while `steps()` snaps between discrete frames instead of easing — that stepped jump is exactly what makes glitches feel digital. Combined with `hue-rotate` it reads as channel corruption without any image assets.
