# Webhook Delivery Retry

## What does this do?

Webhook Delivery Retry is a self-contained HTML and CSS monitoring pattern with animated retry steps, delivery status cards, endpoint health meters, and clear action states.

## How is it used?

Create a `retry-panel` with a `retry-list`, then add `retry-card` items with delivery state classes such as `retry-success`, `retry-active`, or `retry-warning`.

```html
<article class="retry-card retry-active">
  <div class="retry-marker" aria-hidden="true"></div>
  <div class="retry-content">
    <div class="retry-topline">
      <p>Invoice paid</p>
      <span>Retrying</span>
    </div>
    <h3>https://billing.partner.app/events</h3>
    <div class="retry-meter" aria-hidden="true">
      <span></span>
    </div>
  </div>
</article>
```

Available retry classes:

- `retry-success`
- `retry-active`
- `retry-warning`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make delivery state easier to scan: retry cards enter gently, meters show delivery progress, markers pulse for attention, and long endpoints remain readable. The demo works directly by opening `demo.html` in a browser.
