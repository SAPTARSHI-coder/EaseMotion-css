# Deadline Budget Broker KP

## What does this do?

Deadline Budget Broker KP is an advanced CSS-only resilience console for visualizing reserve, slice, deadline, and shaping modes. It includes semantic radio controls, animated deadline lanes, a conic latency ring, responsive service cards, and reduced-motion support.

## How is it used?

Use radio inputs as the deadline mode controller. Labels switch the active mode while sibling selectors update latency pressure, lane emphasis, and the selected service card.

```html
<input type="radio" name="deadline" id="mode-deadline" />
<label for="mode-deadline">Deadline</label>
<article class="service-card card-deadline">
  <h2>Confirm deadline</h2>
</article>
```

## Why is it useful?

Reliability docs and operations dashboards often need to explain deadline budgets without JavaScript. This example demonstrates advanced CSS state orchestration with accessible controls, operational motion, responsive layout, and reduced-motion behavior.
