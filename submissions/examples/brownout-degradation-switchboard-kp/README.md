# Brownout Degradation Switchboard KP

## What does this do?

Brownout Degradation Switchboard KP is an advanced CSS-only resilience console for visualizing normal, dimmed, essential, and restore modes. It includes semantic radio controls, animated degradation lanes, a conic load ring, responsive service cards, and reduced-motion support.

## How is it used?

Use radio inputs as the degradation mode controller. Labels switch the active mode while sibling selectors update load pressure, lane emphasis, and the selected service card.

```html
<input type="radio" name="brownout" id="mode-essential" />
<label for="mode-essential">Essential</label>
<article class="service-card card-essential">
  <h2>Essential only</h2>
</article>
```

## Why is it useful?

Reliability docs and operations dashboards often need to explain graceful degradation without JavaScript. This example demonstrates advanced CSS state orchestration with accessible controls, operational motion, responsive layout, and reduced-motion behavior.
