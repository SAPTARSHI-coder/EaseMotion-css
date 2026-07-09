# CSS Swing-Hover Accordion (Cyberpunk Neon)

A bespoke, physics-inspired accordion component designed specifically for Cyberpunk Neon layouts. Features a unique "swing-hover" animation where headers act like hanging neon signs that gently sway when hovered, combined with intense neon glows and high-contrast styling.

## Features
- **Swing-Hover Physics:** Uses `transform-origin: top center` and a custom `@keyframes` to create a realistic hanging neon sign sway on hover.
- **Cyberpunk Aesthetic:** Dark backgrounds, bright magenta and cyan glows, sharp edges, and high-contrast text.
- **Zero JS Animation:** Pure CSS implementation using `details` and `summary` for semantic markup.
- **EaseMotion Integration:** Built using EaseMotion's animation variables for consistent timing and easing.

## Usage
Add the `cyber-accordion` class to your container. Each item should be a `<details>` element with the `cyber-item` class, containing a `<summary>` with the `cyber-header` class.

## Files
- `demo.html`: Interactive preview of the component.
- `style.css`: The source CSS containing the swing keyframes and cyberpunk styling.
