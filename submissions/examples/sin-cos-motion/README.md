# CSS sin() / cos() Motion

## What does this do?

Demonstrates CSS trigonometric functions `sin()` and `cos()` inside `@keyframes` to create organic, natural motion — floating, orbiting, and figure-8 paths — using only CSS custom properties and math.

## How is it used?

```css
@property --t {
  syntax: "<number>"; initial-value: 0; inherits: false;
}

@keyframes tick {
  from { --t: 0; } to { --t: 360; }
}

.element {
  animation: tick 3s linear infinite;
  translate: 0 calc(sin(var(--t)) * 20px);
}
```

## Why is it useful?

Creating organic, curved motion paths previously required JavaScript animation libraries or complex SVG animations. CSS `sin()` and `cos()` bring this capability natively — letting you derive smooth oscillation, circular orbits, and wave patterns from a single counter. This aligns with EaseMotion CSS's philosophy of making complex animations simple, readable, and dependency-free.
