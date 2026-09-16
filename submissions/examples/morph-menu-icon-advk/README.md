# Morph Menu Icon

## What does this do?

A three-bar menu icon that morphs into a close cross, a back arrow, or a vertical
kebab — three variants sharing identical markup.

## How is it used?

```html
<label class="mmi-cell">
  <input class="mmi-input" type="checkbox" />
  <span class="mmi-icon"><i></i><i></i><i></i></span>
</label>
```

Add `mmi-icon--arrow` or `mmi-icon--kebab` for the other two targets.

## Why is it useful?

Icon morphs are usually shipped as SVG path interpolation or an icon-font swap.
Both replace one shape with another, so the transition is a crossfade and the
user does not see *where* the old icon went. Transforming three persistent bars
keeps object identity: the top bar visibly becomes the top stroke of the cross.

Because the state lives on a checkbox, the component works with no script and
stays keyboard-operable for free — `:focus-visible` on the input drives the ring
on the icon via the adjacent sibling selector.

Reduced motion keeps the state change but drops the rotation and travel to a
short opacity transition, so the icon still updates without a spinning element.
The bars use `background: CanvasText` under `forced-colors` so the icon survives
High Contrast, which an icon font set via `color` would not reliably do.
