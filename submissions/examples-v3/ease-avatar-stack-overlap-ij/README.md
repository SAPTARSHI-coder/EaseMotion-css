# ease-avatar-stack-overlap

Stacked avatar circles with overlap. On hover, avatars slide apart with a spring-like motion to reveal names beneath each avatar.

## Features

- Circular avatars with initials and distinct background colors
- Avatars overlap by default creating a compact group
- On hover, avatars spread apart using staggered translateX
- Names fade and slide in as avatars separate
- Spring-like cubic-bezier transition for natural motion

## CSS Custom Property Control

- `--hovered`: Set to `1` (via the toggle checkbox) to lock the spread state, `0` for default overlap. The CSS `:hover` on the stack container also triggers the spread regardless of this property.
