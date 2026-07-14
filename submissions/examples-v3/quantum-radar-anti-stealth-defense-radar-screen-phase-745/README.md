# Quantum Radar Anti-Stealth Defense Radar Screen — Phase #745

**EaseMotion CSS Showcase** · `submissions/examples/quantum-radar-anti-stealth-defense-radar-screen-phase-745/`

A tactical military UI showcase representing a quantum radar screen designed to detect stealth anomalies. Features a sweeping CSS radar line, fading target blips with expanding rings, and quantum entanglement grid visualizations.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/quantum-radar-anti-stealth-defense-radar-screen-phase-745/demo.html
```

---

## Design Theme

Military Radar, Advanced Defense, Quantum Detection, and Tactical HUD.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#022c22` | Stealth Dark background |
| `--clr-green`| `#22c55e` | Radar Green / Primary UI |
| `--clr-blue`| `#3b82f6` | Quantum Blue / Anomalies |
| `--clr-red`| `#ef4444` | Alert Red / Hostile targets |
| `--clr-grid`| `#14532d` | Grid Green / Borders & structure |

---

## Component Breakdown

### 1. Quantum Radar Screen (Center View)
- The `.radar-display` uses a combination of `repeating-radial-gradient` and `linear-gradient` to draw the radar grid lines directly in CSS without external images.
- The `.sweeper` element is a semi-transparent `conic-gradient` that rotates continuously using the `sweep` keyframe.
- Target `.blip` elements are positioned absolutely. They use the `ping-fade` keyframe to appear and slowly fade out, timed to match the 4-second rotation of the radar sweeper (using `animation-delay`).
- Each blip has an `::after` pseudo-element that creates an expanding ring effect (`ping-ring` keyframe) when the sweeper passes over it.

### 2. Sensor Calibration (Left Sidebar)
- The `.wave-box` contains a `.wave-line` that uses a `repeating-linear-gradient` to draw interference patterns, animated to scroll left (`wave-scan` keyframe).
- The `.matrix-grid` shows a grid of `.m-cell` elements. Some are marked `.active` and flash intermittently (`cell-flash` keyframe) to simulate quantum entanglement coherence state changes.

### 3. CRT Scanline & Quantum Noise Background
- The `body::before` creates CRT-style scanlines using a repeating linear gradient.
- The `body::after` uses a base SVG noise filter (`<feTurbulence>`) encoded as a data URI to provide a faint static/noise texture to the background.

---

## File Structure

```
quantum-radar-anti-stealth-defense-radar-screen-phase-745/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
