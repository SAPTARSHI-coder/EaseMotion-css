# Morphing Icon Toggles Example

This is a self-contained example demonstrating how to create interactive, morphing icon toggles using pure CSS (the "checkbox hack"), seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🍔 **Menu to X:** Hamburger icon smoothly morphs into a close 'X' by translating and rotating lines.
- ➕ **Plus to X:** Add icon rotates 135 degrees to become a close 'X', changing color to red.
- 🔽 **Chevron Down to Up:** Expand arrow smoothly rotates 180 degrees, changing color to green.
- ⚡ **EaseMotion Integration:** Uses utility classes for layout, spacing, typography, and staggered entrance animations (`ease-fade-in`, `ease-delay-*`).
- ♿ **Fully Accessible:** Includes `aria-label`, `focus-visible` outlines for keyboard navigation, and respects `prefers-reduced-motion`.
- 🚫 **Zero JavaScript:** Entirely driven by HTML `<input type="checkbox">` and CSS transitions.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the `<label class="toggle ...">` block. Ensure the `<input type="checkbox">` is inside the label so clicking the icon toggles it.

## How the "Checkbox Hack" Works
By wrapping the `<input>` inside a `<label>`, clicking anywhere on the label toggles the checkbox state. We hide the actual input (`opacity: 0`) and use the CSS general sibling combinator (`~`) to target the `.slider` and its children when the input is `:checked`, triggering the CSS transitions.