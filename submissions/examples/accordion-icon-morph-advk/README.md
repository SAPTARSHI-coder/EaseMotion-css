# Accordion Icon Morph

## What does this do?

A `<details>` accordion whose disclosure icon morphs continuously between a
plus and a minus, rather than swapping between two separate icons. One bar
stays fixed; the other rotates 90° to lie on top of it, so "plus" and
"minus" are two rotation states of the same two elements.

## How is it used?

```html
<details class="aim-item">
  <summary class="aim-sum">
    <span class="aim-icon" aria-hidden="true"></span>
    Question
  </summary>
  <div class="aim-panel"><p>Answer.</p></div>
</details>
```

The icon is `aria-hidden` because it's purely decorative — the accessible
open/closed state already comes from `<details>`/`<summary>` semantics, so
duplicating it in the icon's accessible name would be redundant.

## Why is it useful?

The common alternative — swapping a `+` SVG for a `-` SVG on toggle, or
toggling `display` between two icon elements — has no intermediate frame:
the icon just cuts from one shape to the other. Building the plus from two
independent bars and animating only the vertical one's rotation keeps a
single continuous transform running for the entire transition, which reads
as one shape changing rather than one icon being replaced by a different
one.

Only the rotating bar (`::after`) carries a `transition`; the horizontal bar
(`::before`) never moves, which keeps the animation cost to a single
`transform` on one pseudo-element instead of coordinating two moving parts.
