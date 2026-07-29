# Regional Failover Map

## What does this do?

Regional Failover Map is a self-contained HTML and CSS infrastructure dashboard pattern with animated region nodes, failover routes, health cards, and readable recovery states.

## How is it used?

Create a `failover-layout` with a `map-card` for the visual route map and `region-card` items with state classes such as `region-healthy`, `region-warning`, or `region-backup`.

```html
<article class="region-card region-warning">
  <span class="region-dot" aria-hidden="true"></span>
  <div>
    <p>EU West</p>
    <h3>Latency elevated</h3>
    <span>Failover ready</span>
  </div>
</article>
```

Available region classes:

- `region-healthy`
- `region-warning`
- `region-backup`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make regional status easier to scan: nodes pulse for health, routes animate to show traffic paths, and cards enter gently for quick review. The demo works directly by opening `demo.html` in a browser.
