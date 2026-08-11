# ease-spotlight-card

A CSS-only radial spotlight hover effect for dark-themed cards — no JavaScript required.

## What does this do?

Introduces an `.ease-spotlight-card` component that reveals a **radial gradient spotlight** on hover. The spotlight smoothly sweeps across the card surface using `@keyframes` animation driven by CSS `@property` registered custom properties (`--x`, `--y`). A `mix-blend-mode: overlay` layer softly illuminates the card content, mimicking a real studio spotlight — the signature interaction seen on premium developer tool landing pages.

## How is it used?

Add the class `.ease-spotlight-card` to any dark card element:

```html
<div class="ease-spotlight-card">
  <h2>Your Card Title</h2>
  <p>Your card description goes here.</p>
</div>
```

### Color Variants

Override the spotlight hue with a variant modifier or your own custom property:

```html
<div class="ease-spotlight-card variant-purple">…</div>
<div class="ease-spotlight-card variant-rose">…</div>
<div class="ease-spotlight-card variant-amber">…</div>
```

### Custom Spotlight Color

```css
.my-card {
  --spotlight-color: hsla(120, 100%, 75%, 0.22); /* green glow */
}
```

## How it works — the CSS technique

### 1. Register animatable custom properties

```css
@property --x {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 50%;
}

@property --y {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 50%;
}
```

Without `@property`, the browser cannot interpolate CSS variables (they are opaque strings). Registering them with a typed `syntax` lets the browser lerp between values inside `@keyframes`.

### 2. Apply a radial-gradient via ::before

```css
.ease-spotlight-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle 180px at var(--x) var(--y),
    hsla(210, 100%, 85%, 0.22),
    transparent 70%
  );
  mix-blend-mode: overlay;
}
```

### 3. Animate --x and --y on hover

```css
@keyframes spotlight-sweep {
  0%   { --x: 50%; --y: 50%; }
  25%  { --x: 80%; --y: 20%; }
  50%  { --x: 20%; --y: 60%; }
  75%  { --x: 75%; --y: 80%; }
  100% { --x: 50%; --y: 50%; }
}

.ease-spotlight-card:hover::before {
  animation: spotlight-sweep 5s linear infinite;
}
```

## Browser Support & Limitations

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| `@property` | 85+ ✅ | 85+ ✅ | 128+ ✅ | 16.4+ ✅ |
| `mix-blend-mode` | All ✅ | All ✅ | All ✅ | All ✅ |
| `radial-gradient` | All ✅ | All ✅ | All ✅ | All ✅ |

**Limitation:** True pixel-perfect cursor tracking (spotlight following the actual mouse position) requires a `mousemove` JavaScript event listener. This CSS-only technique uses `@keyframes` to animate `--x`/`--y`, producing a continuous orbital sweep that gives a convincing approximation without any JS. On browsers without `@property` support the spotlight falls back to a static center-glow on hover — no layout breakage.

## Tech Stack

- HTML5
- CSS (`@property`, `radial-gradient`, `mix-blend-mode`, `@keyframes`, CSS custom properties)
- **Zero JavaScript**

## Accessibility

- All animations and transitions are disabled when `prefers-reduced-motion: reduce` is active.
- Semantic `<article>` elements with descriptive headings.
- ARIA roles and labels on interactive regions.
