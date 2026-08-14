# Chip Input

## What does this do?

A tag input where chips scale in when added and collapse their own width when
removed, letting neighbouring chips slide over smoothly.

## How is it used?

```html
<div class="chp-field">
  <span class="chp" style="--i:0">accessibility
    <button class="chp-x" type="button" aria-label="Remove accessibility"></button>
  </span>
  <input class="chp-in" type="text" aria-label="Add a tag" placeholder="Add a tag" />
</div>
```

Adding `is-out` collapses a chip; remove the node after the transition ends.

## Why is it useful?

Removing a chip normally deletes the node immediately, so every chip after it
snaps left. It is a small jank but a constant one, since removal is the most
frequent interaction in a tag field.

The fix is less obvious than it looks. Animating `width` alone is not enough: the
chip's horizontal padding, margin and the flex `gap` all persist, so the row still
jumps by the leftover spacing. Collapsing `max-width`, `padding-inline` and
`margin-inline` together on the same curve is what actually closes the gap
smoothly.

Each chip carries its own `aria-label` on the remove button naming the tag being
removed, rather than a generic "Remove" repeated down the row — with several
chips present, identical labels give a screen reader user no way to tell the
buttons apart.

The `:focus-within` treatment on the container means the whole field reads as
focused when the inner text input has focus, which matches how users perceive the
control even though the focus is technically on a child.
