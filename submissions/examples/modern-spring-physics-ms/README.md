# Modern Spring Physics Presets

Adds reusable CSS spring timing presets that make UI transitions feel bouncy, snappy, gentle, stiff, or wobbly without JavaScript.

## How to Use

Apply one of the spring preset classes to any element that animates with transforms, opacity, or layout-friendly motion:

```html
<button class="spring-card spring-bouncy">Bouncy spring</button>
<button class="spring-card spring-snappy">Snappy spring</button>
<button class="spring-card spring-gentle">Gentle spring</button>
```

The demo defines these custom properties:

```css
:root {
  --spring-bouncy: linear(0, 0.18 5%, 0.72 18%, 1.08 32%, 0.98 48%, 1.01 65%, 1 100%);
  --spring-snappy: linear(0, 0.42 10%, 0.92 24%, 1.04 38%, 1 58%, 1 100%);
  --spring-gentle: linear(0, 0.16 12%, 0.45 28%, 0.78 48%, 0.94 68%, 1 100%);
  --spring-stiff: linear(0, 0.7 16%, 1.03 30%, 0.99 46%, 1 100%);
  --spring-wobbly: linear(0, 0.22 8%, 0.95 25%, 1.16 42%, 0.92 58%, 1.04 78%, 1 100%);
}
```

## Why It Is Useful

EaseMotion CSS focuses on readable, composable animation utilities. These presets package expressive spring-like motion into simple CSS variables, so interfaces can feel tactile while staying dependency-free and easy to customize.
