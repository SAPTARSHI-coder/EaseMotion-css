# Shadow Traffic Verifier KP

## What does this do?

Shadow Traffic Verifier KP is an advanced CSS-only resilience console for visualizing mirror, compare, drift, and approve modes. It includes semantic radio controls, animated verification lanes, a conic match ring, responsive service cards, and reduced-motion support.

## How is it used?

Use radio inputs as the verification mode controller. Labels switch the active mode while sibling selectors update match pressure, lane emphasis, and the selected service card.

```html
<input type="radio" name="shadow" id="mode-drift" />
<label for="mode-drift">Drift</label>
<article class="service-card card-drift">
  <h2>Detect drift</h2>
</article>
```

## Why is it useful?

Reliability docs and operations dashboards often need to explain graceful verification without JavaScript. This example demonstrates advanced CSS state orchestration with accessible controls, operational motion, responsive layout, and reduced-motion behavior.
