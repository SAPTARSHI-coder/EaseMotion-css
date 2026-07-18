# Error Budget Burn

## What does this do?

Error Budget Burn is a self-contained HTML and CSS reliability dashboard pattern with animated burn-rate cards, budget rings, alert bands, and clear service health signals.

## How is it used?

Create a `budget-board` wrapper and add `budget-card` items with burn state classes such as `burn-healthy`, `burn-watch`, or `burn-critical`.

```html
<article class="budget-card burn-critical">
  <div class="budget-ring" aria-hidden="true">
    <span>18%</span>
  </div>
  <div class="budget-content">
    <p class="budget-kicker">Checkout API</p>
    <h2>Budget burn is critical</h2>
    <div class="burn-bar" aria-hidden="true">
      <span></span>
    </div>
  </div>
</article>
```

Available burn classes:

- `burn-healthy`
- `burn-watch`
- `burn-critical`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make reliability risk easier to scan: cards enter gently, rings show budget remaining, bars reveal burn pressure, and focus states keep mitigation actions accessible. The demo works directly by opening `demo.html` in a browser.
