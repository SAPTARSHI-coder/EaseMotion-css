# CSS Glitch-Flicker Tabs (Checkout)

A highly stylized, pure CSS tab component designed for E-Commerce Checkout Layouts. It features an aggressive glitch text effect on the active tab and a flicker entrance animation for the content panes, perfect for cyberpunk or gaming-themed aesthetics.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled purely through hidden radio buttons and the `~` sibling selector.
- Features `flicker-in` keyframe animations when tab content panes mount.
- Includes a continuous `glitch-anim` for typography on the active tab label with cyan and red text-shadow splitting.
- Animated underline indicator using `transform: translateX` with a glowing box-shadow.
- Modern dark-mode cyberpunk checkout styling.
- Fully responsive across desktop, tablet, and mobile viewports.
- Honors the `prefers-reduced-motion` accessibility standard by safely disabling flicker effects.

## Usage
Open `demo.html` in your browser. Click on the tab labels ("Card", "PayPal", "Crypto") to switch views. The active content will abruptly flicker into existence, and the active label will continuously glitch.

## Files
- `demo.html`: HTML structure for the checkout component utilizing radio buttons and glitch class elements.
- `style.css`: Pure CSS styles containing the layout rules, `keyframes`, and glitch/flicker logic.
