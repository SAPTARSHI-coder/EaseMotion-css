# CSS `@property` Playground

An interactive educational demo showcasing the CSS `@property` at-rule — a CSS Baseline 2024 feature that registers custom properties with typed syntax, allowing CSS to animate and transition values that were previously uninterpolatable.

## What This Demo Shows

Six real-world `@property` use cases, each with live code:

| Demo | Registers | What It Enables |
|---|---|---|
| **Animated Gradient Border** | `--angle` as `<angle>` | Smooth conic gradient border rotation |
| **Hue Rotation** | `--hue` as `<number>` | Full-spectrum color cycling |
| **Number Counter** | `--num` as `<integer>` | Discrete integer animation (0→24,892) |
| **Per-Axis Transforms** | `--x`, `--y` as `<length-percentage>` | Independent X/Y animation without string manipulation |
| **Gradient Text Flow** | `--gradient-pos` as `<length-percentage>` | Smooth gradient position animation |
| **Glass Card Glow** | `--glow` as `<number>` | Pulsing box-shadow intensity |

## Why `@property` Matters

Without `@property`:

```css
/* This does NOT animate smoothly — CSS doesn't know --angle is an angle */
.card {
  --angle: 0deg;
  background: conic-gradient(from var(--angle), #6c63ff, #f06292);
  animation: spin 3s linear infinite;
}
@keyframes spin { to { --angle: 360deg; } }
```

With `@property`:

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

/* Now it animates smoothly — CSS knows how to interpolate angles */
.card {
  --angle: 0deg;
  border-image: conic-gradient(from var(--angle), #6c63ff, #f06292) 1;
  animation: spin 3s linear infinite;
}
@keyframes spin { to { --angle: 360deg; } }
```

The registration tells CSS: "This property is an angle, and here's how to interpolate it."

## Syntax Types Demonstrated

| Syntax | Use Case |
|---|---|
| `<angle>` | Gradient borders, rotation indicators |
| `<number>` | Hue cycling, opacity transitions, glow intensity |
| `<integer>` | Counters, step-based animations, `counter()` integration |
| `<length-percentage>` | Per-axis transforms, gradient positions |

## Number Counter with View Timeline

The counter cards use `@property --num` as `<integer>` combined with `animation-timeline: view()` to animate numbers from 0 to their target value as they scroll into view:

```css
@property --num {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}

.counter::after {
  counter-reset: num var(--num);
  content: counter(num);
  animation: count-up 2s ease-out forwards;
  animation-timeline: view();
}

@keyframes count-up {
  to { --num: var(--to); }
}
```

## Accessibility

- Semantic HTML5 landmarks
- `:focus-visible` on all interactive elements
- `prefers-reduced-motion: reduce` disables all animations
- `prefers-contrast: more` thickens borders
- `forced-colors: active` renders correctly in Windows High Contrast Mode
- Print styles for clean output

## Browser Support

`@property` is Baseline 2024:
- Chrome 85+, Edge 85+, Safari 16.4+, Firefox 128+

`animation-timeline: view()` (used in counter) is Chrome 115+, Edge 115+, not yet in Firefox/Safari. Counters fall back to static display.

## Files

- `demo.html` — Six interactive demos with inline code snippets
- `style.css` — Complete stylesheet with all `@property` registrations
- `README.md` — This documentation
