# Draw-Border Line Accordion — Cyberpunk Neon

A pure CSS, zero-dependency **access-panel accordion** for dark neon
interfaces. Opening a panel runs a **circuit-close** draw: a cyan beam
launches from the top-left corner (right along the top, down the left
edge) while a magenta beam launches from the bottom-right (left along
the bottom, up the right edge). The two race **simultaneously** and seal
the frame at opposite corners — a circuit completing, not a pen tracing.
Closing retracts both beams to their home corners. Built on native
`<details>`/`<summary>`; no JavaScript anywhere.

Resolves Issue: #33190

## ✨ Features

- **Dual-beam circuit close** — `::before` is the cyan beam (two
  `linear-gradient` lines anchored top-left), `::after` the magenta beam
  (anchored bottom-right); both grow via a single `background-size`
  transition with no phase delays, racing in parallel. Each beam carries
  its own `drop-shadow` glow, and the two colors meet at the seam
  corners.
- **Reversible mid-gesture** — the draw is a transition, not a keyframe
  animation: closing retracts the beams from wherever they are, smoothly.
- **Standby cue** — hovering a closed panel warms the resting border to
  faint cyan before any commitment, so the interaction telegraphs.
- **Native accordion semantics** — `<details name="cy-grid">` gives
  exclusive-open behavior straight from the browser; remove the `name`
  to allow multiple open.
- **Keyboard accessible** — `<summary>` is natively focusable and
  toggles with Enter/Space; 2px cyan `:focus-visible` ring.
- **Terminal-native details** — monospace stack, scanline + vignette
  canvas, bracketed panel tags (`[A1]`), `>` prompt prefixes on readout
  keys, glowing status values (ok / warn / hot), square corners as the
  genre demands.
- **Genuinely responsive** — fluid deck up to 540px; under 420px the
  readout values wrap beneath their keys.
- **Tunable via custom properties** — beam thickness, draw duration,
  easing, both neon colors, and body fade on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes the travel; the
  circuit appears sealed instantly.

## 🔧 Custom Properties

| Property             | Default                           | Role                     |
| -------------------- | --------------------------------- | ------------------------ |
| `--cy-line`          | `2px`                             | Beam thickness           |
| `--cy-draw-duration` | `420ms`                           | Both beams, in parallel  |
| `--cy-ease`          | `cubic-bezier(0.3, 0.1, 0.2, 1)`  | Fast launch, soft dock   |
| `--cy-cyan`          | `#2ee6ff`                         | Top-left beam            |
| `--cy-magenta`       | `#ff3ea5`                         | Bottom-right beam        |
| `--cy-body-duration` | `240ms`                           | Readout fade on open     |

## 🚀 Usage

```html
<details class="cy-item" name="my-grid">
  <summary class="cy-head">
    <span class="cy-tag">[A1]</span>
    Perimeter sensors
    <span class="cy-head-meta">12 nodes</span>
    <span class="cy-chevron" aria-hidden="true"></span>
  </summary>
  <div class="cy-body">
    <div class="cy-row">
      <span class="cy-key">mesh integrity</span>
      <span class="cy-val is-ok">100%</span>
    </div>
  </div>
</details>
```

## 📂 Files

- `demo.html` — a "Night Grid" access deck (sensors / power / uplink).
- `style.css` — motion tokens, dual-beam circuit engine, neon terminal skin, a11y guards.
- `README.md` — this document.
