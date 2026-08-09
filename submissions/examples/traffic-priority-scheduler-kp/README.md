# Traffic Priority Scheduler KP

## What does this do?

Traffic Priority Scheduler KP is an advanced CSS-only routing console for explaining how critical, standard, bulk, and paused queues share capacity. It includes semantic radio controls, animated routing lanes, conic capacity rings, responsive queue cards, and reduced-motion handling.

## How is it used?

Use radio inputs as the state controller. Labels switch the selected priority lane while sibling selectors update the capacity ring, lane speed, route intensity, and active card.

```html
<input type="radio" name="priority" id="priority-critical" />
<label for="priority-critical">Critical</label>
<article class="queue-card card-critical">
  <h2>Critical lane</h2>
</article>
```

## Why is it useful?

Platform dashboards and reliability docs often need to show queue fairness, reserved capacity, and pause behavior without JavaScript. This example demonstrates advanced CSS state orchestration with accessible controls, responsive layout, and purposeful motion.
