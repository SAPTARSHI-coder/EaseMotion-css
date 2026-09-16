# Empty State Float

## What does this do?

An empty-state panel whose illustration is three CSS shapes drifting gently on
unsynchronised cycles.

## How is it used?

```html
<div class="esf">
  <div class="esf-art" aria-hidden="true">
    <span class="esf-s esf-s--a"></span>
    <span class="esf-s esf-s--b"></span>
    <span class="esf-s esf-s--c"></span>
  </div>
  <h2 class="esf-t">No projects yet</h2>
  <button class="esf-btn" type="button">New project</button>
</div>
```

## Why is it useful?

Empty states are where products most often ship a decorative SVG or Lottie file —
an extra request, sometimes a runtime, for a screen the user ideally sees once.
Three positioned shapes cost nothing and are themeable with the rest of the
stylesheet.

The technique worth borrowing is how the drift avoids looking mechanical. All
three shapes share a single two-line keyframe; only their `animation-duration`
differs (3.2s, 4.1s, 2.7s), and negative `animation-delay` starts each mid-cycle.
Because those durations have no small common multiple, the shapes never visibly
re-synchronise, so the motion reads as organic without any additional keyframes
or randomisation.

Negative delays are what let the animation begin already in progress rather than
having all three shapes start from the same rest position on load, which is the
usual tell that an effect is CSS-driven.

The artwork is `aria-hidden` because it carries no information — the heading and
body text do. Under reduced motion the drift stops entirely; the composition is
static but still complete, since nothing about the layout depended on the
movement.
