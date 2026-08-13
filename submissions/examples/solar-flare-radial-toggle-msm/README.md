# Solar Flare Radial Toggle

1. What does this do? Adds a warm solar-flare toggle switch with a radial glow that expands when the control is enabled.

2. How is it used? Apply `.solar-toggle` to a label that wraps a checkbox and the visual track:

```html
<label class="solar-toggle">
  <input type="checkbox" aria-label="Enable solar mode" />
  <span class="track">
    <span class="flare-ring"></span>
    <span class="thumb">
      <span class="core"></span>
    </span>
  </span>
</label>
```

3. Why is it useful? It gives EaseMotion CSS a vivid toggle pattern with clear focus states, reduced-motion support, and a memorable radial animation that still works as plain HTML and CSS.
