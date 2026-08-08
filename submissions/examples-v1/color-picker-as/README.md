# Color Picker

### What does this do?

It shows a color picker panel: a saturation and value square with a cursor, a rainbow hue slider you can drag, a preview swatch with hex and rgb codes, and a row of preset swatches. Choosing a preset live updates the preview color, all with no JavaScript.

### How is it used?

```html
<div class="cp">
  <div class="cp-sv"><span class="cp-cursor"></span></div>
  <input class="cp-hue" type="range" min="0" max="360" value="248" />
  <span class="cp-preview"></span>
  <label style="--sw: #ef4444;"><input id="sw2" type="radio" name="sw" /><span></span></label>
</div>
```

The SV area layers two gradients over a base color, the hue slider is a styled `range` input with a rainbow track, and each preset radio drives `.cp:has(#sw2:checked) .cp-preview { background: ... }` so the preview follows the selection.

### Why is it useful?

Design tools, theme editors, and settings screens include color pickers. This provides the full picker layout with a draggable hue slider and working preset swatches, styled entirely with CSS.
