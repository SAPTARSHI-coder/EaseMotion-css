# SLA Breach Countdown

## What does this do?

SLA Breach Countdown is a self-contained HTML and CSS support operations pattern with animated countdown rings, urgency cards, progress bars, and accessible escalation actions.

## How is it used?

Create an `sla-board` wrapper and add `sla-card` items with urgency classes such as `sla-safe`, `sla-warning`, or `sla-critical`.

```html
<article class="sla-card sla-critical">
  <div class="countdown-ring" aria-hidden="true">
    <span>23m</span>
  </div>
  <div class="sla-content">
    <p class="sla-kicker">Escalate</p>
    <h2>Production access outage</h2>
    <div class="sla-bar" aria-hidden="true">
      <span></span>
    </div>
  </div>
</article>
```

Available urgency classes:

- `sla-safe`
- `sla-warning`
- `sla-critical`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make SLA risk easier to scan: cards enter gently, rings show time pressure, bars reveal urgency, and focus states keep escalation actions accessible. The demo works directly by opening `demo.html` in a browser.
