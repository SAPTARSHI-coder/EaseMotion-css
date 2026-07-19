# Color Swatch Picker

### What does this do?

It shows a row of color swatches where the user picks one and a ring animates around the chosen swatch. It uses radio inputs and CSS only, so the selection is keyboard operable and needs no JavaScript.

### How is it used?

```html
<fieldset class="swatches">
  <legend>Color</legend>
  <div class="swatch-row">
    <label style="--c: #ef4444"><input type="radio" name="color" checked /><span></span></label>
    <label style="--c: #3b82f6"><input type="radio" name="color" /><span></span></label>
  </div>
</fieldset>
```

Set each swatch color with the `--c` custom property on the label. Give every input the same `name` so only one can be chosen, and the checked swatch draws a ring using a layered box shadow.

### Why is it useful?

Color pickers appear in product options and theme settings. This builds a single choice swatch picker with a clear selected ring using only radio inputs and CSS. Each swatch has a hover lift and a keyboard focus outline, both eased and reduced motion aware.
