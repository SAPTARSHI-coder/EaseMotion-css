# Breathing CTA

## What does this do?

A primary call-to-action with a slow expanding halo and a sheen that sweeps
across the button once on hover or focus.

## How is it used?

```html
<a class="bcta" href="#start"><span class="bcta__label">Get started</span></a>
<a class="bcta bcta--quiet" href="#docs"><span class="bcta__label">Read the docs</span></a>
```

## Why is it useful?

Attention-drawing buttons usually pulse `opacity` or `scale`, which makes the
label itself move or fade — the text becomes harder to read exactly while the
effect is asking you to read it. Animating an outward `box-shadow` instead keeps
the button box, and therefore the label, perfectly still: only the halo around it
changes, so legibility is never traded for emphasis. It also costs no layout,
since `box-shadow` is painted outside the border box.

Splitting the halo loop from the hover sheen matters for the reduced-motion path.
They can be treated differently: the autonomous 3.6s loop is the part that
qualifies as unsolicited motion and is replaced with a static ring, while the
sheen is user-initiated and could be kept — this implementation drops both for
safety, but the structure makes either choice a one-line change.

The `--quiet` modifier shares the geometry with no animation at all, so primary
and secondary actions stay visually related while only one competes for
attention.
