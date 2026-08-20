# Expandable Card List

## What does this do?

An order-history list where each card expands to reveal details, using a
`grid-template-rows: 0fr` to `1fr` transition so the detail panel animates
to its real content height with no JavaScript measuring `scrollHeight`.

## How is it used?

```html
<li class="ecd-card">
  <button class="ecd-summary" onclick="ecdToggle(this)" aria-expanded="false" aria-controls="ecd-detail-1">
    <span>Order #4471</span>
    <span class="ecd-chevron" aria-hidden="true"></span>
  </button>
  <div class="ecd-detail" id="ecd-detail-1">
    <div class="ecd-detail-inner"><p>...</p></div>
  </div>
</li>
```

`ecdToggle` only flips `aria-expanded` and a `.ecd-card--open` class — the
actual height animation is entirely CSS-driven from that one class.

## Why is it useful?

Animating an expand/collapse panel to its natural content height with
`max-height` requires either a hard-coded ceiling (which clips long content
or wastes most of the transition on empty space for short content) or a JS
measurement of `scrollHeight` at the moment of toggling — and that
measurement goes stale the instant the detail content's own height changes
later without a re-toggle, e.g. if a subsequent order gets an extra line
item added to its detail view. `grid-template-rows: 0fr → 1fr` sidesteps
both problems: `1fr` always resolves to the content's actual current
height at animation time, computed fresh by the browser's own layout
engine, so it's correct regardless of when or how the content's height
last changed.

`.ecd-detail-inner` needs `overflow: hidden` specifically because a `0fr`
grid track still allows its content to overflow visually without that —
the grid track shrinking to zero height doesn't clip content on its own,
only combined with `overflow: hidden` on the child does the collapsed
state actually hide the detail text rather than leaving it visibly poking
out above the collapsed card.
