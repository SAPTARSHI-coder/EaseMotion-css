# Animated Border Pulse

A pure CSS loading card component featuring a smooth, infinitely-pulsing animated border with a matching glow shadow. Six variants cover every use case — from urgent high-frequency pulses to calm ambient cycles and full-spectrum rainbow cycling.

---

## 1. What does this do?

The **Animated Border Pulse** component animates a card's `border-color` and `box-shadow` together using a CSS `@keyframes` animation, creating a rhythmic glowing pulse effect with no JavaScript required.

The border transitions between two accent colors while the surrounding box-shadow expands and contracts in sync, producing a soft halo that appears to breathe. Six modifier classes cover:

| Class | Effect |
|---|---|
| *(none)* | Default violet pulse, 1.8s cycle |
| `border-pulse-card--fast` | High-urgency 0.8s cycle |
| `border-pulse-card--slow` | Ambient 3s breathing cycle |
| `border-pulse-card--blue` | Indigo-to-sky blue color theme |
| `border-pulse-card--green` | Emerald success color theme |
| `border-pulse-card--rainbow` | Full hue-rotation spectrum, 4s cycle |

All six variants include:
- Animated pulsing border
- Synchronized soft glowing box-shadow
- `ease-in-out` timing for natural motion
- Hover lift (`translateY`) transition
- A spinning mini-badge, progress bar, and shimmer sweep — fully in CSS

---

## 2. How is it used?

### Step 1 — Include the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

### Step 2 — Add the base card

```html
<div class="border-pulse-card">
  Loading...
</div>
```

### Step 3 — Choose a variant with a modifier class

```html
<!-- Speed variants -->
<div class="border-pulse-card border-pulse-card--fast">Fast (0.8s)</div>
<div class="border-pulse-card border-pulse-card--slow">Slow (3s)</div>

<!-- Color theme variants -->
<div class="border-pulse-card border-pulse-card--blue">Blue</div>
<div class="border-pulse-card border-pulse-card--green">Green</div>
<div class="border-pulse-card border-pulse-card--rainbow">Rainbow</div>
```

### Customise via CSS variables

All design tokens are exposed as CSS custom properties on `:root`. Override them on any selector to create your own theme without touching the core component:

```css
.my-custom-card {
  --pulse-color-a:   #dc2626;
  --pulse-color-b:   #f87171;
  --pulse-glow-a:    rgba(220, 38, 38, 0.55);
  --pulse-glow-b:    rgba(220, 38, 38, 0.25);
  --pulse-duration:  1.2s;
}
```

```html
<div class="border-pulse-card my-custom-card">Custom red theme</div>
```

### Full inner-card structure (optional)

```html
<div class="border-pulse-card">
  <div class="card__header">
    <div class="card__icon">⚡</div>
    <span class="card__badge">
      <span class="card__badge-dot"></span>
      Loading
    </span>
  </div>
  <h2 class="card__title">Fetching data</h2>
  <p class="card__body">Please wait while we pull the latest results.</p>
  <div class="card__footer">
    <div class="card__progress-track">
      <div class="card__progress-bar" style="width: 65%"></div>
    </div>
    <span class="card__progress-label">65%</span>
  </div>
</div>
```

---

## 3. Why is it useful?

Loading states are one of the highest-friction moments in any UI. A static spinner is forgettable; an intrusive full-screen overlay breaks context. The **Animated Border Pulse** sits at exactly the right level of visual weight — noticeable enough to communicate activity, restrained enough not to distract.

**Key advantages:**

- **Pure CSS** — zero JavaScript, zero dependencies, zero runtime cost. It works immediately in any HTML page.
- **Accessible by default** — respects `prefers-reduced-motion` by disabling the animation and falling back to a static border glow. The spinning badge dot is hidden with `aria-hidden` so screen readers describe the card content, not the decoration.
- **Composable** — modifier classes stack cleanly. Speed and color variants are independent axes, so `border-pulse-card--fast border-pulse-card--green` is a valid combination.
- **Themeable** — all visual values are CSS custom properties. Changing the pulse to match a brand color takes one line of CSS with no risk of breaking other variants.
- **Hover micro-interaction** — `translateY(-5px)` on hover adds a tactile lift that makes each card feel responsive and polished even before any data loads.

**When to reach for it:**
- Dashboard widgets fetching live data
- File upload / download progress cards
- API call or build pipeline status panels
- Background sync indicators
- Any card-based UI that needs a non-blocking "pending" state

---

## Files

```
animated-border-pulse/
├── demo.html    # Self-contained demo showcasing all six variants
├── style.css    # Component stylesheet with CSS variables and comments
└── README.md    # This file
```

## Browser support

Works in all modern browsers (Chrome 80+, Firefox 75+, Safari 14+, Edge 80+). Uses only `@keyframes`, CSS custom properties, and `animation` — no experimental features.

---

*Submitted to [EaseMotion CSS](https://github.com/EaseMotion) as part of GSSoC. Pure HTML & CSS — no external libraries.*