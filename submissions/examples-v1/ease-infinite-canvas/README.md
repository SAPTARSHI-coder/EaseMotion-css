# Ease Infinite Canvas

## Feature overview

A lightweight scroll-reveal utility that assigns each element a deterministic entrance direction and animates it with GPU-friendly translate3d and opacity motion for a calm, infinite-canvas feel.

## Installation

Copy the demo files into your project and include the stylesheet:

```html
<link rel="stylesheet" href="style.css" />
```

Wrap a collection of cards or blocks in a parent container using the `.ease-infinite-canvas` utility and place each item inside a child with `.ease-item`.

## Usage examples

```html
<section class="ease-infinite-canvas">
  <article class="ease-item">First card</article>
  <article class="ease-item">Second card</article>
  <article class="ease-item ease-direction-bottom-right">Third card</article>
</section>
```

## Configuration options

Customize the motion with CSS custom properties:

- `--ease-canvas-distance`: how far items travel from their starting point
- `--ease-canvas-duration`: entrance duration
- `--ease-canvas-easing`: easing curve for the transition
- `--ease-canvas-stagger`: delay between grouped items

Available direction overrides include:

- `.ease-direction-top`
- `.ease-direction-bottom`
- `.ease-direction-left`
- `.ease-direction-right`
- `.ease-direction-top-left`
- `.ease-direction-top-right`
- `.ease-direction-bottom-left`
- `.ease-direction-bottom-right`

## Browser compatibility

The utility uses modern CSS transforms and can be paired with Intersection Observer for progressive enhancement in evergreen browsers.

## Accessibility considerations

The feature respects the `prefers-reduced-motion` media query and disables entrance animations for users who request reduced motion.

## Performance notes

The implementation is dependency-free and uses transform and opacity only, which keeps motion costs low.

## Future enhancement ideas

Possible extensions include parallax depth, section-based direction themes, and richer replay controls for storytelling layouts.
