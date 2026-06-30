# Digital Twin Monitoring Platform

## What does this do?

A digital twin simulation dashboard with a sensor status registry,
animated latency counters, an operational calibration controller, and a
live log feed — built with premium, pure-CSS animations and transitions.

## How is it used?

```html
<div class="ease-twin-dashboard">
  <div class="ease-twin-panel">
    <h4>Sensor Registry</h4>
    <div class="ease-sensor-list">
      <div class="ease-sensor-row">
        <span class="ease-sensor-dot ok"></span> Sensor A — OK
      </div>
      <div class="ease-sensor-row">
        <span class="ease-sensor-dot lag"></span> Sensor B — Lagging
      </div>
      <div class="ease-sensor-row">
        <span class="ease-sensor-dot down"></span> Sensor C — Offline
      </div>
    </div>
  </div>

  <div class="ease-twin-panel">
    <h4>Sync Latency</h4>
    <div class="ease-latency-track">
      <div class="ease-latency-fill" style="width: 35%;"></div>
    </div>
  </div>

  <div class="ease-twin-panel" style="text-align: center;">
    <h4>Calibration</h4>
    <div class="ease-calibration-dial">
      <div class="ease-calibration-needle"></div>
    </div>
  </div>

  <div class="ease-twin-logfeed">
    <div class="ease-twin-log-line">&gt; log line...</div>
  </div>
</div>
```

Sensor status classes: `ok`, `lag`, `down`.

## Why is it useful?

Enterprise projects need ultra-premium, interactive showcase interfaces
to demonstrate design fidelity and user experience capabilities. This
example demonstrates a digital twin simulation platform with pulsing
sensor status registries, an animated gradient-shifting latency bar, a
sweeping calibration dial, and a typewriter-style log feed — all pure
CSS, no JS required, showcasing professional CSS capabilities of
EaseMotion CSS in enterprise-grade configurations. Includes
prefers-reduced-motion support.
