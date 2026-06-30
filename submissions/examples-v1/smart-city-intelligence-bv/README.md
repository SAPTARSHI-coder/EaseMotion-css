# Smart City Intelligence Dashboard

## What does this do?
A smart city command center dashboard with transit monitors, air quality
gauges, municipal dispatch controls, and an active incident stream —
built with premium, pure-CSS animations and transitions.

## How is it used?

```html
<div class="ease-city-dashboard">

  <div class="ease-city-panel">
    <h4>Transit Monitor</h4>
    <p class="ease-city-value">142 active</p>
    <div class="ease-transit-track">
      <div class="ease-transit-dot"></div>
      <div class="ease-transit-dot"></div>
      <div class="ease-transit-dot"></div>
    </div>
  </div>

  <div class="ease-city-panel" style="text-align: center;">
    <h4>Air Quality</h4>
    <div class="ease-gauge" style="--ease-gauge-pct: 72;">
      <div class="ease-gauge-inner">72</div>
    </div>
  </div>

  <div class="ease-city-panel">
    <h4>Dispatch Control</h4>
    <div class="ease-dispatch-toggle">
      <span class="ease-dispatch-light"></span> Standby
    </div>
    <div class="ease-dispatch-toggle">
      <span class="ease-dispatch-light alert"></span> Priority Response
    </div>
  </div>

  <div class="ease-incident-stream">
    <div class="ease-incident-line">&gt; log line...</div>
  </div>

</div>
```

## Why is it useful?
Enterprise projects need ultra-premium, interactive showcase interfaces
to demonstrate design fidelity and user experience capabilities. This
example demonstrates a smart city command center with worldwide transit
monitors, animated air quality gauges (via conic-gradient), municipal
dispatch status lights, and a typewriter-style incident stream — all
pure CSS, no JS required, showcasing professional CSS capabilities of
EaseMotion CSS in enterprise-grade configurations. Includes
prefers-reduced-motion support.