# Pull Quote Reveal

## What does this do?

An editorial pull quote revealed by a left-to-right wipe as it scrolls into view,
with the attribution following behind it.

## How is it used?

```html
<blockquote class="pqr">
  <p class="pqr-t">Quote text.</p>
  <footer class="pqr-c">Attribution</footer>
</blockquote>
```

## Why is it useful?

Text entrances are almost always opacity fades, which means that for the whole
duration of the animation the type is displayed at reduced contrast. For a
decorative element that is harmless; for a pull quote — which exists specifically
to be read — it makes the most important sentence on the page temporarily the
least legible, and it fails contrast requirements for the duration.

A `clip-path: inset()` wipe has no such problem. Each glyph is either fully
painted or not painted at all, so contrast is correct in every frame. It also
reads as more deliberate, because the reveal follows the reading direction rather
than the whole block materialising at once.

Driving it from `animation-timeline: view()` rather than an observer means the
wipe is scrubbed by scroll position, so scrolling back up genuinely reverses it
instead of leaving the quote stuck revealed.

The attribution is deliberately offset to a later `animation-range` so it lands
after the quote finishes, preserving the reading order rather than competing with
the line it credits.
