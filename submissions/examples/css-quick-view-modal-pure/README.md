# CSS Quick View Modal

A pure CSS product card where an interactive quick-view action modal smoothly slides up from the bottom on hover, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript event listeners required).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--card-bg`, `--btn-primary`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Sliding Modal Architecture (Documented in Code)**: 
  - The outer `.product-card` is set to `position: relative` and `overflow: hidden`.
  - The `.quick-view-modal` is set to `position: absolute; bottom: 0; left: 0; width: 100%;`.
  - **Hidden State**: By default, the modal is pushed down exactly out of view using `transform: translateY(100%);` and `opacity: 0;`.
  - **Reveal State**: When `.product-card:hover` or `.product-card:focus-within` is triggered, the modal slides up to `transform: translateY(0);` and `opacity: 1;`.
  - A subtle `backdrop-filter: blur(8px)` gives the modal a modern, frosted glass look over the product image.
- Fully accessible with `prefers-reduced-motion` support. The sliding animation is disabled, falling back to a simple opacity fade for motion-sensitive users. The `:focus-within` pseudo-class ensures keyboard navigators can access the buttons.

## Usage
Open `demo.html` in your browser. Hover over the product card to see the Quick View modal slide up from the bottom edge.

## Files
- `demo.html`: The HTML structure containing the card, product info, and the absolute-positioned modal overlay.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the `transform: translateY` trick.
