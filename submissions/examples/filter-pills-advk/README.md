# Filter Pills

## What does this do?

A multi-select filter bar where each option is a checkbox styled as a pill, with
selected pills gaining a tick alongside their fill.

## How is it used?

```html
<fieldset class="flp-set">
  <legend class="flp-leg">Filter submissions</legend>
  <div class="flp">
    <label class="flp-p"><input type="checkbox" checked /><span>Accessibility</span></label>
    <label class="flp-p"><input type="checkbox" /><span>Animation</span></label>
  </div>
</fieldset>
```

## Why is it useful?

Filter bars are frequently built from `<button>` elements with an `is-active`
class, which loses multi-select semantics entirely — a screen reader announces a
row of buttons with no indication that they are a set or that several are on.
Checkboxes in a `fieldset` with a `legend` communicate all of that natively, and
the state submits with a form.

The animation detail worth reusing is how the tick is added. Inserting a
checkmark on selection normally widens the pill, so the whole row reflows every
time a filter is toggled — with pills wrapping, a click can even push later pills
onto a new line and move the thing the user was about to click next. Transitioning
the glyph's `width` from `0` with `overflow: hidden` grows it smoothly and keeps
the reflow continuous rather than instantaneous.

Selection is carried by three cues — fill, border colour, and the tick — so it
survives colour vision deficiency and the `forced-colors` substitution, where the
pill switches to `Highlight`/`HighlightText`.
