# Emoji Picker Grid

## What does this do?

A grid of emoji reaction buttons navigable with all four arrow keys —
`ArrowLeft`/`ArrowRight` move by one button, `ArrowUp`/`ArrowDown` jump by a
full row — matching how a 2D grid is expected to behave with a keyboard,
rather than only supporting linear Tab-order navigation.

## How is it used?

```html
<div class="epg-grid" role="group" aria-label="Emoji reactions" onkeydown="epgKeydown(event)">
  <button type="button" class="epg-emoji" onclick="epgSelect(this)">😀</button>
  <!-- ...16 buttons total, 8 per row -->
</div>
```

`epgKeydown` computes the target index for `ArrowUp`/`ArrowDown` as
`index ± columns`, where `columns` is a JS constant matching the grid's
CSS `grid-template-columns: repeat(8, 1fr)`.

## Why is it useful?

A grid of many small buttons (emoji, colour swatches, icon choices) is
tedious to navigate with only Tab — moving from the top-left button to the
one directly below it takes as many Tab presses as there are columns,
rather than a single natural "down" keypress. Implementing all four arrow
directions, with vertical movement computed from the actual column count,
matches the interaction model users expect from a genuinely 2D control
(similar to spreadsheet cell navigation) instead of forcing 2D content
through a 1D navigation model.

The column count (`8`) has to be kept in sync between the CSS
`grid-template-columns` declaration and the JS `columns` variable used for
`ArrowUp`/`ArrowDown` math — there's no way for the script to read the
actual rendered column count generically for a fixed `repeat(8, 1fr)`
grid, so this is one of the few places in the codebase where a single
number is duplicated across CSS and JS by necessity, called out explicitly
in the CSS comment so a future change to the column count doesn't silently
break vertical keyboard navigation.
