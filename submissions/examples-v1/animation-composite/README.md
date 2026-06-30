# animation-composite Demo

## What does this do?

Demonstrates the CSS `animation-composition` property — which controls how multiple animations combine when they target the same property. The three modes are:

- **replace** — later animation fully overrides earlier (default)
- **add** — values are added together
- **accumulate** — values are accumulated contextually (additive for numbers, chaining for transforms)

## How is it used?

```css
.element {
  animation:
    scale-up 2s infinite,
    fade-pulse 2s infinite;
  animation-composition: add;
}
```

## Why is it useful?

When composing complex animations from separate sources (e.g., a base entrance animation + a hover effect + a state-driven pulse), animations often fight over the same properties. `animation-composition` lets you control how they merge — preventing one animation from silently overriding another.
