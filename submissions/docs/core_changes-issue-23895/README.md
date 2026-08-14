# ease-select-none

Utility classes for `user-select` and `-webkit-user-drag` properties. Controls text selection, copy behavior, and element dragging.

## What

Single-purpose CSS utilities:
- **user-select**: none, text, all, auto, contain (with webkit prefixes)
- **Children scoped**: `ease-select-none-children` applies to all descendants
- **Drag**: `ease-drag-none`, `ease-drag-auto`, `ease-drag-element`
- **Aliases**: `ease-no-select`, `ease-no-copy`, `ease-copy-none`, `ease-copy-all`
- **Touch variants**: `ease-touch-select-none/auto` (applied on touch devices)

## How

1. Include `style.css`.
2. Apply `.ease-select-{value}` to any element.

## Why

Prevents accidental text selection on UI elements (buttons, drag handles, icons, sliders). The `all` value is useful for code blocks to enable quick copying. `contain` limits selection scope within a single element.

## Accessibility

- Avoid using `user-select: none` on content text — it prevents users from selecting/copying information.
- Appropriate use cases: drag handles, button text, slider thumbs, icon labels, decorative elements.
