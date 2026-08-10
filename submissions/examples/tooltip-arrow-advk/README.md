# Directional Tooltip

## What does this do?

A CSS-only tooltip that can point up, down, left or right, with the arrow cut
from the bubble rather than drawn as a separate element.

## How is it used?

```html
<span class="tta" data-tip="Appears above" data-pos="top" tabindex="0">Top</span>
```

`data-tip` supplies the text, `data-pos` picks the side.

## Why is it useful?

The traditional tooltip arrow is a zero-size element with coloured borders, or a
rotated square. Both hard-code the bubble colour in a second place, so the arrow
silently stops matching the moment a theme changes — the classic symptom is a
dark-mode tooltip with a light arrow still attached.

Cutting the arrow with `clip-path` from a block that already uses
`background: var(--bubble)` means there is exactly one colour declaration. Both
parts re-theme together, which is why the dark-mode block here only has to
redefine `--bubble` once.

Making the trigger focusable and mirroring every `:hover` rule on
`:focus-visible` means keyboard users get the tooltip too, which border-triangle
implementations usually omit.

Under `forced-colors` the arrow is hidden and the bubble takes a real border.
`clip-path` shapes are filled with the substituted system colour and can end up
invisible or detached, so a bordered rectangle with no pointer is the safer
result.
