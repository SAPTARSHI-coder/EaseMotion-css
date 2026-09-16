# Elastic Tabs

## What does this do?

A tab strip with an underline that slides between tabs on a spring curve, driven
entirely by radio inputs.

## How is it used?

```html
<div class="etb-tabs" style="--count: 4">
  <input class="etb-radio" type="radio" name="etb" id="etb1" checked />
  <label class="etb-tab" for="etb1">Overview</label>
  <!-- ...more pairs... -->
  <span class="etb-ink" aria-hidden="true"></span>
</div>
```

Set `--count` to the number of tabs; the ink bar sizes itself from it.

## Why is it useful?

`components/tabs.css` ships with `core/tabs.js` to manage the active state.
A radio group gets the same behaviour from the platform: exactly one selection at
a time, arrow-key navigation within the group, and correct exposure to assistive
technology as a radio set — none of which has to be written or maintained.

Sizing the ink bar as `100% / var(--count)` and moving it with `translateX`
percentages means the bar never needs measuring, so there is no
`getBoundingClientRect` call and no resize listener to keep it aligned when the
container reflows.

The elastic feel comes from a single cubic-bezier whose second control point
exceeds 1, producing overshoot and settle. Under reduced motion the same
transition is kept but shortened to a fast linear move — the selection still
reads as a movement between tabs, without the spring.
