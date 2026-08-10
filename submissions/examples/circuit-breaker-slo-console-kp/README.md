# Circuit Breaker SLO Console KP

## What does this do?

Circuit Breaker SLO Console KP is an advanced CSS-only reliability interface for explaining closed, warning, open, and half-open breaker states. It combines semantic radio inputs, animated SLO gauge motion, burn-rate heatmap cells, responsive state cards, and reduced-motion handling.

## How is it used?

Use the radio inputs as the state controller. Labels toggle the selected breaker state, while sibling selectors update the gauge, heatmap intensity, and active card.

```html
<input type="radio" name="breaker-state" id="breaker-open" />
<label for="breaker-open">Open</label>
<article class="state-card card-open">
  <h2>Open</h2>
</article>
```

## Why is it useful?

Reliability documentation often needs to show SLO burn, fallback routing, and recovery behavior without a JavaScript dependency. This example demonstrates advanced CSS orchestration with accessible controls, responsive layout, and motion that explains system state rather than only decorating it.
