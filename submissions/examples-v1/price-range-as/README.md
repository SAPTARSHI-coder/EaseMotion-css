# Price Range Slider

### What does this do?

It shows a dual thumb price range slider built from two overlaid native range inputs, with a highlighted selected band between the thumbs and min and max value chips above. Both thumbs stay draggable and keyboard operable.

### How is it used?

```html
<div class="range" style="--min: 30%; --max: 75%">
  <div class="range-track"><span class="range-band"></span></div>
  <input class="range-lo" type="range" min="0" max="100" value="30" aria-label="Minimum price" />
  <input class="range-hi" type="range" min="0" max="100" value="75" aria-label="Maximum price" />
</div>
```

Two native range inputs stack over one track. The inputs are transparent with pointer events only on their thumbs, so each thumb can be grabbed. The selected band reads its edges from the `--min` and `--max` custom properties, which a host app updates as the user drags.

### Why is it useful?

Shop filters let users set a min and max price. This stacks two native range inputs into a min max slider with a styled selected band, using only CSS, so it stays draggable and keyboard operable. The thumbs show a focus ring when tabbed to.
