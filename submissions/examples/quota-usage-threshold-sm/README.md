# Quota Usage Threshold

## What does this do?

Quota Usage Threshold is a self-contained HTML and CSS usage dashboard pattern with animated quota meters, threshold badges, progress rings, and clear upgrade or review actions.

## How is it used?

Create a `quota-board` wrapper and add `quota-card` items with threshold classes such as `quota-safe`, `quota-warning`, or `quota-critical`.

```html
<article class="quota-card quota-warning">
  <div class="quota-ring" aria-hidden="true">
    <span>83%</span>
  </div>
  <div class="quota-content">
    <p class="quota-kicker">API calls</p>
    <h2>Request volume is near cap</h2>
    <div class="quota-bar" aria-hidden="true">
      <span></span>
    </div>
  </div>
</article>
```

Available threshold classes:

- `quota-safe`
- `quota-warning`
- `quota-critical`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make usage limits easier to scan: cards enter gently, rings show quota level, bars reveal threshold pressure, and focus states keep actions accessible. The demo works directly by opening `demo.html` in a browser.
