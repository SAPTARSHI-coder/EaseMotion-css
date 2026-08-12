# CSS Currency Flag Pair

Overlapping currency flag pair component for forex, fintech, and trading web applications with swap animations and live rate tickers.

## 1. What does this do?
Renders overlapping circular national flags (e.g. `EUR/USD`, `GBP/JPY`) with an interactive pure CSS swap button that smoothly swaps base and quote flag positions and recalculates exchange rate displays.

## 2. How is it used?
Wrap currency flag SVG icons inside `.flag-stack` and control base/quote swapping with a hidden checkbox:

```html
<article class="pair-card">
  <input type="checkbox" id="swap-trigger" class="swap-input">

  <div class="currency-pair-wrapper">
    <div class="flag-stack">
      <div class="flag-circle base-flag"><!-- EUR SVG --></div>
      <div class="flag-circle quote-flag"><!-- USD SVG --></div>
    </div>
    <label for="swap-trigger" class="swap-icon-btn">Swap</label>
  </div>

  <div class="pair-info">
    <div class="rate-val val-forward">1.0894 USD</div>
    <div class="rate-val val-reversed">0.9179 EUR</div>
  </div>
</article>
```

## 3. Why is it useful?
Trading dashboards and currency converter tools require sleek pair displays. This pure CSS pattern provides zero-JS flag swapping, spring-based transition physics, and focus-visible keyboard navigation out of the box.
