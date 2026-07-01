# Micro-Gravity Orbital Manufacturing Terminal — Phase #872

**EaseMotion CSS Showcase** · `submissions/examples/micro-gravity-orbital-manufacturing-terminal-phase-872/`

A complete, single-page, responsive HTML/CSS mission-control terminal UI for a low-Earth-orbit micro-gravity manufacturing platform — **ORB-MFG OMT-7**.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/micro-gravity-orbital-manufacturing-terminal-phase-872/demo.html
```

---

## Design Theme

Dark industrial HUD aesthetic — built to evoke the glow of a real spacecraft terminal.

| Token | Value | Purpose |
|---|---|---|
| `--clr-void` | `#020812` | Page background |
| `--clr-active` | `#00ff88` | Healthy / nominal / active |
| `--clr-cyan` | `#00b4ff` | Primary data / UI chrome |
| `--clr-amber` | `#f59e0b` | Warning / elevated |
| `--clr-danger` | `#ff3d5a` | Alert / critical |
| `--clr-violet` | `#a855f7` | Secondary metrics |
| `--font-mono` | Share Tech Mono | Data readouts, labels, timestamps |
| `--font-ui` | Exo 2 | Section headings, body text |

---

## Component Breakdown

### 1. Scan-Line Overlay
- CSS `body::after` repeating-gradient creates a subtle CRT scan-line texture across the entire UI — zero performance cost.

### 2. Animated Grid Background
- `background-image` crossed `linear-gradient` at `rgba(0,180,255,0.04)` forms an infinite grid.
- `grid-drift` keyframes slowly pan the grid with `background-position` — compositor-friendly.
- A radial-gradient vignette masks the edges for depth.

### 3. Command Bar (Fixed)
- Fixed top navigation with `backdrop-filter: blur(20px)` glassmorphism.
- Live status strip shows hull integrity, orbit altitude, coolant warning, and uplink state via coloured LEDs.
- Alert button pulses with an `alert-pulse` keyframe ring animation.

### 4. Hero Dashboard
- **Orbital clock**: Live UTC time via minimal `requestAnimationFrame` JS (display only).
- **KPI tiles (×5)**: Output rate, power load, core temperature, bay pressure, active jobs. Each tile has a top-edge coloured indicator bar. Spring `translateY(-3px)` on hover.
- **Main dashboard 3-column grid**:
  - *Left* — Manufacturing Module status list with 7 modules, coloured LED indicators, and animated load bars.
  - *Centre* — CSS orbital ring station: three concentric spinning rings (two CW, one CCW, one dashed) with three orbiting modules and a maintenance drone on independent `rotate + translateX` paths.
  - *Right* — Resource monitor with 7 animated gauge bars and gauge-shimmer sweep.

### 5. Production Queue
- `<table>` with semantic `<thead>` / `<tbody>`.
- Per-row animated progress bars with four colour states.
- Priority badges (CRITICAL / HIGH / NORMAL / LOW) with matching colour tokens.
- Hover row highlight via transparent background transition.

### 6. System Health
- 6 `sys-card` tiles in a 3-column responsive grid.
- Each card contains:
  - **Radial gauge**: SVG `<circle>` with `stroke-dashoffset` animated by `radial-draw` keyframes.
  - **Sparkline**: 11-bar CSS flex column chart with `height` percentages encoding recent telemetry trend.
- Cards have spring `translateY(-4px)` hover lift.

### 7. Alert Queue
- Three severity levels: `severity-critical`, `severity-warning`, `severity-info`.
- Left border colour codes the severity.
- Per-alert ACK/VIEW action buttons with colour-matched hover states.
- Critical alerts carry `role="alert"` for screen reader immediacy.

### 8. Operations Log
- Monospace font log stream with `role="log"` and `aria-live="polite"`.
- Log entries slide in via `log-slide-in` keyframes (`translateX(-8px) → 0`).
- Four log level badges: `OK` (green), `INFO` (cyan), `WARN` (amber), `ERR` (red).
- Blinking cursor (`cursor-blink` step-end animation) on the latest entry.
- Custom scrollbar styled via `::-webkit-scrollbar`.

### 9. Crew Roster
- Responsive auto-fit card grid.
- Avatar initials in gradient-backed rounded squares.
- Vitals readout (HR, SpO₂) in monospace font.
- Status LED (active / EVA prep / rest) mirrors the module LED system.

### 10. Console Footer
- Dark sticky footer echoing spacecraft console styling with mission statistics.

---

## EaseMotion CSS Techniques Used

| Technique | Applied To |
|---|---|
| `ease-kf-fade-in` entrance | Dashboard header, KPI tiles, all sections |
| Spring `translateY` hover lift | KPI tiles, sys-cards, crew cards, module rows |
| `translateX` reveal | Module list rows on hover |
| `background-position` animation | Grid background drift |
| CSS `::before` scan-line overlay | Full-page CRT texture |
| `stroke-dashoffset` animation | SVG radial gauges |
| CSS `rotate + translateX` orbital path | Spacecraft modules + drone |
| `radial-gradient` glow pulse | Station hub `hub-pulse` |
| CSS `ring-spin-cw / ccw` | Orbital ring rotation |
| `gauge-load` fill animation | Resource bars, job progress bars |
| Shimmer sweep `::after` | Gauge fill highlight |
| `log-slide-in` | Ops log entries |
| `cursor-blink` (step-end) | Terminal cursor on live log |
| `dot-blink` LED pulse | Status LEDs (active, warning) |
| `alert-pulse` ring | Nav alert button |
| `@media (prefers-reduced-motion)` | Global — all durations → 0.01ms |

---

## Accessibility

- Landmark roles: `<header>`, `<nav>`, `<section>`, `<table>`, `<footer>`.
- Alert severity uses `role="alert"` (critical) and `role="status"` (info).
- Operations log uses `role="log"` with `aria-live="polite"`.
- Orbital clock has `aria-live="polite"`.
- All decorative elements carry `aria-hidden="true"`.
- Seat map cells, gauge labels, and sparklines carry `aria-label` text.
- `prefers-reduced-motion` guard disables all animation universally.

---

## File Structure

```
micro-gravity-orbital-manufacturing-terminal-phase-872/
├── demo.html   — Full single-page terminal UI
├── style.css   — Design system + all animations
└── README.md   — This file
```

---

## Browser Support

Targets evergreen browsers (Chrome 110+, Firefox 110+, Safari 16+, Edge 110+).

| Feature | Notes |
|---|---|
| `backdrop-filter` | Full support in target browsers |
| CSS custom properties | Universally supported |
| SVG `stroke-dashoffset` | Universally supported |
| `grid` layout | Universally supported |
| Custom scrollbar | `::-webkit-scrollbar` (Chromium/Safari); `scrollbar-width` (Firefox) |
