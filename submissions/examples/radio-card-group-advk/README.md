# Radio Card Group

## What does this do?

A plan/option picker where each choice is a full card — title, description,
price — rather than a small circle with a text label next to it. The
entire card is clickable because the `<label>` wraps the whole tile,
including a visually-hidden `<input type="radio">`.

## How is it used?

```html
<label class="rcg-card">
  <input type="radio" name="rcg-plan" value="pro" class="rcg-input" />
  <span class="rcg-title">Pro</span>
  <span class="rcg-desc">Everything, plus team seats.</span>
  <span class="rcg-price">$29/mo</span>
</label>
```

Selected/focus styling is applied to `.rcg-card` via `:has(.rcg-input:checked)`
and `:has(.rcg-input:focus-visible)`, since the radio itself is visually
hidden and there's no visible circle to style directly.

## Why is it useful?

A plain radio list works but scales poorly once each option needs a
description or a price — that content either gets cramped next to a tiny
circle or moved outside the label, which shrinks the click target back down
to just the circle and its immediate text. Wrapping the input in a `<label>`
that also contains the description keeps the whole card clickable, and
`:has()` lets a single selector on the *card* react to the *input's* state
without a sibling combinator or extra JS-managed classes.

The input is hidden with a `clip`-based visually-hidden technique, not
`display: none`, which would remove it from the accessibility tree — this
way the group still behaves like ordinary radio buttons for keyboard and
screen-reader users, arrow-key navigation included.
