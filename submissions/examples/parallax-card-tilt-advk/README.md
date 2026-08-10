# Parallax Card Tilt

## What does this do?

A card that tilts in 3D on hover or focus, with its label, title and body text
separating to different depths so they travel by different amounts.

## How is it used?

```html
<div class="pct-row">
  <article class="pct-card" tabindex="0">
    <span class="pct-tag">Engine</span>
    <h2 class="pct-title">Motion DSL</h2>
    <p class="pct-copy">Description.</p>
  </article>
</div>
```

`perspective` belongs on the row, not the card, so sibling cards share one
vanishing point.

## Why is it useful?

Tilt effects are almost always shipped as a JavaScript library that reads
`mousemove` coordinates and writes an inline `transform` on every event. That is
a main-thread handler firing at pointer frequency, and it makes the effect
unavailable to keyboard users entirely, since there is no pointer position to
read.

Doing it with `:hover` and `:focus-visible` costs no script and gives keyboard
users the same affordance — the card responds when tabbed to. The trade-off is a
fixed tilt angle rather than one that tracks the cursor, which for a card grid is
a reasonable exchange.

The parallax itself is genuine 3D rather than staged offsets: one rotation on the
parent, with children at different `translateZ` depths inside `preserve-3d`. The
perspective divide then makes nearer layers sweep further across the screen than
distant ones automatically, so depths can be tuned by changing one number per
layer instead of hand-computing per-layer translations.

Reduced motion removes the rotation and all depth travel, substituting a border
colour change so hover still gives feedback.
