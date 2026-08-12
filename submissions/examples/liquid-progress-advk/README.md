# Liquid Progress

## What does this do?

A circular progress gauge that fills like liquid in a vessel, with a moving
surface built from two offset wave layers.

## How is it used?

```html
<div class="lqp-gauge" style="--fill: 61%" role="progressbar"
     aria-valuenow="61" aria-valuemin="0" aria-valuemax="100" aria-label="Memory">
  <span class="lqp-liquid"></span>
  <span class="lqp-value">61%</span>
</div>
```

Set `--fill` to any percentage; the waterline follows and transitions smoothly
when the value changes.

## Why is it useful?

`components/progress.css` covers linear bars only. A radial fill communicates
"capacity remaining" far better than a bar for quantities that have a natural
ceiling — disk usage, quota, battery — because the container itself represents
the maximum.

The implementation is worth having as a reference because the naive version
(animating `height`) triggers layout on every frame. Here the liquid block is a
fixed size and only `transform: translateY()` changes, which stays on the
compositor. The waves are a `repeating` radial-gradient scrolled with
`background-position`, so the surface costs no extra elements.

The percentage label stays legible against both the empty track and the fill by
using `mix-blend-mode: difference` rather than a second clipped copy of the text.
Under `forced-colors` that blend is switched off and the label reverts to
`CanvasText`, since blend modes do not survive High Contrast substitution.
