# Healthcare Intelligence Operations Platform

## What does this do?
A clinical command platform showcase — a Patient Intake Registry with triage-level tags, an animated ICU Capacity Dial (`conic-gradient`), a Staff Roster with on-duty status indicators, and a Live Logging Console with severity-colored streaming entries. Calm clinical teal/blue aesthetic, pure HTML/CSS, zero dependencies.

## How to use it
```html
<div class="hio-grid">

  <!-- Patient intake row -->
  <div class="hio-intake-row">
    <span class="hio-intake-id">#PT-10482</span>
    <span class="hio-intake-name">M. Alvarez</span>
    <span class="hio-intake-triage hio-intake-triage--critical">Critical</span>
    <span class="hio-intake-dept">Emergency</span>
    <span class="hio-intake-time">3m ago</span>
  </div>

  <!-- ICU capacity dial -->
  <div class="hio-dial" style="--pct: 87">
    <span class="hio-dial-value">87<span class="hio-dial-unit">%</span></span>
  </div>

  <!-- Staff roster row -->
  <div class="hio-staff-row">
    <span class="hio-staff-avatar">DR</span>
    <div class="hio-staff-info">
      <span class="hio-staff-name">Dr. R. Mehta</span>
      <span class="hio-staff-role">Attending — ER</span>
    </div>
    <span class="hio-staff-status hio-staff-status--active"></span>
  </div>

  <!-- Live log line -->
  <div class="hio-log-line">
    <span class="hio-log-time">09:43:40</span>
    <span class="hio-log-level hio-log-level--crit">CRIT</span>
    <span class="hio-log-msg">Vitals threshold breach</span>
  </div>

</div>
```

## Components included
- **Status bar** — 4 top-level metrics (beds, ICU capacity, staff on duty, critical alerts) with pulsing critical indicator
- **Patient Intake Registry** — `.hio-intake-row` with triage-level tags (critical/urgent/standard), department, and relative timestamps
- **ICU Capacity Dial** — `.hio-dial` (animated `conic-gradient`, spin-in entrance) with occupancy metric breakdown
- **Staff Roster** — `.hio-staff-row` with role-initial avatars and on-duty/break/offline status dots
- **Live Logging Console** — `.hio-log-stream` with staggered fade-in and INFO/WARN/CRIT/OK severity coloring

## Why it fits EaseMotion CSS
This Phase 49 submission delivers all 4 specified features — patient intake registry, ICU capacity dials, staff rosters, and live logging consoles — in a calm clinical teal/blue aesthetic, visually distinct from the red/cyan SOC theme (#8873) and neon green/magenta matrix theme (#8851), demonstrating EaseMotion CSS's range across enterprise dashboard verticals. Layered animations include a spin-in capacity dial, pulsing critical/live indicators, and a staggered-entrance log stream. `prefers-reduced-motion` disables all pulses, dial entrance, and staggered reveals while preserving full layout and severity coloring.
