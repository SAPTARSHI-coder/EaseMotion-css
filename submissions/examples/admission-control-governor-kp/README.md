# Admission Control Governor KP

## What does this do?

Admission Control Governor KP is an advanced CSS-only capacity gate for explaining open, guarded, shed, and drain states. It uses semantic radio controls, animated admission lanes, conic quota visualization, responsive state cards, and reduced-motion support.

## How is it used?

Use radio inputs as the governor state controller. Labels switch the active mode while sibling selectors update quota pressure, lane intensity, and the selected state card.

```html
<input type="radio" name="gate" id="gate-shed" />
<label for="gate-shed">Shed</label>
<article class="state-card card-shed">
  <h2>Load shedding</h2>
</article>
```

## Why is it useful?

Reliability and platform teams often need to show admission control, load shedding, and queue drain behavior without JavaScript. This example demonstrates advanced CSS state orchestration with accessible controls, operational motion, and responsive layout.
