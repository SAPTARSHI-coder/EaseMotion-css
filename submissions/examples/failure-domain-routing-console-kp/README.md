# Failure Domain Routing Console KP

## What does this do?

Failure Domain Routing Console KP is an advanced CSS-only operational interface for visualizing how incidents move through edge, API, data, and recovery domains. It combines semantic radio controls, orbiting route packets, responsive metric cards, domain-specific active states, and reduced-motion fallbacks.

## How is it used?

Use the radio inputs and labels as the state controller. CSS sibling selectors activate the matching lane, packet route, metric card, and console color treatment.

```html
<input type="radio" name="domain" id="domain-api" />
<label for="domain-api">API</label>
<article class="lane lane-api">
  <h2>API throttle</h2>
</article>
```

## Why is it useful?

Incident dashboards often need to explain failure-domain routing, degradation, and recovery without shipping a custom JavaScript simulator. This example shows how advanced CSS can coordinate state, motion, layout, and accessibility in one portable documentation component.
