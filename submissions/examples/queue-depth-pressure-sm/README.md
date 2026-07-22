# Queue Depth Pressure

## What does this do?

Queue Depth Pressure is a self-contained HTML and CSS operations dashboard pattern with animated queue pressure cards, depth meters, status badges, and readable worker backlog signals.

## How is it used?

Create a `queue-board` wrapper and add `queue-card` items with pressure classes such as `queue-safe`, `queue-watch`, or `queue-critical`.

```html
<article class="queue-card queue-critical">
  <div class="queue-ring" aria-hidden="true">
    <span>94%</span>
  </div>
  <div class="queue-content">
    <p class="queue-kicker">Webhook queue</p>
    <h2>Delivery backlog is critical</h2>
    <div class="queue-bar" aria-hidden="true">
      <span></span>
    </div>
  </div>
</article>
```

Available pressure classes:

- `queue-safe`
- `queue-watch`
- `queue-critical`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make queue health easier to scan: cards enter gently, rings show backlog pressure, bars reveal depth, and focus states keep scale actions accessible. The demo works directly by opening `demo.html` in a browser.
