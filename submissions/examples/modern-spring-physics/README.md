# Modern Spring Physics

A collection of reusable CSS spring easing presets using the modern `linear()` timing function.

## What does this do?

This example provides five spring-style CSS custom properties:

- `--spring-bouncy`
- `--spring-snappy`
- `--spring-gentle`
- `--spring-stiff`
- `--spring-wobbly`

Each preset creates a different spring-like motion with overshoot and natural-looking movement.

## How is it used?

Apply a spring preset to a CSS transition:

```css
.button {
  transition: transform 0.6s var(--spring-bouncy);
}

.button:hover {
  transform: scale(1.08);
}