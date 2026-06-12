# @property — Registered Custom Properties

## What does this do?

Demonstrates the CSS `@property` at-rule, which registers typed custom properties so the browser can interpolate them in `@keyframes` animations. Three demos: animated conic gradient angle, pulsing border-radius, and color-shifting gradient.

## How is it used?

```css
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.element {
  background: conic-gradient(from var(--angle), blue, red);
  animation: spin 3s linear infinite;
}

@keyframes spin {
  to {
    --angle: 360deg;
  }
}
```

## Why is it useful?

Without `@property`, custom properties used in animations are treated as a single token — the browser cannot interpolate between values. Registering them with `@property` gives them a type (`<angle>`, `<color>`, `<length>`), enabling smooth transitions and keyframe animation. This unlocks powerful gradient, color, and layout animations that were previously only possible with JavaScript, fitting EaseMotion CSS's declarative animation philosophy.
