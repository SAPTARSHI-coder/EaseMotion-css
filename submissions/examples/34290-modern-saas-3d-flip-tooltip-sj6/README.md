# Modern SaaS 3D Flip Tooltip

A pure CSS tooltip that **swings into view on a 3D hinge**: at rest it lies
flipped back into the page (`rotateX`), and on hover or keyboard focus it
rotates down to face the viewer with real perspective — like a badge
turning over. Clean product-UI styling (indigo accents, soft shadows,
rounded corners) and zero JavaScript.

Resolves Issue: #34290

## ✨ Features

- **True 3D flip** — the tooltip is hinged on its bottom edge
  (`transform-origin: 50% 100%`) and rotates from `--ss-tt-angle`
  (default `-78deg`) to flat, inside a `perspective()` baked into the
  transform — no extra wrapper element needed.
- **Lands with a nudge** — the show curve
  (`cubic-bezier(0.2, 0.9, 0.3, 1.15)`) overshoots the hinge slightly so
  the card "settles"; the hide path is a faster, plain `ease-in`.
- **Zero JavaScript** — sibling-selector engine
  (`.ss-chip:hover + .ss-tip`), CSS transitions only.
- **Keyboard accessible** — triggers are real `<button>` elements with
  `aria-describedby` → `role="tooltip"` and a clear indigo
  `:focus-visible` outline.
- **Tunable via custom properties** — hinge angle, camera distance
  (perspective), duration, and easing all live on `:root`.
- **SaaS-native content pattern** — each tooltip carries a status line
  (Connected / Action needed) with a colored dot, the kind of glanceable
  detail integration pickers actually need.
- **Responsive & motion-safe** — chips wrap on narrow screens, tooltip
  width caps at `min(240px, 80vw)`, and `prefers-reduced-motion` removes
  the rotation entirely.

## 🔧 Custom Properties

| Property              | Default                              | Role                     |
| --------------------- | ------------------------------------ | ------------------------ |
| `--ss-tt-angle`       | `-78deg`                             | Resting hinge angle      |
| `--ss-tt-perspective` | `520px`                              | 3D camera distance       |
| `--ss-tt-duration`    | `320ms`                              | Swing time               |
| `--ss-tt-ease`        | `cubic-bezier(0.2, 0.9, 0.3, 1.15)`  | Landing curve            |

## 🚀 Usage

```html
<span class="ss-anchor">
  <button class="ss-chip" type="button" aria-describedby="my-tip">
    <span class="ss-chip-logo">CS</span> CodeSync
  </button>
  <span class="ss-tip" id="my-tip" role="tooltip">
    <span class="ss-tip-status is-ok"><span class="ss-dot"></span> Connected</span>
    Status detail flips down to face the viewer.
  </span>
</span>
```

## 📂 Files

- `demo.html` — workspace-settings card with three integration chips.
- `style.css` — product-UI tokens, 3D hinge engine, responsive + a11y guards.
- `README.md` — this document.
