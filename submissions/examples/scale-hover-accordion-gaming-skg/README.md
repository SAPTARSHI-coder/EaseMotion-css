# CSS Scale-Hover Accordion — Gaming Hub Layouts

**Implements enhancement [#56519](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/56519)**

---

## 1. What does this do?

A pure CSS accordion component styled for Gaming Hub interfaces — featuring a scale-up hover effect on closed items for tactile feedback, neon glow borders, per-item accent colours, a pulsing LIVE badge, and smooth panel entry animation. Zero JavaScript required.

---

## 2. How is it used?

### Basic markup

```html
<nav class="game-accordion" aria-label="Tournament schedule">

  <details class="game-item">
    <summary class="game-summary">
      <span class="game-rank" aria-hidden="true">🏆</span>
      <div class="game-info">
        <span class="game-title">World Championship Finals</span>
        <span class="game-meta">32 teams · $250K prize pool</span>
      </div>
      <span class="game-badge badge-live">● LIVE</span>
      <!-- Chevron SVG -->
      <svg class="game-chevron" viewBox="0 0 16 16" fill="none"
           stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M4 6l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </summary>

    <div class="game-panel">
      <p>Panel content here…</p>
      <div class="game-stats">
        <div class="game-stat">
          <span class="game-stat-value">1.4M</span>
          <span class="game-stat-label">Viewers</span>
        </div>
      </div>
      <button class="game-action-btn" type="button">▶ Watch Live</button>
    </div>
  </details>

</nav>
```

### Opening an item by default

Add the `open` attribute to `<details>`:

```html
<details class="game-item" open> … </details>
```

### Badge variants

```html
<span class="game-badge badge-live">● LIVE</span>
<span class="game-badge badge-upcoming">Upcoming</span>
<span class="game-badge badge-completed">Completed</span>
<span class="game-badge badge-hot">🔥 Hot</span>
```

### Per-item accent colours

```html
<details class="game-item accent-magenta"> … </details>  <!-- pink/rose -->
<details class="game-item accent-green">   … </details>  <!-- electric green -->
<!-- default: cyan #00f5ff -->
```

### Action buttons in panel

```html
<button class="game-action-btn" type="button">Play Now</button>
<button class="game-action-btn alt" type="button">View Details</button>
```

### CSS custom properties

```css
.game-accordion {
  --ga-neon:    #00f5ff;   /* primary accent (border, text glow, stats) */
  --ga-border:  rgba(0, 245, 255, 0.15);
  --ga-surface: #111122;   /* item background */
  --ga-scale:   1.025;     /* hover scale factor */
  --ga-speed:   280ms;     /* transition duration */
  --ga-ease:    cubic-bezier(0.34, 1.56, 0.64, 1);  /* spring */
  --ga-radius:  0.5rem;    /* item border-radius */
}
```

---

## 3. Why is it useful?

### Scale-Hover mechanic

The "scale hover" is the defining interaction of this component:

```css
/* Closed item at rest */
.game-item {
  transform: scale(1);
  transition: transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Hover on closed item — slight reach toward user */
.game-item:not([open]):hover {
  transform: scale(1.025);
}

/* Open item — settled, no scale */
.game-item[open] {
  /* scale(1) — inherited from default */
}
```

The spring `cubic-bezier(0.34, 1.56, 0.64, 1)` gives a subtle overshoot that makes the scale feel physical rather than mechanical. The same easing powers EaseMotion's `.ease-bounce-in` class.

### Pure CSS open/close

Uses the browser's native `<details>` / `<summary>` element:
- No JavaScript toggle logic
- Keyboard accessible natively (Enter/Space to toggle)
- Screen readers understand `aria-expanded` state
- `[open]` attribute drives all CSS state changes

```css
/* Neon glow appears only when open */
.game-item[open] { border-color: var(--ga-neon); }

/* Chevron rotates when open */
.game-item[open] .game-chevron { transform: rotate(180deg); }

/* Title glows when open */
.game-item[open] .game-title {
  color: var(--ga-neon);
  text-shadow: 0 0 12px rgba(0, 245, 255, 0.4);
}
```

### Gaming Hub aesthetic techniques

| Effect | CSS used |
|---|---|
| Scale hover | `transform: scale(1.025)` on `:not([open]):hover` |
| Neon border glow | `box-shadow: 0 0 0 1px neon, 0 4px 24px neon` |
| Text glow | `text-shadow: 0 0 12px neon` |
| Scanline texture on header | `repeating-linear-gradient` at 3 px intervals |
| Live badge pulse | `@keyframes live-pulse` — pulsing `box-shadow` ring |
| Panel enter | `@keyframes game-panel-in` — fade + slide-up |
| Stat font | `font-family: 'Courier New'` monospace for data |
| Per-item accent | CSS custom property `--ga-neon` per `<details>` |

### Keyboard accessibility

- `<summary>` elements are natively focusable
- `:focus-visible` ring uses `outline: 2px solid var(--ga-neon)`
- `:focus-within:not([open])` scales closed items on keyboard focus too
- `aria-label` on the `.game-accordion` container for screen readers
- `aria-hidden="true"` on decorative icons and chevrons

### `prefers-reduced-motion`

All scale transforms and animations are disabled:
```css
@media (prefers-reduced-motion: reduce) {
  .game-item:not([open]):hover { transform: none !important; }
  .badge-live { animation: none !important; }
  .game-panel { animation: none !important; }
}
```
Visual states (neon border, text colour) are preserved — only motion is removed.
