# Glitch Gauge

An original radial meter component for EaseMotion CSS that pairs a **neumorphic** physical shell with a **cyberpunk glitch** readout — built entirely in HTML and CSS, no JavaScript.

## 🧩 Component Overview

Glitch Gauge tells a small visual story: a solid, physical-feeling console (soft neumorphic shadows, calm surfaces) whose *digital display* is glitching. Only the percentage readout gets the RGB-split glitch treatment; the card shell, progress ring, and status pill stay stable and calm. This contrast is what makes the glitch read as a display fault rather than a broken component.

The demo shows a single gauge — **"System Integrity: 87%, Stable"** — but the component is written to be restyled or re-purposed for any percentage-based reading (battery level, signal strength, task progress, health/HP bars, etc.).

## ✨ Features

- Neumorphic card shell with dual soft shadows (light + dark) on a dark base surface
- Radial progress ring built from a single `conic-gradient`, driven by a `--gauge-percent` custom property
- Recessed "well" in the center of the ring using inset neumorphic shadows
- RGB-split glitch effect on the percentage text using `::before` / `::after` layers with offset clip-paths and independent animation timings
- Status pill with a softly pulsing indicator dot
- Fully driven by CSS custom properties — resize or recolor by overriding a handful of variables
- `prefers-reduced-motion` support disables all animation for users who request it
- Keyboard-focusable with a visible neon focus ring
- Responsive across desktop, tablet, and mobile breakpoints

## 📁 Folder Structure

submissions/examples/glitch-gauge-santoshi/
├── demo.html   # Semantic markup for the gauge and its ARIA meter role
├── style.css   # All neumorphic + glitch styling, tokens, and animations
└── README.md   # This file

## 🚀 Usage Instructions

1. Copy `demo.html` and `style.css` into your project (or open `demo.html` directly to preview).
2. Update the visible values in `demo.html`:
   - `aria-valuenow` and `aria-label` on the `.glitch-gauge` section
   - The `--gauge-percent` inline style on `.gauge-ring`
   - The `data-value` attribute and inner text of `.gauge-value` (keep both in sync, since `data-value` feeds the glitch layers)
   - The title, status text, and description copy
3. Open the file in a browser — no build step or dependencies required.

## 🎨 Customization Options

All key visual properties are exposed as CSS custom properties in `:root`, so the gauge can be restyled without touching the rule bodies:

| Variable | Controls |
|---|---|
| `--surface-base`, `--surface-light` | Base card colour and its lighter variant |
| `--surface-shadow-dark`, `--surface-shadow-light` | The two neumorphic shadow tones |
| `--neon-cyan`, `--neon-magenta` | Glitch RGB-split colours and ring gradient |
| `--status-stable`, `--status-stable-glow` | Status pill colour theme (swap for a "warning"/"critical" palette) |
| `--gauge-size`, `--ring-thickness` | Overall ring diameter and track thickness |
| `--radius-card`, `--radius-pill` | Corner rounding for the card and status pill |
| `--glitch-speed` | Duration of the glitch animation loop — lower is more frequent glitching |

To reuse this component with a different status (e.g. "Critical"), duplicate the `.gauge-status--stable` rule with a new modifier class and swap the colour variables.

## 🌐 Browser Compatibility

Built entirely with widely supported CSS features:

- `conic-gradient` — supported in all current major browsers (Chrome, Edge, Firefox, Safari)
- `clip-path: polygon()` — broadly supported
- CSS custom properties (`var()`) — broadly supported
- `:focus-visible` — supported in all current major browsers

No vendor prefixes are required for the target browser set. Older browsers without `conic-gradient` support will show the inner well without a visible progress ring, but the rest of the card remains fully usable.

## ♿ Accessibility Notes

- The gauge is exposed with `role="meter"` plus `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and a descriptive `aria-label`, so screen reader users get the actual reading rather than the decorative glitch text fragments.
- The progress ring and status dot are marked `aria-hidden`, since their information is already conveyed through the `aria-label`.
- The card is keyboard-focusable (`tabindex="0"`) with a visible `:focus-visible` outline, since the hover-only lift effect wouldn't otherwise be reachable by keyboard.
- All animations are disabled under `prefers-reduced-motion: reduce`.

## 👤 Author

**Santoshi Kumbhar**
GitHub: [github.com/santoshikumbhar3-art](https://github.com/santoshikumbhar3-art)
LinkedIn: [linkedin.com/in/santoshi-kumbhar-356117286](https://linkedin.com/in/santoshi-kumbhar-356117286)