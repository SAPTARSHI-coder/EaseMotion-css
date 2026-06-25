# Neon Glow Button

Pure CSS neon glow button collection with 4 animated glow variants. Hover-based effects with zero JavaScript.

## Features

- **4 neon variants:**
  - **Pulse Glow** (cyan) — animated pulsing box-shadow
  - **Border Trace** (pink) — border cycles through neon shades with shifting glow
  - **Shadow Burst** (green) — expanding shadow burst at mid-animation
  - **Double Glow** (purple) — inner + outer glow with neon text-shadow
- **Smooth hover effects** with `translateY(-2px)` lift
- **Glowing borders** with animated colors and intensities
- **Animated shadows** via `@keyframes` on box-shadow
- **Responsive** padding on small screens
- **Pure CSS, zero JavaScript**
- **`prefers-reduced-motion`** support

## Files

| File | Description |
|------|-------------|
| `demo.html` | 4 neon glow button variants |
| `style.css` | All styles, keyframes, hover effects, reduced-motion |
| `README.md` | This documentation |

## Usage

```html
<button class="neon-btn pulse-glow">Hover Me</button>
```

## Keyframes

| Keyframe | Purpose |
|----------|---------|
| `pulseGlow` | Cyan glow intensity oscillates smoothly |
| `borderTrace` | Pink border color and glow shift in a cycle |
| `shadowBurst` | Green shadow expands and contracts |
| `doubleGlow` | Purple inner + outer glow with text glow |

Fixes #19166
