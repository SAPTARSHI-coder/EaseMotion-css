# Color Swatch Picker

## What does this do?

A theme accent picker where each swatch is a radio, and the selected one is
marked by a ring, a tick and a bolded name.

## How is it used?

```html
<fieldset class="csp-set">
  <legend class="csp-leg">Accent colour</legend>
  <div class="csp">
    <label class="csp-o" style="--c:#4c6ef5">
      <input type="radio" name="c" checked />
      <span aria-hidden="true"></span>
      <span class="csp-n">Indigo</span>
    </label>
  </div>
</fieldset>
```

## Why is it useful?

A colour picker is the one control where colour genuinely is the content — which
makes it the worst possible place to also use colour as the *selection* indicator.
A user with colour vision deficiency may not be able to tell the swatches apart,
so a picker that shows selection by tinting a border gives them nothing.

Three redundant cues solve it: an offset ring in the swatch's own colour, a white
tick inside the selected swatch, and a bolded text name below. Any one of them
communicates the state independently, and the visible names mean the options are
distinguishable even if the swatches are not.

`forced-color-adjust: none` on the swatch is one of the rare correct uses of that
property. High Contrast mode would otherwise replace every swatch with the same
system colour, destroying the only information the control exists to convey — the
selection ring switches to `Highlight` so the state remains visible.

Radios rather than buttons give single-selection semantics, arrow-key navigation
and form submission for free, and the `fieldset`/`legend` names the group.
