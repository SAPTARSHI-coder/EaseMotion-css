# Feature Flag Rollout Meter

## What does this do?

Feature Flag Rollout Meter is a self-contained HTML and CSS rollout dashboard pattern with animated exposure meters, flag state cards, rollout stages, and accessible action states.

## How is it used?

Create a `rollout-board` wrapper and add `flag-card` items with state classes such as `flag-active`, `flag-paused`, or `flag-ready`.

```html
<article class="flag-card flag-active">
  <div class="meter-ring" aria-hidden="true">
    <span>42%</span>
  </div>
  <div class="flag-content">
    <p class="flag-kicker">Active rollout</p>
    <h2>New checkout summary</h2>
  </div>
</article>
```

Available flag classes:

- `flag-active`
- `flag-paused`
- `flag-ready`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make rollout state easier to scan: cards enter gently, meter rings reveal exposure, stage dots pulse for attention, and focus states keep actions accessible. The demo works directly by opening `demo.html` in a browser.
