# EaseMotion Offcanvas Drawer (Gradient Glow)

A pure CSS, JavaScript-free implementation of a slide-out offcanvas drawer. It features a modern dark-mode aesthetic with a vibrant gradient glow effect utilizing `EaseMotion` design tokens.

## Features
- **Zero JS Dependencies:** Uses the HTML hidden checkbox hack (`:checked` pseudo-class) to manage state.
- **Gradient Glow Edge:** An eye-catching glowing border using a pseudo-element (`::after`) synced with the slide-in animation.
- **EaseMotion Tokens:** Fully integrated with `--em-` variable structure for colors, transitions, and z-indexes.
- **Responsive:** Scales gracefully across mobile (`85vw`), tablet (`320px`), and desktop (`380px`).
- **Accessible & Performant:** Hardware-accelerated transforms (`translate`) and built-in support for `prefers-reduced-motion`.

## Usage

1. Include the `em-drawer-toggle` checkbox at the top of your layout.
2. Link the `<label>` elements (your button, the close icon, and the overlay) to the `id` of the checkbox using the `for` attribute.
3. Place the `em-drawer` as a sibling to the checkbox.

```html
<!-- Structural dependency -->
<input type="checkbox" id="em-drawer-toggle" class="em-drawer-toggle" aria-hidden="true" />

<!-- Triggers -->
<label for="em-drawer-toggle">Open Drawer</label>
<aside class="em-drawer">...</aside>
