# Replica Quorum Monitor KP

## What does this do?

Replica Quorum Monitor KP is an advanced CSS-only resilience console for visualizing primary, replica, quorum, and promotion modes. It includes semantic radio controls, animated quorum lanes, a conic sync ring, responsive service cards, and reduced-motion support.

## How is it used?

Use radio inputs as the quorum mode controller. Labels switch the active mode while sibling selectors update sync pressure, lane emphasis, and the selected service card.

```html
<input type="radio" name="quorum" id="mode-quorum" />
<label for="mode-quorum">Quorum</label>
<article class="service-card card-quorum">
  <h2>Confirm quorum</h2>
</article>
```

## Why is it useful?

Reliability docs and operations dashboards often need to explain replica agreement without JavaScript. This example demonstrates advanced CSS state orchestration with accessible controls, operational motion, responsive layout, and reduced-motion behavior.
