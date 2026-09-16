# Bounce Elastic In

Bounce Elastic In is a reusable EaseMotion CSS entrance animation for interfaces that need a lively but controlled reveal. The effect starts from a smaller, transparent state, overshoots its final position and scale, and then settles into place.

## What it provides

- `@keyframes ease-bounce-elastic-in` for the animation sequence.
- A configurable `--ease-duration` value for animation speed.
- A configurable `--ease-timing` value for the motion curve.
- GPU-friendly `transform` and `opacity` properties.
- A reduced-motion fallback that removes non-essential movement.
- Responsive demo styling that works on narrow and wide screens.

## Usage

Apply the animation to an element and define the timing variables when customization is needed:

```css
.element {
  --ease-duration: 900ms;
  --ease-timing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  animation: ease-bounce-elastic-in var(--ease-duration) var(--ease-timing) both;
}
```

The animation uses only `transform` and `opacity` for the animated properties, helping keep the motion inexpensive to render.

## Reduced motion

When `prefers-reduced-motion: reduce` is enabled, the demo disables the animation and leaves the element in its normal visible state.

## Demo

Open `demo.html` directly in a modern browser. No build step or JavaScript dependency is required.

## Files

- `demo.html` — accessible standalone preview.
- `style.css` — formatted implementation and responsive demo styles.
- `README.md` — usage and implementation notes.
