# Numeric Rating Scale

## What does this do?

An 11-point (0–10) NPS-style rating scale where clicking a number fills its
box solid, driven entirely by `:has(input:checked)` on the wrapping label —
no click handler needed to apply the "selected" visual state.

## How is it used?

```html
<div class="rin-scale">
  <label class="rin-num"><input type="radio" name="rin-score" value="7" /><span>7</span></label>
  <!-- ...0 through 10 -->
</div>
```

Every number shares the same radio `name`, so the browser's native radio
semantics guarantee exactly one can be selected; `.rin-num:has(input:checked)`
styles whichever label currently wraps the checked radio.

## Why is it useful?

A version of this pattern without `:has()` typically needs a `click`
listener that removes a "selected" class from every button and adds it to
the one just clicked — essentially reimplementing radio-group exclusivity
in JavaScript on top of elements that could have just been real radio
inputs to begin with. Using actual `<input type="radio">` elements means
the browser's own radio-group semantics (exactly one checked, arrow-key
navigation between options once one has focus) apply for free, and
`:has()` lets the *visual* styling react to that native state without a
script mirroring it into a separate class.

The visible number lives in a `<span>` alongside the visually-hidden radio
inside the same `<label>`, rather than as a sibling — that's what makes
`:has()` able to reach both the input (to check its state) and drive
styling on the label itself, since `:has()` matches based on descendants,
and the label is the common ancestor of both the checkbox and its number
text.
