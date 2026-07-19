# Animated Gantt Timeline Bar Collection

A pure-CSS animated Gantt chart component for project timelines. Task bars grow in from the left on mount, progress fills animate width, a pulsing today line marks the current date, conflict bars flash red, and milestone diamonds pop in. All visual states are CSS-driven via class toggles and inline `style` for position/width — date-to-position maths is the consuming app's responsibility.

---

## Preview

| State | Behaviour |
|-------|-----------|
| Mount | Bars grow in left-to-right via `scaleX(0 → 1)`, staggered per row |
| Progress | Inner fill animates `width: 0 → N%` on load |
| Hover | Bar brightens + scales vertically; tooltip pops |
| Conflict | Red outline + repeating background flash `@keyframes` |
| Today line | Soft repeating `box-shadow` pulse on the vertical marker |
| Milestone | Diamond pops in with `rotate(45deg) scale(0 → 1)` |

---

## Files

```
submissions/examples/gantt-timeline-collection/
├── demo.html    ← self-contained Q3 sprint plan demo
├── style.css    ← all animation classes
└── README.md
```

---

## Classes

| Class | Description |
|-------|-------------|
| `ease-gantt-chart` | Timeline area container; holds rows + today line |
| `ease-gantt-row` | Single task row; hover bg transition + grid lines |
| `ease-gantt-bar` | Duration bar; `scaleX` grow-in + hover brighten |
| `ease-gantt-bar-progress` | Inner progress fill; `width` animates from 0 |
| `ease-gantt-bar-conflict` | Red outline + repeating flash on scheduling conflicts |
| `ease-gantt-today-line` | Vertical current-date marker; repeating pulse animation |
| `ease-gantt-milestone` | Diamond marker; pop-in on mount, scale on hover |

### Bar colour variants
`ease-gantt-bar-blue` · `ease-gantt-bar-green` · `ease-gantt-bar-amber` · `ease-gantt-bar-purple` · `ease-gantt-bar-rose`

---

## Usage

```html
<div class="ease-gantt-chart">

  <!-- Today line — position via inline left % -->
  <div class="ease-gantt-today-line" style="left: 55%"></div>

  <!-- Task row -->
  <div class="ease-gantt-row">
    <div class="ease-gantt-bar ease-gantt-bar-blue"
         style="left: 5%; width: 30%"
         data-tooltip="Discovery · Jul 1–21 · 100%">
      <!-- Progress fill — set width via inline style -->
      <div class="ease-gantt-bar-progress" style="width: 100%"></div>
      <span class="ease-gantt-bar-label">Discovery</span>
    </div>
  </div>

  <!-- Conflict row -->
  <div class="ease-gantt-row">
    <div class="ease-gantt-bar ease-gantt-bar-rose ease-gantt-bar-conflict"
         style="left: 37%; width: 22%"
         data-tooltip="⚠ Hotfix — overlaps Frontend Dev">
      <span class="ease-gantt-bar-label">Hotfix ⚠</span>
    </div>
  </div>

  <!-- Milestone -->
  <div class="ease-gantt-row">
    <div class="ease-gantt-milestone" style="left: calc(88% - 7px)"></div>
  </div>

</div>
```

### Positioning bars

Bar `left` and `width` are percentages of the chart width, computed from task dates:

```js
const chartStart = new Date('2026-07-01');
const chartEnd   = new Date('2026-09-30');
const totalMs    = chartEnd - chartStart;

function toPercent(date) {
  return ((date - chartStart) / totalMs) * 100;
}

bar.style.left  = toPercent(task.start) + '%';
bar.style.width = (toPercent(task.end) - toPercent(task.start)) + '%';
```

This calculation is the consuming app's responsibility.

---

## Animation Details

### Bar grow-in — `ease-gantt-bar-grow`
```css
@keyframes ease-gantt-bar-grow {
  from { transform: scaleX(0); opacity: 0; }
  to   { transform: scaleX(1); opacity: 1; }
}
/* transform-origin: left center — so it grows from the start date */
```

### Progress fill — `ease-gantt-progress-fill`
```css
@keyframes ease-gantt-progress-fill {
  from { width: 0; }
  /* to: set via inline style width */
}
```

### Conflict flash — `ease-gantt-conflict`
```css
@keyframes ease-gantt-conflict {
  0%, 100% { background-color: inherit; }
  50%       { background-color: var(--ease-gantt-conflict-flash); }
}
/* Plays 3 times, 1.2s each — draws attention then settles */
```

### Today line pulse — `ease-gantt-today-pulse`
```css
@keyframes ease-gantt-today-pulse {
  0%, 100% { box-shadow: 0 0 0 0   var(--ease-gantt-today-pulse); }
  50%       { box-shadow: 0 0 0 4px var(--ease-gantt-today-pulse); }
}
```

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-gantt-bar-blue:    #6366f1;
  --ease-gantt-bar-green:   #10b981;
  --ease-gantt-conflict-border: #ef4444;
  --ease-gantt-today-color: #6366f1;
}
```

---

## Accessibility

- `data-tooltip` on bars for hover labels
- `title` on milestone for screen readers
- `prefers-reduced-motion` disables all animations; bars and progress are fully visible immediately

---

## Browser Support

Chrome 88+, Firefox 85+, Safari 14+. Uses `transform`, `@keyframes`, CSS Grid, and CSS custom properties.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#18935](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/18935)