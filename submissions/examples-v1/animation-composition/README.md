# animation-composition Demo

## What does this do?

Demonstrates the CSS `animation-composition` property — which controls how multiple animations combine when they target the same property (`replace`, `add`, or `accumulate`).

## How is it used?

```css
.element {
  animation: scale-up 2s infinite, fade-pulse 2s infinite;
  animation-composition: add; /* or replace | accumulate */
}
```

## Why is it useful?

When composing complex animations from separate sources (e.g., a base entrance animation + a hover effect + a state-driven pulse), animations often fight over the same properties. `animation-composition` lets you control how they merge — preventing one animation from silently overriding another. This is essential for building maintainable, layered animation systems, which aligns with EaseMotion CSS's goal of readable and composable animation utilities.
