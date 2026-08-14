# Phase 577 — Quantum Network Intelligence Platform

**EaseMotion CSS · Issue [#26916](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26916)**

A dark enterprise dashboard for monitoring quantum communication networks — live node topology, entanglement metrics, QKD security, and real-time alerts, all in pure HTML + CSS + vanilla JS.

---

## Preview

![Dashboard preview showing quantum node topology, KPI strip, channel table, QKD security meters, and alert feed on a deep navy background with teal/violet/green accents]

The dashboard features:
- **Animated node topology canvas** with pulsing entanglement signal dots traversing every quantum link
- **5-card KPI strip** — active nodes, entangled pairs, qubit throughput, QKD key rate, decoherence events
- **Live fidelity chart** — gradient area chart across 24-hour window with min/avg/peak readouts
- **Channel status table** — 6 quantum channels with fidelity, latency, and status pills
- **QKD Security panel** — QBER, sift rate, privacy amplification, and key buffer meters
- **Alert feed** — acknowledge-able alerts with critical / warning / resolved states

---

## Files

```
submissions/examples/quantum-network-platform/
├── demo.html     ← Full interactive dashboard
├── style.css     ← All ease-qni-* utility and component classes
└── README.md     ← This file
```

---

## CSS Classes

All classes use the `ease-qni-` namespace, following EaseMotion conventions.

### Layout

| Class | Purpose |
|---|---|
| `ease-qni-sidebar` | Fixed left sidebar shell |
| `ease-qni-main` | Main content area (flex column) |
| `ease-qni-topbar` | Top header bar |
| `ease-qni-content` | Scrollable content region |
| `ease-qni-grid` | Two-column panel grid |

### Components

| Class | Purpose |
|---|---|
| `ease-qni-kpi-strip` | 5-column KPI card row |
| `ease-qni-kpi-card` | Individual KPI card |
| `ease-qni-panel` | Generic dashboard panel |
| `ease-qni-topology-canvas` | Quantum node canvas wrapper |
| `ease-qni-chart-area` | Chart canvas wrapper |
| `ease-qni-table` | Styled channel data table |
| `ease-qni-alerts-list` | Alert feed container |
| `ease-qni-alert-item` | Individual alert row |
| `ease-qni-meter-bar` / `ease-qni-meter-fill` | Progress bar for QKD metrics |

### Modifiers

| Class | Effect |
|---|---|
| `ease-qni-kpi-teal` | Teal value text (`#00d4ff`) |
| `ease-qni-kpi-violet` | Violet value text (`#7c3aed`) |
| `ease-qni-kpi-green` | Green value text (`#00ff88`) |
| `ease-qni-kpi-amber` | Amber value text (`#f59e0b`) |
| `ease-qni-kpi-alert` | Amber border accent on KPI card |
| `ease-qni-nav-active` | Active sidebar nav state |
| `ease-qni-ctrl-active` | Active toggle button state |
| `ease-qni-alert-critical` | Red icon + normal title in alert row |
| `ease-qni-alert-warn` | Amber icon in alert row |
| `ease-qni-alert-resolved` | Muted + strikethrough alert row |
| `ease-qni-pill-online` | Green status pill |
| `ease-qni-pill-warn` | Amber status pill |
| `ease-qni-pill-alert` | Red status pill |
| `ease-qni-status-online` | Pulsing green status dot |
| `ease-qni-mono` | Share Tech Mono font override |

---

## Design Tokens

```css
--qni-bg:         #050d1a   /* Deep space navy background */
--qni-surface:    #0a1628   /* Panel surface */
--qni-teal:       #00d4ff   /* Primary accent — quantum teal */
--qni-violet:     #7c3aed   /* Secondary accent — entanglement violet */
--qni-green:      #00ff88   /* Success / online state */
--qni-amber:      #f59e0b   /* Warning / degraded state */
--qni-font-mono:  'Share Tech Mono', monospace
--qni-font-ui:    'Inter', system-ui, sans-serif
```

---

## Accessibility & Motion

- All interactive elements have `:focus-visible` outlines
- `@media (prefers-reduced-motion: reduce)` disables blinking animations and canvas motion (canvas respects `requestAnimationFrame` — a reduced-motion listener could halt it)
- Color is never the sole status indicator — pills carry text labels; alert icons carry symbols (⚠ ◐ ✓)
- Light mode color overrides via `@media (prefers-color-scheme: light)`

---

## No External Dependencies

The dashboard uses only:
- Google Fonts CDN for `Share Tech Mono` + `Inter` (can be replaced with system fonts)
- Native Canvas API for topology and fidelity chart
- No libraries, no frameworks, no bundler required

---

## Usage

```html
<!-- In <head> -->
<link rel="stylesheet" href="style.css" />

<!-- Sidebar -->
<aside class="ease-qni-sidebar"> ... </aside>

<!-- Main content -->
<main class="ease-qni-main">
  <header class="ease-qni-topbar"> ... </header>
  <div class="ease-qni-content">
    <div class="ease-qni-kpi-strip">
      <div class="ease-qni-kpi-card"> ... </div>
    </div>
    <div class="ease-qni-grid">
      <div class="ease-qni-panel ease-qni-panel-topology"> ... </div>
    </div>
  </div>
</main>
```

---

*Submitted for GSSoC 2026 · EaseMotion CSS · Phase 577*