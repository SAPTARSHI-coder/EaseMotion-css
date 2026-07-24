# Incident Command Switchboard

## What does it do?

This submission adds a self-contained incident command switchboard demo for EaseMotion CSS. It shows animated response lanes, live task cards, service health tiles, escalation pressure, and stakeholder communication updates in a single operational dashboard pattern.

## How is it used?

Open `demo.html` in a browser. The demo only needs local HTML and CSS, with no framework, CDN, or build step.

```html
<article class="lane lane-live">
  <header class="lane-header">
    <span class="lane-dot" aria-hidden="true"></span>
    <div>
      <p>Live Action</p>
      <h2>Mitigation squad</h2>
    </div>
    <span class="lane-status">active</span>
  </header>
</article>
```

Useful classes include `switchboard`, `lane`, `lane-live`, `lane-watch`, `lane-comms`, `task-card`, `service-tile`, `pulse-rail`, and `meter`.

## Why is it useful for EaseMotion?

Incident response interfaces need motion that highlights urgency without making the screen noisy. This example demonstrates practical CSS motion for command centers: pulsing ownership markers, scanning rails, progressive card entry, and reduced-motion fallbacks while staying fully isolated inside `submissions/examples`.
