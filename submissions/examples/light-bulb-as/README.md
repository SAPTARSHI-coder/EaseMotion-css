# Light Bulb

### What does this do?

It shows a light bulb you can switch on and off. Flipping the toggle lights the glass warm yellow, heats the filament to orange, casts a pulsing glow, and even warms the page background; switching off returns it to a cold grey bulb. It is all driven by a checkbox and `:has()`, no JavaScript.

### How is it used?

```html
<div class="lamp">
  <div class="bulb"><span class="glow"></span><div class="glass"><svg class="filament">...</svg></div><span class="base"></span></div>
  <label class="switch"><input type="checkbox" checked /><span class="track"><span class="knob"></span></span></label>
</div>
```

The filament is an SVG path, and the whole on state is driven from the toggle: `.lamp:has(.switch input:checked)` lights the glass, filament, and glow, while `body:has(...)` warms the background.

### Why is it useful?

Smart home controls, idea prompts, and dark or light demos use a bulb. This gives an interactive bulb with a glow and a working switch styled entirely with CSS and no script.
