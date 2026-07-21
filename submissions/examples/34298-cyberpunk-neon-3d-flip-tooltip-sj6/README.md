# Cyberpunk Neon 3D Flip Tooltip — "Hatch Drop"

A pure CSS tooltip that **drops open like a maintenance hatch**: hinged on
its top edge, it swings down through real 3D perspective and lands with a
brief neon-tube flicker, like a strip light striking. Styled for cyberpunk
neon garage/industrial UIs. Zero JavaScript — the hinge is driven entirely
by `:hover` and `:focus-visible`.

Resolves Issue: #34298

## ✨ Features

- **Top-hinge 3D flip** — `transform-origin: 50% 0` with
  `rotateX(-84deg → 0)` inside a `perspective()` baked into the transform;
  the tooltip opens *downward* below its trigger like a dropped hatch, and
  the landing curve (`cubic-bezier(0.3, 1.2, 0.5, 1)`) gives it a
  mechanical clunk.
- **Strike-light flicker** — a short `@keyframes` pass dips opacity three
  times before holding steady, selling the "neon tube igniting" moment.
  Runs once per reveal, fully disabled under `prefers-reduced-motion`.
- **Zero JavaScript** — sibling-selector engine
  (`.hx-part-btn:hover + .hx-hatch`), transitions + one keyframe animation.
- **Keyboard accessible** — real `<button>` triggers with
  `aria-describedby` → `role="tooltip"` and a teal `:focus-visible` ring
  that stays distinct from the red hover fill.
- **Tunable via custom properties** — hinge angle, perspective, drop
  duration, landing curve, and flicker length all live on `:root`.
- **Cyberpunk garage skin** — hot-red part slots, teal-edged hatch, amber
  hazard stripes, monospace HUD type, radial glow from the pit floor.
- **Responsive & motion-safe** — slots wrap on narrow screens, hatch width
  caps at `min(240px, 80vw)`, reduced-motion swaps hinge + flicker for an
  instant reveal.

## 🔧 Custom Properties

| Property              | Default                            | Role                    |
| --------------------- | ---------------------------------- | ----------------------- |
| `--hx-tt-angle`       | `-84deg`                           | Folded-away hinge angle |
| `--hx-tt-perspective` | `560px`                            | 3D camera distance      |
| `--hx-tt-duration`    | `300ms`                            | Drop time               |
| `--hx-tt-ease`        | `cubic-bezier(0.3, 1.2, 0.5, 1)`   | Landing curve           |
| `--hx-flicker`        | `460ms`                            | Strike-light length     |

## 🚀 Usage

```html
<span class="hx-slot">
  <button class="hx-part-btn" type="button" aria-describedby="my-hatch">
    NITRO CELL
  </button>
  <span class="hx-hatch" id="my-hatch" role="tooltip">
    <span class="hx-hatch-tag">Propulsion <small>SLOT A</small></span>
    Spec copy drops open below the trigger.
  </span>
</span>
```

## 📂 Files

- `demo.html` — "Mod Bay 03" vehicle-upgrade console with three part slots.
- `style.css` — garage tokens, top-hinge engine, strike flicker, a11y guards.
- `README.md` — this document.
