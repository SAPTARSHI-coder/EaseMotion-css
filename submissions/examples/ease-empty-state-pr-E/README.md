# ease-empty-state-pr-E

A themed empty state component for EaseMotion CSS.

---

## 1. What does this do?

Renders a centered, animated empty state card with an icon, title, description, primary action button, and an optional secondary link — for moments when a list, inbox, or collection has no content to show.

---

## 2. How is it used?

```html
<!-- Basic structure -->
<div class="empty-state empty-state--search">

  <div class="empty-state-icon-wrap">
    <div class="empty-state-icon">🔍</div>
  </div>

  <h2 class="empty-state-title">No results found</h2>
  <p class="empty-state-desc">
    Try different keywords or clear your filters.
  </p>

  <div class="empty-state-actions">
    <button class="empty-state-btn empty-state-btn--primary">Try a new search</button>
    <button class="empty-state-link">Clear all filters</button>
  </div>

</div>
```

### Modifier classes

| Class                   | Description                                   |
|-------------------------|-----------------------------------------------|
| `empty-state--search`   | Purple accent — no search results             |
| `empty-state--inbox`    | Green accent — empty inbox                    |
| `empty-state--favs`     | Amber accent — no favourites                  |

---

## 3. Why is it useful?

Empty states are one of the most-overlooked UI moments. A blank screen feels broken; a well-designed empty state turns the moment into an invitation to act — exactly what EaseMotion CSS's philosophy describes: *"An empty screen is an invitation to act."*

This component follows the framework's core principles:

- **Human-readable** — class names like `empty-state-title`, `empty-state-icon` describe exactly what they are.
- **Animation-first** — the icon floats, a pulse ring breathes behind it, each card entrance is staggered, and a shimmer line runs across the top edge — all via CSS keyframes, zero JavaScript.
- **Composable** — swap the modifier class (`--search`, `--inbox`, `--favs`) to change the full colour theme without touching any other markup.
- **Accessible** — `aria-label` on the icon wrapper, `prefers-reduced-motion` respected, semantic heading hierarchy.

### Animations included

| Animation           | Trigger           | Effect                                       |
|---------------------|-------------------|----------------------------------------------|
| `em-fade-up`        | Card entrance     | Slides up + fades in, staggered per card     |
| `em-scale-in`       | Icon entrance     | Scales from 72% with bounce easing           |
| `em-icon-float`     | Icon — looping    | Gentle vertical float (3.6 s period)         |
| `em-icon-pulse-ring`| Icon ring — loop  | Expanding ring fades out                     |
| `em-shimmer`        | Top border        | Gradient sweeps left → right                 |
| `em-dot-bounce`     | Search dots       | Three bouncing dots (staggered)              |

---

## Files

```
ease-empty-state-pr-E/
├── demo.html   ← self-contained, open directly in browser
├── style.css   ← all component styles + keyframes
└── README.md   ← this file
```

---

*Submitted for EaseMotion CSS — GSSoC 2026*