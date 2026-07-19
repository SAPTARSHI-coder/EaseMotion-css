# Slide Cart Panel

A shopping cart panel that slides in from the right using a CSS custom property `--panel-open` to control the slide transition.

## Features

- Slide-in cart panel with bounce cubic-bezier transition
- Overlay backdrop with opacity transition
- Cart count badge indicator
- Product listing with hover effects
- JS toggles the `--panel-open` CSS variable

## Usage

Include `style.css` and structure the HTML with a `.cart-panel` element whose `transform: translateX()` is controlled by `--panel-open` (0 = closed, 1 = open). Toggle the variable with JavaScript.
