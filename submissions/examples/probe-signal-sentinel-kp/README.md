# Probe Signal Sentinel KP

## What does this do?

Probe Signal Sentinel KP is an advanced CSS-only resilience console for visualizing sample, trace, probe, and shaping modes. It includes semantic radio controls, animated probe lanes, a conic signal ring, responsive service cards, and reduced-motion support.

## How is it used?

Use radio inputs as the probe mode controller. Labels switch the active mode while sibling selectors update signal pressure, lane emphasis, and the selected service card.

```html
<input type="radio" name="probe" id="mode-probe" />
<label for="mode-probe">Probe</label>
<article class="service-card card-probe">
  <h2>Confirm probe</h2>
</article>
```

## Why is it useful?

Reliability docs and operations dashboards often need to explain probe signals without JavaScript. This example demonstrates advanced CSS state orchestration with accessible controls, operational motion, responsive layout, and reduced-motion behavior.
