# Glassmorphism 3D Flip Tooltip

A pure CSS **frosted-glass tooltip that pivots into view around its
vertical axis** (`rotateY`) — like a pane of glass turning to face you,
blurring whatever sits behind it. Real glassmorphism (backdrop blur +
saturation, translucent fill, hairline highlight border) with zero
JavaScript: the turn is driven by `:hover` and `:focus-visible`.

Resolves Issue: #34296

## ✨ Features

- **Y-axis 3D flip** — the pane rests turned edge-on to the viewer
  (`rotateY(-86deg)`) and pivots to flat around its vertical center line,
  inside a `perspective()` baked into the transform. Settles on a gentle
  `cubic-bezier(0.32, 1.15, 0.44, 1)`; exits faster than it enters.
- **Real glass, not painted glass** — `backdrop-filter: blur() saturate()`
  on the tooltip, the chips, and the main sheet, so the sunset gradient
  genuinely smears behind each surface; a faint diagonal "sun-catch" streak
  adds the classic glassmorphism light edge.
- **Contrast-audited smoked glass** — every text-bearing surface uses a
  dark-tinted fill instead of white-tinted glass. Ratios were computed with
  all translucent layers composited over the *lightest* stop of the
  gradient: worst case 5.26:1 for body copy, 10.9:1+ inside the tooltip
  (WCAG AA everywhere, AAA in the tooltip). Chip hover deepens the smoke
  rather than lightening it, so hovering never costs contrast.
- **Graceful degradation** — an `@supports not (backdrop-filter…)` block
  swaps translucent fills for a solid tint on browsers without blur.
- **Zero JavaScript** — sibling-selector engine
  (`.gl-chip:hover + .gl-tip`), CSS transitions only.
- **Keyboard accessible** — real `<button>` triggers with
  `aria-describedby` → `role="tooltip"` and a warm-gold `:focus-visible`
  ring that reads clearly on the translucent chips.
- **Tunable via custom properties** — pivot angle, camera distance,
  duration, easing, and blur radius all live on `:root`.
- **Responsive & motion-safe** — chips wrap on narrow screens, tooltip
  width caps at `min(235px, 80vw)`, and `prefers-reduced-motion` removes
  the rotation entirely.

## 🔧 Custom Properties

| Property              | Default                              | Role                    |
| --------------------- | ------------------------------------ | ----------------------- |
| `--gl-tt-angle`       | `-86deg`                             | Resting pivot angle     |
| `--gl-tt-perspective` | `640px`                              | 3D camera distance      |
| `--gl-tt-duration`    | `380ms`                              | Turn time               |
| `--gl-tt-ease`        | `cubic-bezier(0.32, 1.15, 0.44, 1)`  | Settling curve          |
| `--gl-blur`           | `16px`                               | Glass blur radius       |

## 🚀 Usage

```html
<span class="gl-anchor">
  <button class="gl-chip" type="button" aria-describedby="my-tip">
    ✈ Lisbon
  </button>
  <span class="gl-tip" id="my-tip" role="tooltip">
    <span class="gl-tip-place">Lisbon, PT <span class="gl-tip-temp">24°C</span></span>
    Detail copy pivots into view on a frosted pane.
  </span>
</span>
```

## 📂 Files

- `demo.html` — "golden hour getaways" travel picker with three destinations.
- `style.css` — glass recipe, Y-axis pivot engine, fallback + a11y guards.
- `README.md` — this document.
