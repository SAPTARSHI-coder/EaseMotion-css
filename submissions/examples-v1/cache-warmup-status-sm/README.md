# Cache Warmup Status

## What does this do?

Cache Warmup Status is a self-contained HTML and CSS infrastructure dashboard pattern with animated warmup rings, cache layer cards, fill meters, and readable service readiness.

## How is it used?

Create a `cache-board` wrapper and add `cache-card` items with layer classes such as `layer-edge`, `layer-api`, or `layer-search`.

```html
<article class="cache-card layer-edge">
  <div class="warm-ring" aria-hidden="true">
    <span>96%</span>
  </div>
  <div class="cache-content">
    <p class="cache-kicker">Edge layer</p>
    <h2>Static assets fully primed</h2>
    <div class="warm-meter" aria-hidden="true">
      <span></span>
    </div>
  </div>
</article>
```

Available layer classes:

- `layer-edge`
- `layer-api`
- `layer-search`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make infrastructure readiness easier to scan: cards enter gently, rings show cache progress, meters reveal layer status, and focus states keep actions accessible. The demo works directly by opening `demo.html` in a browser.
