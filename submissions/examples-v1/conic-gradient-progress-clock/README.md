# Conic Gradient Progress Ring

## What does this do?

Animates a donut-style progress ring by driving a `conic-gradient()` with a `@property`-registered custom property (`--progress`).

## How is it used?

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}

@keyframes progress-fill {
  to { --progress: var(--target); }
}

.progress-ring {
  background: conic-gradient(
    blue var(--progress), 
    transparent var(--progress)
  );
  animation: progress-fill 1.5s ease-out forwards;
}
```

```html
<div class="progress-ring" style="--target: 75%"></div>
```

## Why is it useful?

Progress rings are traditionally built using SVG `<circle>` and `stroke-dasharray` math. CSS `conic-gradient()` is a much simpler layout primitive, but gradients cannot natively animate color stop positions. By registering `--progress` as a `<percentage>` via `@property`, the browser's engine knows how to mathematically interpolate the value during a `@keyframes` animation, allowing the gradient to sweep smoothly. This demo provides three variants: a linear countdown, a spring-eased skill fill, and a nested system monitor cluster.
