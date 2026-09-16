# Quota Burst Arbiter KP

## What does this do?

Quota Burst Arbiter KP is an advanced CSS-only resilience console for visualizing baseline, burst, quota, and shaping modes. It includes semantic radio controls, animated quota lanes, a conic usage ring, responsive service cards, and reduced-motion support.

## How is it used?

Use radio inputs as the quota mode controller. Labels switch the active mode while sibling selectors update usage pressure, lane emphasis, and the selected service card.

```html
<input type="radio" name="quota" id="mode-quota" />
<label for="mode-quota">Quota</label>
<article class="service-card card-quota">
  <h2>Confirm quota</h2>
</article>
```

## Why is it useful?

Reliability docs and operations dashboards often need to explain burst limits without JavaScript. This example demonstrates advanced CSS state orchestration with accessible controls, operational motion, responsive layout, and reduced-motion behavior.
