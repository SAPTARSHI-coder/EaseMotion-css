# Animated Radar Chart Collection

A pure CSS/SVG animated radar (spider) chart for comparing multiple metrics across several dimensions. The data polygon draws in via `stroke-dashoffset`, fills fade in after the stroke completes, vertex dots pop in with staggered delays, and hovering a shape brightens its fill. No JavaScript required — computing polygon coordinates from data values is the consuming app's responsibility.

---

## Preview

| State | Behaviour |
|-------|-----------|
| Mount | SVG fades + scales in; edges draw via `stroke-dashoffset` |
| Fill | Polygon fill fades in after stroke draw completes |
| Points | Vertex dots pop in staggered after the shape draws |
| Hover | Shape fill brightens via CSS `transition` |
| Multi-shape | Overlay two or three shapes with colour variants |

---

## Files

```
submissions/examples/radar-chart-collection/
├── demo.html    ← two live radar charts (6-axis skills, 5-axis product ratings)
├── style.css    ← all animation classes
└── README.md
```

---

## Classes

| Class | Description |
|-------|-------------|
| `ease-radar-chart` | SVG container; fade + scale entrance via `@keyframes ease-radar-mount` |
| `ease-radar-grid` | Concentric polygon rings; low-emphasis static styling |
| `ease-radar-axis` | Axis spoke lines; dashed, subtle colour |
| `ease-radar-shape` | Data polygon; draws in via `stroke-dashoffset` + fill fade |
| `ease-radar-shape-1` | Indigo colour variant |
| `ease-radar-shape-2` | Rose colour variant |
| `ease-radar-shape-3` | Amber colour variant |
| `ease-radar-shape-hover` | Add to brighten a shape programmatically |
| `ease-radar-point` | Vertex dot; staggered pop-in, glow on hover |
| `ease-radar-point-1/2/3` | Colour variants matching their shape |

---

## Usage

```html
<svg class="ease-radar-chart" viewBox="0 0 300 300"
     xmlns="http://www.w3.org/2000/svg"
     role="img" aria-label="Radar chart">

  <!-- Grid rings -->
  <polygon class="ease-radar-grid" points="150,126 163,133 163,147 150,154 137,147 137,133" />
  <polygon class="ease-radar-grid" points="150,78  189,99  189,141 150,162 111,141 111,99" />
  <polygon class="ease-radar-grid" points="150,30  215,65  215,135 150,170 85,135  85,65" />

  <!-- Axis spokes -->
  <line class="ease-radar-axis" x1="150" y1="150" x2="150" y2="30" />
  <line class="ease-radar-axis" x1="150" y1="150" x2="215" y2="65" />

  <!-- Axis labels -->
  <text class="ease-radar-label" x="150" y="18">CSS</text>
  <text class="ease-radar-label" x="226" y="60">JS</text>

  <!-- Data shape (indigo) -->
  <polygon
    class="ease-radar-shape ease-radar-shape-1"
    points="150,42 204,74 208,131 150,158 100,138 97,72"
  />

  <!-- Vertex dots -->
  <circle class="ease-radar-point ease-radar-point-1" cx="150" cy="42" r="4" />
  <circle class="ease-radar-point ease-radar-point-1" cx="204" cy="74" r="4" />

</svg>
```

### Computing polygon points

For a chart with `n` axes and centre `(cx, cy)`:

```js
function polarToCart(cx, cy, radius, angleRad) {
  return {
    x: cx + radius * Math.sin(angleRad),
    y: cy - radius * Math.cos(angleRad),
  };
}

// Example: 6 axes, radius 120, value normalised 0–1
const points = values.map((v, i) => {
  const angle = (2 * Math.PI * i) / values.length;
  return polarToCart(150, 150, v * 120, angle);
});
const pointsAttr = points.map(p => `${p.x},${p.y}`).join(' ');
```

This computation is the consuming app's responsibility — the component only renders the resulting polygon.

---

## Animation Details

### Polygon draw-in — `ease-radar-draw`
```css
.ease-radar-shape {
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  animation: ease-radar-draw 900ms cubic-bezier(0.4,0,0.2,1) forwards;
}
@keyframes ease-radar-draw {
  to { stroke-dashoffset: 0; }
}
```

### Fill fade-in — `ease-radar-fill-in`
```css
animation:
  ease-radar-draw    900ms ease forwards,
  ease-radar-fill-in 600ms ease 500ms both;

@keyframes ease-radar-fill-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

### Point pop-in — `ease-radar-point-in`
```css
@keyframes ease-radar-point-in {
  from { transform: scale(0); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
/* nth-of-type delays: 850ms, 900ms, 950ms … per point */
```

### Hover brighten
Pure CSS — no JS needed:
```css
.ease-radar-shape-1:hover {
  fill: var(--ease-radar-shape1-hover-fill);
  transition: fill 280ms ease;
}
```

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-radar-shape1-stroke: #6366f1;
  --ease-radar-shape1-fill:   rgba(99,102,241,0.15);
  --ease-radar-shape1-hover-fill: rgba(99,102,241,0.28);
  --ease-radar-shape2-stroke: #f43f5e;
  --ease-radar-shape3-stroke: #f59e0b;
}
```

---

## Accessibility

- `role="img"` + `aria-label` on each SVG
- `prefers-reduced-motion` disables all animations; `stroke-dashoffset` resets to `0` and `opacity` to `1` so charts are always fully visible

---

## Browser Support

Chrome 88+, Firefox 85+, Safari 14+. Uses `stroke-dashoffset` animation, `transform-box: fill-box`, and CSS custom properties — all widely supported.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#18931](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/18931)