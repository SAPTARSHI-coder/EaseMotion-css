# Ease Tilt Hover

## Feature overview
A lightweight hover utility that adds a premium 3D tilt effect to cards and surfaces by reacting to pointer movement while keeping the layout stable.

## Installation
Include the stylesheet in your page and apply the `.ease-tilt-hover` class to any element you want to tilt:

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-tilt-hover" tabindex="0">
  <h3>Elevated card</h3>
  <p>Hover or focus to reveal the effect.</p>
</div>
```

## Usage examples
```html
<article class="ease-tilt-hover" tabindex="0">
  <h3>Feature card</h3>
  <p>Use it for product, team, or gallery surfaces.</p>
</article>
```

## CSS variable customization
Tune the experience with these variables:

- `--tilt-angle`: maximum tilt rotation in degrees
- `--tilt-perspective`: the depth of the 3D scene
- `--tilt-duration`: the transition duration
- `--tilt-hover-scale`: the scale applied on hover
- `--tilt-glare-opacity`: the strength of the glare overlay

## Browser compatibility
The effect uses standard CSS transforms and pointer events, which are broadly supported in modern evergreen browsers.

## Accessibility considerations
Keyboard focus receives a subtle tilt state, and the implementation respects reduced-motion preferences to avoid overwhelming motion for sensitive users.

## Performance notes
The utility stays dependency-free and uses GPU-friendly transforms, avoiding layout shifts and expensive DOM work.

## Future enhancements
Possible extensions include directional glow, multi-axis presets, and optional parallax backgrounds for richer editorial interfaces.
