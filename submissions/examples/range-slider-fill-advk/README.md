# Range Slider Fill

## What does this do?

A native `<input type="range">` whose track shows a coloured fill up to the
thumb position.

## How is it used?

```html
<input class="rsf" type="range" min="0" max="100" value="64" style="--v: 64%"
       oninput="this.style.setProperty('--v', this.value + '%')" />
```

One line mirrors the value onto `--v`; the fill follows.

## Why is it useful?

A filled track is the single most requested range-input style and the one with
the worst cross-browser story. `::-webkit-slider-runnable-track` has no Firefox
counterpart, `::-moz-range-progress` has no WebKit counterpart, and the usual
result is a stylesheet with two divergent implementations that drift apart.

Putting a hard-stop `linear-gradient` on the input's own `background` sidesteps
both. Every engine paints the element background, so one declaration produces the
same fill everywhere, and only the thumb needs vendor-prefixed rules — which
cannot be combined into one selector list anyway, since an unrecognised
pseudo-element invalidates the whole rule.

The control stays a real range input, so keyboard stepping, touch dragging and
the announced value all work without intervention. `--v` is only a visual mirror
of the value, never the source of truth, so the slider still functions correctly
if the script never runs.

`outline-offset: 6px` on focus keeps the ring clear of the thumb's shadow, which
otherwise swallows it at small track heights.
