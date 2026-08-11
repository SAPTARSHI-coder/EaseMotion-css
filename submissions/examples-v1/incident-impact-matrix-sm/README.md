# Incident Impact Matrix

## What does this do?

Incident Impact Matrix is a self-contained HTML and CSS operations dashboard pattern with animated severity cells, impact badges, risk meters, and response ownership cues.

## How is it used?

Create an `impact-grid` wrapper and add `impact-cell` items with impact classes such as `impact-low`, `impact-medium`, `impact-high`, or `impact-critical`.

```html
<article class="impact-cell impact-high">
  <span class="impact-label">High</span>
  <h3>Checkout API</h3>
  <p>Elevated error rate for payment confirmation requests.</p>
  <div class="impact-meter" aria-hidden="true">
    <span></span>
  </div>
</article>
```

Available impact classes:

- `impact-low`
- `impact-medium`
- `impact-high`
- `impact-critical`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make incident impact easier to scan: cells enter gently, badges communicate severity, meters reveal impact level, and hover states help inspect each affected service. The demo works directly by opening `demo.html` in a browser.
