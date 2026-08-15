# Neon Cyber Operations Interface

## What does this do?
A futuristic cybersecurity command environment with a neon green/magenta matrix aesthetic — a global threat map simulator with pulsing nodes and animated connection arcs, a SIEM log terminal with a typewriter-style streaming feed and blinking cursor, an animated threat-level gauge, a critical alert banner, and a node status list. Full-page matrix scanline overlay. Pure CSS, zero dependencies.

## How to use it
```html
<!-- Matrix scanline overlay — add once near top of <body> -->
<div class="nco-scanlines" aria-hidden="true"></div>

<!-- Critical alert banner -->
<div class="nco-alert">
  <span class="nco-alert-icon">⚠</span>
  <span class="nco-alert-text">CRITICAL: Unauthorized access attempt detected</span>
  <span class="nco-alert-time">T+00:04:12</span>
</div>

<!-- Threat map node -->
<div class="nco-node nco-node--critical" style="top: 28%; left: 22%;">
  <span class="nco-node-ping"></span>
</div>

<!-- Threat level gauge -->
<div class="nco-gauge" style="--pct: 82">
  <span class="nco-gauge-value">82</span>
</div>

<!-- SIEM terminal line -->
<div class="nco-terminal-line">
  <span class="nco-t-time">[04:18:14]</span>
  <span class="nco-t-level nco-t-level--crit">CRIT</span>
  <span class="nco-t-msg">Brute-force auth failure threshold exceeded</span>
</div>
```

## Components included
- **`.nco-scanlines`** — full-page animated matrix scanline overlay with CRT vignette
- **`.nco-alert`** — pulsing critical alert banner
- **Global Threat Map** — `.nco-map` with grid background, `.nco-node` (critical/warn/ok) with `.nco-node-ping` radar pulse, and animated SVG connection arcs (`.nco-arc`)
- **Threat Level Gauge** — `.nco-gauge` (animated `conic-gradient`, spin-in entrance) with metric rows
- **SIEM Log Terminal** — `.nco-terminal` with staggered typewriter-style line entrance, severity-colored levels (INFO/WARN/CRIT/OK), and a blinking `.nco-t-cursor`
- **Node Status List** — `.nco-node-row` with pulsing critical indicators

## Why it fits EaseMotion CSS
This Phase 32 submission delivers all 4 specified features — global threat map simulator, SIEM log terminal, dynamic matrix scanlines, and critical threat alerts — in a visually distinct neon green/magenta matrix aesthetic (vs. the red/cyan SOC theme of the companion Threat Intelligence Command Platform, #8873), demonstrating EaseMotion CSS's range across enterprise security UI themes. Layered animations include radar pings, animated SVG arcs, a spin-in gauge, staggered terminal lines, and a blinking cursor. `prefers-reduced-motion` disables all pulses, pings, arc animations, gauge entrance, and staggered reveals while preserving the full layout and severity coloring.
