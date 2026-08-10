# Responsive Dashboard Zoom-In Tooltip

A pure CSS, zero-dependency **metric-definition tooltip** for analytics
dashboards. Each KPI card carries a quiet "i" chip; hovering it — or
reaching it with the keyboard — zooms a small definition card into view,
complete with the metric's formula. Brisk, professional motion with no
JavaScript anywhere.

Resolves Issue: #34286

## ✨ Features

- **Zoom-In from the corner** — `transform-origin` sits on the info chip,
  so the tooltip grows out of the corner it belongs to and never drifts
  over the number it explains. Show uses a barely-there overshoot
  (`cubic-bezier(0.25, 1.1, 0.45, 1)`); hide is a faster `ease-in`.
- **Genuinely responsive demo** — the KPI strip is a
  `repeat(auto-fit, minmax(170px, 1fr))` grid: three-across on desktop,
  single column on phones, tooltip width capped at `min(215px, 76vw)`.
- **Zero JavaScript** — sibling-selector reveal
  (`.db-info-btn:hover + .db-tip`), CSS transitions only.
- **Keyboard accessible** — the chip is a real `<button>` with
  `aria-describedby` → `role="tooltip"` and a clear 2px accent
  `:focus-visible` ring; `cursor: help` signals the affordance to mouse
  users.
- **Tunable via custom properties** — start scale, show duration, easing,
  and exit duration are exposed on `:root`, as is the whole dashboard skin.
- **Dashboard-native details** — white cards on a cool canvas, accent top
  border on the tooltip, monospace formula strip, green/red delta badges.
- **Motion-safe** — `prefers-reduced-motion` swaps the zoom for an instant
  reveal.

## 🔧 Custom Properties

| Property                 | Default                             | Role                    |
| ------------------------ | ----------------------------------- | ----------------------- |
| `--db-tt-scale-from`     | `0.55`                              | Starting scale          |
| `--db-tt-duration`       | `190ms`                             | Show (zoom-in) time     |
| `--db-tt-ease`           | `cubic-bezier(0.25, 1.1, 0.45, 1)`  | Show curve              |
| `--db-tt-exit-duration`  | `130ms`                             | Hide time               |

## 🚀 Usage

```html
<span class="db-info-slot">
  <button class="db-info-btn" type="button" aria-describedby="def-metric">i</button>
  <span class="db-tip" id="def-metric" role="tooltip">
    <span class="db-tip-term">Metric Name</span>
    Plain-language definition of the metric.
    <span class="db-tip-formula">numerator ÷ denominator</span>
  </span>
</span>
```

## 📂 Files

- `demo.html` — storefront KPI strip (revenue / conversion / cart abandonment).
- `style.css` — dashboard tokens, corner-anchored zoom engine, a11y guards.
- `README.md` — this document.
