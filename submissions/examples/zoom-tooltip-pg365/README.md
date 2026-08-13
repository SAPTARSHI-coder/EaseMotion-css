# Zoom Tooltip

## What does this do?
A tooltip that pops in with a **zoom / scale-in** animation instead of a
plain fade — it grows from a small dot into full size on hover or keyboard
focus, and shrinks back out on dismiss, with a small caret arrow pointing
at the trigger element.

## How is it used?
```html
<div class="zoom-tooltip zoom-tooltip--top" tabindex="0">
  Hover me
  <span class="tooltip">Tooltip text</span>
</div>

<button class="zoom-tooltip zoom-tooltip--right">
  Icon
  <span class="tooltip">Save changes</span>
</button>
```

Four placement modifiers are available: `zoom-tooltip--top`,
`zoom-tooltip--bottom`, `zoom-tooltip--left`, and `zoom-tooltip--right`.
Each positions the tooltip bubble and its caret arrow, and sets the correct
`transform-origin` so the zoom animation scales outward from the edge
closest to the trigger (e.g. from the bottom edge for the `--top`
variant), rather than from a generic center point.

## Why is this useful?
Most tooltip implementations only fade or slide in. A zoom/scale-in gives
the tooltip a more tactile, "popping" feel that draws the eye without
being as jarring as a slide, which fits EaseMotion CSS's animation-first,
JS-free philosophy. It works with `:hover` and `:focus-visible`, so it's
fully usable via keyboard and requires zero JavaScript. The animation is
also disabled under `prefers-reduced-motion: reduce` for accessibility.
