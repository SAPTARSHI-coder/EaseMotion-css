# Phase 581 — Quantum Research Command Center

**EaseMotion CSS · Issue [#26915](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26915)**

A flagship research workspace UI for quantum laboratories — experiment tracking, live Bloch sphere visualization, energy convergence monitoring, circuit parameter control, QPU hardware status, and team activity, built in pure HTML + CSS + vanilla JS.

---

## Preview

The workspace features a command bar, experiment tree sidebar, and a dense multi-panel grid built around the signature **animated Bloch sphere** — a rotating qubit state visualizer that updates coordinates in real time.

---

## Files

```
submissions/examples/quantum-research-command-center/
├── demo.html     ← Full interactive research workspace
├── style.css     ← All ease-qrc-* component and utility classes
└── README.md     ← This file
```

---

## Features

- **Animated Bloch Sphere** — live rotating qubit state vector with θ, φ, |α|², |β|² readouts updating in real time
- **Energy Convergence Chart** — live gradient area chart tracking VQE iterations toward chemical accuracy target
- **Circuit Parameters** — 6 variational parameters (θ₁, θ₂, φ₁, φ₂, λ, β) with color-coded progress bars
- **Run Log** — filterable terminal-style log with INFO / WARN / MILESTONE entries updating every 2 seconds
- **QPU Hardware Panel** — qubit count, gate fidelity, T1/T2 coherence times, calibration status
- **Team Activity Feed** — recent collaborator actions with avatars and timestamps
- **Experiment Tree Sidebar** — active / queued / completed experiment hierarchy with compute budget meter

---

## CSS Classes

All classes use the `ease-qrc-` namespace, following EaseMotion conventions.

### Layout

| Class | Purpose |
|---|---|
| `ease-qrc-cmdbar` | Top sticky command bar |
| `ease-qrc-app` | Main flex app shell |
| `ease-qrc-sidebar` | Left experiment tree sidebar |
| `ease-qrc-workspace` | Right main workspace |
| `ease-qrc-wgrid` | 3-column panel grid |

### Components

| Class | Purpose |
|---|---|
| `ease-qrc-panel` | Generic workspace panel |
| `ease-qrc-bloch-wrap` | Bloch sphere canvas + coords wrapper |
| `ease-qrc-bloch-coords` | Coordinate readout list |
| `ease-qrc-energy-chart-wrap` | Energy chart canvas wrapper |
| `ease-qrc-energy-stats` | Min/avg/peak stat row |
| `ease-qrc-params-list` | Circuit parameter list |
| `ease-qrc-param-row` | Individual parameter row |
| `ease-qrc-log-body` | Scrollable terminal log |
| `ease-qrc-log-row` | Single log entry |
| `ease-qrc-hw-grid` | 2-column hardware stat grid |
| `ease-qrc-team-list` | Team activity list |
| `ease-qrc-tree` | Experiment tree navigation |
| `ease-qrc-compute-card` | QPU budget meter card |

### Modifiers

| Class | Effect |
|---|---|
| `ease-qrc-tree-active` | Active experiment in tree |
| `ease-qrc-dot-cyan` / `ease-qrc-dot-magenta` / `ease-qrc-dot-gold` | Experiment status dots |
| `ease-qrc-tab-active` | Active workspace tab |
| `ease-qrc-topnav-active` | Active top nav item |
| `ease-qrc-status-running` | Pulsing cyan experiment status dot |
| `ease-qrc-fill-magenta` / `ease-qrc-fill-gold` | Parameter bar color variants |
| `ease-qrc-val-cyan` / `ease-qrc-val-gold` | Stat value color overrides |
| `ease-qrc-log-info` / `ease-qrc-log-warn` / `ease-qrc-log-success` | Log row states |
| `ease-qrc-tag-info` / `ease-qrc-tag-warn` / `ease-qrc-tag-success` | Log tag pills |
| `ease-qrc-btn-ghost` / `ease-qrc-btn-primary` | Button variants |
| `ease-qrc-log-filter-active` | Active log filter button |
| `ease-qrc-mono` | JetBrains Mono font override |

---

## Design Tokens

```css
--qrc-bg:         #030508    /* Void black background */
--qrc-plasma:     #1a0a2e    /* Deep plasma surface */
--qrc-cyan:       #22d3ee    /* Primary — qubit cyan */
--qrc-magenta:    #c026d3    /* Secondary — entanglement magenta */
--qrc-gold:       #e8b84b    /* Accent — research gold (Bloch vector) */
--qrc-green:      #22c55e    /* Success / milestone */
--qrc-font-mono:  'JetBrains Mono', monospace
--qrc-font-ui:    'DM Sans', system-ui, sans-serif
```

---

## Accessibility & Motion

- All interactive elements have `:focus-visible` outlines
- `@media (prefers-reduced-motion: reduce)` disables pulse animations and parameter bar transitions
- Status indicators use both color and shape/symbol — running dot pulses AND shows color; log tags carry text labels
- Light mode fully supported via `@media (prefers-color-scheme: light)`
- Responsive: sidebar hides on mobile, grid collapses to single column below 768px

---

## No External Dependencies

- Google Fonts CDN for `JetBrains Mono` + `DM Sans` (replaceable with system fonts)
- Native Canvas API for Bloch sphere and energy chart
- No frameworks, libraries, or bundler required

---

## Usage

```html
<link rel="stylesheet" href="style.css" />

<!-- Command bar -->
<header class="ease-qrc-cmdbar"> ... </header>

<!-- App shell -->
<div class="ease-qrc-app">
  <aside class="ease-qrc-sidebar"> ... </aside>
  <main class="ease-qrc-workspace">
    <div class="ease-qrc-wgrid">
      <div class="ease-qrc-panel ease-qrc-panel-bloch"> ... </div>
      <div class="ease-qrc-panel ease-qrc-panel-energy"> ... </div>
    </div>
  </main>
</div>
```

---

*Submitted for GSSoC 2026 · EaseMotion CSS · Phase 581*