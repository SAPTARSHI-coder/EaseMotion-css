# CSS Motion Path — Animate Elements Along Any Shape

A production-ready demonstration of **CSS Motion Path** — animate elements along circles, rays, rectangles, and custom SVG paths using `offset-path`, `offset-distance`, `offset-rotate`, and `offset-anchor`. Zero JavaScript, GPU-accelerated motion.

## What is CSS Motion Path?

CSS Motion Path lets you move elements along any geometric path:

- **`offset-path: circle(radius)`** — Circular orbit with configurable radius
- **`offset-path: ray(angle)`** — Linear path at any angle with optional `contain`
- **`offset-path: path('M...')`** — Any SVG path string: curves, arcs, zig-zags, spirals
- **`offset-path: rect(top right bottom left)`** — Rectangle with optional `round` corners
- **`offset-distance`** — Where on the path the element sits (0% to 100%, animatable)
- **`offset-rotate`** — How the element orients: `auto` (follow path tangent), `0deg` (stay upright), `reverse` (face backward)
- **`offset-anchor`** — Which point of the element anchors to the path

## Demo Features

### Path Type Demonstrations
- **`circle()`** — Element orbits a circular path with visible track
- **`ray()`** — Element shoots along a 45° angled ray with dashed guide line
- **`path()`** — Element follows a smooth cubic Bézier curve (SVG path)
- **`rect()`** — Element traces a rounded rectangle — perfect for progress indicators

### `offset-rotate` Options
- **`auto`** — Triangles rotate to follow path tangent (natural curve-following)
- **`0deg`** — Triangles stay upright regardless of path direction
- **`reverse 0deg`** — Triangles face backward along the path

### Real-World Patterns
- **Loading Spinner** — Dot orbits a circle, smooth and GPU-accelerated
- **Pulsing Progress Ring** — Combines motion path with scale animation for a premium indicator
- **Feature Orbit** — Three labels (Fast, Secure, Scalable) orbit a central icon — great for hero sections
- **Pendulum Swing** — Classic pendulum along an arc path with alternating direction

## Accessibility

- All motion paths respect `prefers-reduced-motion` — animations freeze at 25% offset
- Decorative animation elements marked with `aria-hidden="true"`
- Loading spinners marked with `role="img"` and descriptive `aria-label`
- Skip-to-content link
- No auto-playing motion that could trigger vestibular disorders

## CSS Features Used

| Feature | Usage |
|---------|-------|
| `offset-path: circle()` | Circular orbit, spinner, progress ring, feature orbit |
| `offset-path: ray()` | Linear ray animation |
| `offset-path: path()` | Custom SVG path (cubic Bézier), pendulum arc |
| `offset-path: rect()` | Rectangle path with rounded corners |
| `offset-distance` | All motion path animations |
| `offset-rotate` | `auto`, `0deg`, `reverse` variants |
| `oklch()` | Design tokens, all colors |
| `@keyframes` | 8 custom keyframe animations |
| `@media (prefers-reduced-motion)` | Disables all motion path animations |
| `@media (prefers-color-scheme)` | Dark mode |
| `@media (forced-colors)` | Windows High Contrast |
| `@media print` | Print styles |

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 55+ ✅ |
| Firefox | 72+ ✅ |
| Safari | 16.0+ ✅ |
| Edge | 55+ ✅ |
| Opera | 42+ ✅ |

**Excellent** browser support — CSS Motion Path has been available for years and is safe for production use in decorative animations.

## Zero JavaScript

**Zero JavaScript.** All 11 motion path animations are pure CSS `@keyframes` driving `offset-distance`. No JS animation libraries, no `requestAnimationFrame`, no DOM manipulation.

## Files

- `demo.html` — Semantic HTML with comprehensive motion path demos
- `style.css` — Production-ready stylesheet with 8 keyframe animations
- `README.md` — This documentation
