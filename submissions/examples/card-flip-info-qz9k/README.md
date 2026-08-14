# Flip Info Card

## What does this do?

A team-member card that flips to reveal a bio on the back, driven by a
checkbox's `:checked` state — no JavaScript, and both faces are real,
always-present markup rather than content swapped in on flip.

## How is it used?

```html
<label class="cfi-card">
  <input type="checkbox" class="cfi-toggle" aria-label="Flip card to see bio" />
  <div class="cfi-inner">
    <div class="cfi-face cfi-face--front">...</div>
    <div class="cfi-face cfi-face--back">...</div>
  </div>
</label>
```

The checkbox lives inside the same `<label>` as the card, so clicking
anywhere on the card toggles it; `.cfi-inner` rotates 180° on `:checked`,
and `.cfi-face--back` is pre-rotated 180° at rest so it lands right-side-up
once the shared rotation completes.

## Why is it useful?

A flip card whose back content is only inserted into the DOM (or made
visible) after a click means that content is invisible to a screen reader
that hasn't triggered the flip, and invisible to the browser's native
find-in-page search regardless of interaction — both real accessibility
and discoverability gaps compared to content that's simply present but
visually rotated away. Because both faces here are real, always-rendered
elements (just facing away via `backface-visibility: hidden` before the
flip), the back text exists in the DOM from page load, reachable by
find-in-page and by a screen reader's virtual cursor navigating the page
linearly, independent of the visual flip state.

Using a checkbox (rather than a `button` with a JS-toggled class) means
the flip state is real form state — reachable via Tab, toggleable with
Space, and stateful in a way that persists correctly if the card is part of
a form that gets serialized, none of which a purely visual class-based
toggle provides without extra work.
