# Loading Button

## What does this do?

A submit button that swaps its label for a spinner without changing size, and
reports the busy state to assistive technology.

## How is it used?

```html
<button class="lbn" type="button" aria-busy="false">
  <span class="lbn-label">Save changes</span>
  <span class="lbn-spin" aria-hidden="true"></span>
</button>
```

Add `is-busy`, set `aria-busy="true"` and `disabled` while the request is in
flight.

## Why is it useful?

Replacing button text with "Saving..." or a spinner changes the button's
intrinsic width, so the button — and often the whole form row — jumps at the
moment the user clicks. It is a small shift that lands exactly where attention
is focused.

Stacking the label and spinner in one CSS grid cell means the button is always
sized by its longest state. The spinner appears over the label rather than
instead of it, and nothing reflows.

The spinner is declared with `animation-play-state: paused` and only runs when
`is-busy` is present. That avoids an off-screen animation ticking for every
button on the page, which matters on forms with many actions.

`aria-busy` is the part most implementations omit. A spinner is purely visual;
without it, a screen reader user gets no indication that the action is in
progress. Pairing it with `disabled` also prevents the double-submit that the
visual-only version invites.
