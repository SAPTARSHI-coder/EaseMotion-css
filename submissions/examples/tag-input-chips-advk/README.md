# Tag Input Chips

## What does this do?

A tag/chip input: typing a value and pressing Enter or comma turns it into a
removable chip; Backspace on an empty field removes the last chip. The text
input lives inside the same flex container as the chips, so it reflows
naturally as chips are added.

## How is it used?

```html
<div class="tic-list" id="tic-list">
  <input id="tic-input" class="tic-input" type="text" onkeydown="tagKeydown(event, tic-list)" />
</div>
```

`tagAdd` inserts each new chip with `insertBefore(chip, inputEl)`, keeping
the input pinned as the last flex item so new chips always append before the
active cursor position, matching how the field visually reads left to
right.

## Why is it useful?

Tag inputs are usually built with the text field as a fixed-width box
separate from the chip list, which either wastes space when empty or
truncates the typed value when the list is full. Making the input a `flex: 1`
item inside the same flex row as the chips means it always claims whatever
horizontal space is left and — thanks to `flex-wrap: wrap` and a
`min-width` floor — drops to its own line once the chips crowd it out
instead of shrinking to an unusable sliver.

Each chip's remove button carries an `aria-label` naming the specific tag
("Remove React"), rather than a bare "×", so screen reader users removing
tags by keyboard know which one they're about to delete.
