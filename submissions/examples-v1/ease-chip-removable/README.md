# Removable Chip (`ease-chip-removable`)

An interactive tag/chip component featuring a sleek hover-reveal close button and a smooth width-collapsing removal animation. Built for the EaseMotion-css framework.

## 🚀 Features

- **Hover Reveal**: The `&times;` close button is hidden by default and smoothly slides out into view when the chip is hovered.
- **Collapse Animation**: Instead of instantly disappearing, removed chips smoothly shrink their `max-width`, `padding`, and `margin` to `0` while fading out, preventing abrupt UI jumping.
- **Overflow Hidden**: Uses `overflow: hidden` and `white-space: nowrap` to ensure text doesn't wrap or spill out during the collapse animation.
- **Color Variants**: Easy to customize using CSS variables for background and text colors.

## 🛠️ Usage

Use the `.ease-chip` container along with the `.ease-chip-close` button.

```html
<div class="ease-chip">
  <span class="ease-chip-text">Frontend</span>
  <button class="ease-chip-close" aria-label="Remove filter">&times;</button>
</div>
