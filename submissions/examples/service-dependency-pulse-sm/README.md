# Service Dependency Pulse

## What does this do?

Service Dependency Pulse is a self-contained HTML and CSS operations dashboard pattern with animated dependency nodes, health pulses, connection routes, and readable service cards.

## How is it used?

Create a `dependency-layout` with a `graph-card` for the dependency map and `dependency-card` items with state classes such as `dependency-healthy`, `dependency-watch`, or `dependency-critical`.

```html
<article class="dependency-card dependency-watch">
  <span class="dependency-dot" aria-hidden="true"></span>
  <div>
    <p>Cache layer</p>
    <h3>Freshness lag detected</h3>
    <span>2 regions warming</span>
  </div>
</article>
```

Available dependency classes:

- `dependency-healthy`
- `dependency-watch`
- `dependency-critical`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make service health easier to scan: dependency nodes pulse, connection routes animate to show relationships, and service cards enter gently for quick review. The demo works directly by opening `demo.html` in a browser.
