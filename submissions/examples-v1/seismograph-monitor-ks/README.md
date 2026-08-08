# Seismograph Monitor

A pure CSS seismograph visualization simulating earthquake waveform patterns with animated scrolling traces and reference grid overlay.

## What does this do?

Renders an animated seismograph-style waveform display with horizontally scrolling bar traces, morphing clip-path wave patterns, and optional reference grid — ideal for dashboards, science visualizations, and real-time monitoring UIs.

## How is it used?

```html
<div class="seismo-monitor" role="img" aria-label="Seismograph display">
  <div class="seismo-monitor__paper">
    <div class="seismo-monitor__grid"></div>
    <div class="seismo-monitor__trace"></div>
  </div>
  <div class="seismo-monitor__info">
    <span class="seismo-monitor__label">MAGNITUDE</span>
    <span class="seismo-monitor__value">5.4</span>
    <span class="seismo-monitor__label">RICHTER</span>
  </div>
</div>
```

**Variants:**
- `.seismo-monitor--compact` — 60px height for dashboard integration
- `.seismo-monitor--alert` — Red accent for elevated seismic activity
- `.seismo-monitor--dark` — Inverted colors for dark backgrounds

**Trace modes (apply to the trace element):**
- `.seismo-monitor__trace--slow` — Slower scroll for calm monitoring
- `.seismo-monitor__trace--drift` — Low-frequency baseline drift
- `.seismo-monitor__trace--secondary` — Dual-channel multi-axis overlay

**Grid modes:**
- `.seismo-monitor__grid--visible` — Higher opacity for calibration

## Why is it useful?

Seismograph visualization is a universally recognizable scientific UI pattern that translates to any real-time monitoring dashboard — server health, stock volatility, audio levels, or environmental sensors. This implementation uses CSS keyframe animations with clip-path polygon morphing for smooth, GPU-accelerated waveform rendering. It fits EaseMotion's philosophy of framework-agnostic, accessible, performant motion components — zero JavaScript, fully responsive, with dark mode, high contrast, forced-colors, and reduced-motion support.
