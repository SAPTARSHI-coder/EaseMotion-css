# hover-tilt-3d

A pure-CSS 3D hover tilt effect, tuned for smoothness and crisp text. On
hover/focus, the element lifts off the page and rotates on the X and Y
axes with a soft spring easing, with an optional light-sweep "shine"
variant.

## Why this is different from existing hover effects

The framework currently ships `ease-hover-grow`, `ease-hover-morph-card`,
`ease-hover-glow`, `ease-hover-lift`, `ease-hover-shimmer`,
`ease-hover-underline`, and `ease-hover-bounce-text` — none of which use a
3D perspective/rotation transform. This fills that gap for cards, images,
and buttons that want a more tactile, dimensional hover response.

## Performance & rendering notes

Two problems in earlier drafts, and how they're fixed:

**1. Janky motion.** Animating `box-shadow` directly forces a repaint
every frame. Fixed by moving the shadow to a `::after` pseudo-element
that only fades `opacity` in — cheap, compositor-only.

**2. Blurry / glitchy text on hover.** This happened because
`perspective(...)` was included *inside* the same `transform` property
that was also rotating, on the same element as the text. Recomputing the
projection matrix and the rotation together, every frame, on a text
layer causes shimmering/blurry text in most browsers — the sharper the
angle, the worse it looks.

The fix: `perspective` now lives on a static **parent wrapper**
(`.tilt-wrap`), set once and never animated. The card itself only
animates `rotateX / rotateY / translateY / scale` against that fixed
projection. This is the standard, stable pattern for 3D tilt cards and
keeps text crisp through the whole transition. Rotation angles were also
trimmed slightly (5-6deg instead of 7-9deg) since sharper angles make any
residual sub-pixel blur more visible on text specifically.

## Files

- `demo.html` — standalone live demo (tilt, reverse, and tilt+shine)
- `style.css` — the raw CSS for the effect

## Usage

Important: the tilted element must sit inside a `.tilt-wrap` container —
that's what supplies the fixed 3D perspective.

```html
<link rel="stylesheet" href="style.css" />

<div class="tilt-wrap">
  <div class="hover-tilt">Tilts up on hover</div>
</div>

<div class="tilt-wrap">
  <div class="hover-tilt hover-tilt-reverse">Tilts the opposite direction</div>
</div>

<div class="tilt-wrap">
  <div class="hover-tilt hover-tilt-shine">Tilts and adds a light sweep</div>
</div>
```

## Notes

- Pure CSS, no JavaScript or mouse-tracking required.
- `@media (prefers-reduced-motion: reduce)` disables all motion for users
  who've opted out.
- Suggested integration name if accepted: `ease-hover-tilt` /
  `ease-tilt-wrap` (`ease-hover-tilt-reverse`, `ease-hover-tilt-shine`),
  added to `components/` or `core/animations.css` alongside the other
  hover effects.