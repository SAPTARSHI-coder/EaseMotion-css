# API Latency Waterfall

## What does this do?

API Latency Waterfall is a self-contained HTML and CSS observability pattern that shows request timing with animated latency bars, service markers, trace metadata, and readable timing details.

## How is it used?

Create a `waterfall-panel` with a `waterfall-list`, then add `waterfall-row` items with latency state classes such as `row-fast`, `row-steady`, `row-watch`, or `row-slow`.

```html
<article class="waterfall-row row-slow">
  <div class="service-meta">
    <span class="service-dot" aria-hidden="true"></span>
    <div>
      <h3>Payment service</h3>
      <p>Authorization handshake and fraud scoring</p>
    </div>
  </div>
  <div class="bar-track" aria-hidden="true">
    <span></span>
  </div>
  <strong>312ms</strong>
</article>
```

Available row classes:

- `row-fast`
- `row-steady`
- `row-watch`
- `row-slow`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make performance data easier to scan: rows enter gently, bars grow to show relative latency, markers pulse for attention, and hover states help inspect each service. The demo works directly by opening `demo.html` in a browser.
