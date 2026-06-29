# Animated Heatmap Calendar Grid

A GitHub-style contribution heatmap with pure CSS animations. Day cells reveal left-to-right with a staggered scale + fade entrance, colour intensity is driven by five level classes, and a CSS-only tooltip pops up on hover showing the date and value. No JavaScript is needed for any of the visual states — JS is limited to mapping activity data to level classes and setting `animation-delay`.

---

## Preview

| State | Behaviour |
|-------|-----------|
| Mount | Cells reveal column-by-column via staggered `animation-delay` |
| Level 0–4 | Background intensifies from grey → deep indigo |
| Hover | Cell scales up 1.4× + purple glow ring + tooltip pops |
| Tooltip | CSS-only via `::after` + `data-tooltip`; fade + scale entrance |

---

## Files

```
submissions/examples/heatmap-calendar-collection/
├── demo.html    ← self-contained 12-month heatmap (mock data, no API)
├── style.css    ← all animation classes
└── README.md
```

---

## Classes

| Class | Description |
|-------|-------------|
| `ease-heatmap-grid` | CSS grid container; `grid-auto-flow: column` for week columns |
| `ease-heatmap-cell` | Individual day square; hover scale + glow ring |
| `ease-heatmap-cell-fade-in` | Staggered scale + fade entrance via `@keyframes ease-heatmap-reveal` |
| `ease-heatmap-level-0` | No activity — lightest background |
| `ease-heatmap-level-1` | Low activity |
| `ease-heatmap-level-2` | Medium activity |
| `ease-heatmap-level-3` | High activity |
| `ease-heatmap-level-4` | Maximum activity — deepest colour |
| `ease-heatmap-tooltip-pop` | CSS-only tooltip via `::after` + `data-tooltip` attribute |

---

## Usage

```html
<div class="ease-heatmap-grid">
  <div class="ease-heatmap-cell ease-heatmap-level-0
              ease-heatmap-tooltip-pop"
       data-tooltip="Jan 1: 0 contributions"
       aria-label="Jan 1: 0 contributions"
       role="gridcell">
  </div>
  <div class="ease-heatmap-cell ease-heatmap-level-2
              ease-heatmap-tooltip-pop"
       data-tooltip="Jan 2: 4 contributions">
  </div>
  <div class="ease-heatmap-cell ease-heatmap-level-4
              ease-heatmap-tooltip-pop"
       data-tooltip="Jan 3: 14 contributions">
  </div>
</div>
```

### Staggered entrance (minimal JS)

```js
cells.forEach((cell, i) => {
  const week = Math.floor(i / 7);          // column index
  cell.style.animationDelay = `${week * 6}ms`; // 6ms per column
  cell.classList.add('ease-heatmap-cell-fade-in');
});
```

### Mapping data to levels

```js
function levelFromCount(n) {
  if (n === 0)  return 0;
  if (n <= 2)   return 1;
  if (n <= 5)   return 2;
  if (n <= 10)  return 3;
  return 4;
}

cell.classList.add(`ease-heatmap-level-${levelFromCount(count)}`);
```

---

## Animation Details

### Cell reveal — `ease-heatmap-reveal`
```css
@keyframes ease-heatmap-reveal {
  from { opacity: 0; transform: scale(0.5); }
  to   { opacity: 1; transform: scale(1); }
}
```

Applied via `ease-heatmap-cell-fade-in` + inline `animation-delay` per column.

### Hover scale + glow
```css
.ease-heatmap-cell:hover {
  transform: scale(1.4);
  box-shadow: 0 0 0 2px var(--ease-heatmap-cell-hover-ring);
}
```

### Tooltip pop — pure CSS
```css
.ease-heatmap-tooltip-pop[data-tooltip]::after {
  content: attr(data-tooltip);
  opacity: 0;
  transform: translateX(-50%) translateY(4px) scale(0.9);
  transition: opacity 160ms ease, transform 160ms ease;
}
.ease-heatmap-tooltip-pop[data-tooltip]:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}
```

No JavaScript needed for tooltips.

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-heatmap-level-0: #f1f5f9;
  --ease-heatmap-level-1: #c7d2fe;
  --ease-heatmap-level-2: #818cf8;
  --ease-heatmap-level-3: #6366f1;
  --ease-heatmap-level-4: #3730a3;
}
```

Swap to green for GitHub-style, orange for streaks, or red for heatmaps.

---

## Accessibility

- `role="grid"` on the container, `role="gridcell"` + `aria-label` on each cell
- `data-tooltip` doubles as the accessible label
- `prefers-reduced-motion` disables all animations; cells are fully visible immediately

---

## Browser Support

Chrome 88+, Firefox 85+, Safari 14+. Uses CSS Grid, `@keyframes`, `transform`, and CSS custom properties.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#18933](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/18933)