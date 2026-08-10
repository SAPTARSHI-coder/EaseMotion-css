# Hedged Request Latency KP

## What does this do?

Hedged Request Latency KP is an advanced CSS-only reliability example for visualizing primary, duplicate, winner, and cancel phases in a hedged request flow. It includes semantic radio controls, animated request lanes, a conic percentile ring, responsive phase cards, and reduced-motion support.

## How is it used?

Use radio inputs as the phase controller. Labels switch the active hedge phase while sibling selectors update the percentile ring, lane emphasis, and active response card.

```html
<input type="radio" name="hedge" id="hedge-winner" />
<label for="hedge-winner">Winner</label>
<article class="phase-card card-winner">
  <h2>Fastest wins</h2>
</article>
```

## Why is it useful?

Distributed systems documentation often needs to explain tail latency mitigation without JavaScript. This example demonstrates advanced CSS state orchestration with accessible controls, operational motion, responsive layout, and clear reduced-motion behavior.
