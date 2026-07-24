# Nuclear Thermal Propulsion Spacecraft Bridge — Phase #789

A self-contained, 60fps HTML/CSS bridge-console showcase for a fictional
solid-core nuclear thermal propulsion (NTP) engine, built for issue **#789**.

### What does this do?

It renders a spacecraft bridge console for an NTP engine — a live-updating
reactor status bar, an interactive SVG cutaway of the engine (propellant
tank → turbopump → fuel core → nozzle) with hover/tap callouts, four
telemetry gauges, three animated toggle switches, a SCRAM shutdown button,
and a scrolling systems-log ticker — all in vanilla HTML/CSS with a few
lines of dependency-free JavaScript for the clock, gauge jitter, and toggle
state.

### How is it used?

Open `demo.html` directly in a browser — no build step, server, or CDN
required. The core structural classes:

```html
<div class="console">
  <header class="topbar"> ... </header>

  <main class="grid">
    <section class="telemetry telemetry--left">
      <div class="gauge">
        <div class="gauge__dial gauge__dial--thermal">
          <span class="gauge__value">2698</span>
          <span class="gauge__unit">K CORE</span>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="schematic">
        <svg class="schematic__svg">...</svg>
        <button class="hotspot" data-target="core">...</button>
        <div class="callout">...</div>
      </div>
    </section>
  </main>

  <section class="controls">
    <label class="toggle">
      <input type="checkbox" checked>
      <span class="toggle__track"><span class="toggle__thumb"></span></span>
      <span class="toggle__label">LH2 COOLANT LOOP</span>
    </label>
    <button class="scram">SCRAM</button>
  </section>
</div>
```

`gauge__dial--thermal`, `--cherenkov`, `--nominal`, and `--caution` are
color modifiers you can drop onto any dial to recolor it for a different
subsystem reading. `.hotspot` buttons are positioned with inline `left`/`top`
percentages so they stay pinned to schematic features at any viewport width.

### Why is it useful?

EaseMotion CSS is built around expressive, purposeful motion rather than
decoration for its own sake — this submission leans into that by tying
every animation to something the engine is actually doing: the core's
glow pulses because fission is happening, the feed-line dashes scroll
because propellant is flowing, and the gauge rings sweep because telemetry
is live. It's a ready-made reference for anyone building instrument-panel
or dashboard-style UI with the framework, and it respects
`prefers-reduced-motion` throughout so the motion never gets in a user's
way.

---
**Files in this submission:**
- `demo.html` — the console markup
- `style.css` — raw CSS (no `ease-` prefixes; per contribution guidelines,
  the maintainer standardizes naming during integration)
- `README.md` — this file