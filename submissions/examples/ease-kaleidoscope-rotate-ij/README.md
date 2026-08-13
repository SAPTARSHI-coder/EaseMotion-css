# Kaleidoscope Rotate

Eight mirror petals around a glowing core that spin together like a kaleidoscope wheel.

## How is it used?

Each petal is a CSS triangle (`border-style: solid` with a colored bottom border) rotated to its own angle. The wheel then runs one shared turn keyframe:

```css
.wheel.spinning {
  animation: wheel-turn 6s linear infinite;
}
@keyframes wheel-turn {
  to { transform: rotate(360deg); }
}
```

Color is set per-petal with a `--c` custom property consumed by the triangle border, so adding a petal is one element plus one rule. The core pulses with its own scale/brightness keyframe on top of the wheel's rotation.

## Why is it useful?

This shows two layers of motion at once — the whole group rotating while a child pulses — which is the standard pattern for any orbital system (spinners, dashboards' orbiting badges, sun/planet widgets). CSS triangles via borders remain a dependency-free way to build arrowheads, speech markers, and gauge pointers.
