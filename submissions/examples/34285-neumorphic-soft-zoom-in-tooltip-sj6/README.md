# Neumorphic Soft Zoom-In Tooltip

A pure CSS, zero-dependency tooltip built for **soft-UI (neumorphism)**
surfaces. The tooltip is a raised card cut from the same clay as the page —
it *breathes in* with a small, calm zoom and floats above the surface on a
deeper dual shadow. Reveal is driven entirely by `:hover` and
`:focus-visible`, so mouse and keyboard users get the same experience with
zero JavaScript.

Resolves Issue: #34285

## ✨ Features

- **Gentle Zoom-In** — scales from `--nm-tt-scale-from` (default `0.72`) to
  full size with a faint overshoot; deliberately restrained motion that
  matches the calm of neumorphic design. Hide uses a quicker `ease-in` exit.
- **True soft-UI material** — one `--nm-surface` color everywhere; depth
  comes only from paired light/dark shadows (`--nm-raised`,
  `--nm-floating`, `--nm-pressed`). The trigger key *presses into* the clay
  on hover — classic neumorphic feedback.
- **Soft diamond pointer** — the arrow is a rotated, shadow-matched square
  of the same surface, so the tooltip stays arrow-consistent with the theme
  (no hard CSS-border triangles).
- **Zero JavaScript** — sibling-selector engine
  (`.nm-key:hover + .nm-tip`), CSS transitions only.
- **Keyboard accessible** — real `<button>` triggers with `aria-describedby`
  → `role="tooltip"` and a crisp 3px accent `:focus-visible` halo.
- **Tunable via custom properties** — start scale, duration, show curve,
  and exit curve are all exposed on `:root`.
- **Responsive & motion-safe** — keys wrap on narrow screens, tooltip width
  caps at `min(220px, 78vw)`, and `prefers-reduced-motion` replaces the
  zoom with an instant reveal.

## 🔧 Custom Properties

| Property             | Default                            | Role                     |
| -------------------- | ---------------------------------- | ------------------------ |
| `--nm-tt-scale-from` | `0.72`                             | Starting scale           |
| `--nm-tt-duration`   | `260ms`                            | Breathe-in time          |
| `--nm-tt-ease`       | `cubic-bezier(0.3, 1.24, 0.6, 1)`  | Show curve (soft pop)    |
| `--nm-tt-ease-exit`  | `ease-in`                          | Hide curve               |

## 🚀 Usage

```html
<span class="nm-anchor">
  <button class="nm-key" type="button" aria-describedby="my-tip">☾</button>
  <span class="nm-tip" id="my-tip" role="tooltip">
    <span class="nm-tip-title">Card title</span>
    Explanation copy zooms in gently above the key.
  </span>
</span>
```

## 📂 Files

- `demo.html` — "evening wind-down" smart-home panel with four tooltip keys.
- `style.css` — clay tokens, shadow recipes, zoom engine, a11y guards.
- `README.md` — this document.
