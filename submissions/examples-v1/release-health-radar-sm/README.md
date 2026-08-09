# Release Health Radar

## What does this do?

Release Health Radar is a self-contained HTML and CSS release dashboard pattern with animated health rings, radar scan motion, signal cards, and compact deployment readiness metrics.

## How is it used?

Create a `radar-layout` with a `radar-card` for the scan visualization and `signal-card` items with modifier classes such as `signal-good`, `signal-watch`, or `signal-info`.

```html
<article class="signal-card signal-good">
  <div class="signal-icon" aria-hidden="true">01</div>
  <div>
    <p>Build Pipeline</p>
    <h3>All required jobs passed</h3>
    <span>18 checks complete</span>
  </div>
</article>
```

Available signal classes:

- `signal-good`
- `signal-watch`
- `signal-info`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to clarify release readiness: the radar scan suggests live monitoring, pulsing dots highlight healthy systems, and signal cards enter gently for quick review. The demo is standalone and works by opening `demo.html` directly in a browser.
