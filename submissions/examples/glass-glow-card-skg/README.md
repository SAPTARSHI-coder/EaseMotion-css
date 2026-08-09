# Glassmorphic Glow Card with Animated Border

**Implements feature request [#55925](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55925)**

---

## 1. What does this do?

A premium glassmorphic card with a continuously rotating conic-gradient border and a pulsing ambient glow — built entirely in pure CSS using pseudo-elements, `backdrop-filter`, and `@keyframes`.

---

## 2. How is it used?

### Minimal markup

```html
<article class="glass-glow-card">
  <div class="glass-glow-card-inner">
    <p class="glass-glow-card-title">Monthly Revenue</p>
    <p class="glass-glow-card-subtitle">Compared to last month</p>
    <div class="glass-glow-card-stat">
      <span class="glass-glow-card-stat-value">$48,295</span>
      <span class="glass-glow-card-stat-label">USD</span>
    </div>
  </div>
</article>
```

### Colour variants

```html
<!-- Default: purple → blue → cyan -->
<article class="glass-glow-card"> … </article>

<!-- Emerald / teal -->
<article class="glass-glow-card variant-green"> … </article>

<!-- Rose / pink -->
<article class="glass-glow-card variant-rose"> … </article>
```

### Spin speed modifiers

```html
<article class="glass-glow-card spin-slow">  … </article>  <!-- 8 s  -->
<article class="glass-glow-card">            … </article>  <!-- 4 s (default) -->
<article class="glass-glow-card spin-fast">  … </article>  <!-- 1.5 s -->
<article class="glass-glow-card spin-paused">… </article>  <!-- static gradient border -->
```

### Custom palette via CSS variables

```css
.my-card {
  --glow-color-a:  #f59e0b;
  --glow-color-b:  #ef4444;
  --glow-color-c:  #fb923c;
  --glow-color-d:  #f59e0b;
  --spin-duration: 6s;
  --glow-spread:   50px;
  --glass-blur:    20px;
}
```

### Content helper classes

| Class | Role |
|---|---|
| `glass-glow-card-inner` | Content wrapper (required — sets z-index above layers) |
| `glass-glow-card-icon` | Large emoji / icon area |
| `glass-glow-card-title` | Primary heading |
| `glass-glow-card-subtitle` | Secondary supporting text |
| `glass-glow-card-stat` | Metric display row |
| `glass-glow-card-stat-value` | Large number |
| `glass-glow-card-stat-label` | Unit / caption beside the number |
| `glass-glow-card-divider` | Thin horizontal rule |
| `glass-glow-card-footer` | Bottom meta row |
| `glass-glow-card-badge` | Pill tag (change/status indicator) |

---

## 3. Why is it useful?

### Visual behaviour (as requested)

| State | Effect |
|---|---|
| Default | Frosted glass with soft glowing border that rotates at `--spin-duration` |
| Hover | Card lifts 6 px, glow intensifies, outer shadow deepens |
| Border | `conic-gradient` spins 360° via `@keyframes glass-border-spin` |
| Glow | `box-shadow` pulses via `@keyframes glass-glow-pulse` |
| Reduced motion | All animation stops; static gradient border remains |

### How the "animated border" trick works — no wrappers needed

The component uses **two pseudo-elements** on the card itself:

```
  ┌─────────────────────────────────┐
  │  .glass-glow-card               │  position:relative, overflow:hidden
  │                                 │
  │  ::before  (z-index: 0)         │  oversized rotating conic-gradient
  │  ::after   (z-index: 1)         │  inset glass rectangle (masks border)
  │  .glass-glow-card-inner (z:2)   │  real content
  └─────────────────────────────────┘
```

1. `::before` is scaled to `inset: -50%` — larger than the card — and holds the full conic-gradient. It spins continuously.
2. `::after` sits `inset: var(--border-width)` (default 2 px) on every side and repaints the glass surface, hiding the gradient everywhere except the 2 px perimeter strip.
3. The result looks like a gradient-coloured border without any extra HTML elements.

### Pure CSS — no JavaScript
- No DOM manipulation, no scroll listeners, no JS frameworks
- `conic-gradient` + `backdrop-filter` + `@keyframes` — all natively supported in modern browsers
- Fully customisable via CSS custom properties
- `prefers-reduced-motion` respected — all animations stop, static gradient border remains visible
