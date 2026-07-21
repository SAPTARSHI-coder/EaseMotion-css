# ease-chip-slide-remove

Chip component with a dismiss button. On click, the chip slides to the right and fades out before being hidden.

## Features

- Chip with icon, label, and dismiss button
- Slide-right + fade-out dismissal animation
- Stacks vertically for clean presentation
- Accessible dismiss buttons

## CSS Custom Property Control

- `--dismissed`: Set to `1` to trigger the dismiss animation (translateX +80px, opacity 0). The JavaScript sets this property on the chip element before hiding it after 400ms.
