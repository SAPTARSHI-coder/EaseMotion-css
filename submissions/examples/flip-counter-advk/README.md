# Flip Counter

## What does this do?

A split-flap ("airport board") digit that rotates a leaf on the X axis to reveal
the next number underneath.

## How is it used?

```html
<div class="fcx-board">
  <span class="fcx-digit" style="--from:'2'; --to:'3'">
    <span class="fcx-leaf"></span>
  </span>
</div>
```

The two faces are supplied as custom properties, so a template can emit the
current and next value without any imperative code.

## Why is it useful?

Counters and stat tiles are everywhere in dashboards, and the usual approach
animates `opacity` on two stacked copies, which reads as a crossfade rather than
a mechanical change. A hinge rotation communicates *replacement* — the old value
physically leaves — which is why departure boards have used it for decades.

It fits EaseMotion because the whole effect is declarative: one `transform-origin`,
one `rotateX`, and the content comes from `content: var(--from)`. There is no
measurement step and nothing to synchronise in JavaScript.

Under `prefers-reduced-motion` the hinge is replaced by a plain opacity fade on the
leaf, so the value still changes visibly without a rotating element.
