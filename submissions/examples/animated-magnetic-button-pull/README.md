# Magnetic Button Pull

A button that gently shifts toward the cursor as the pointer approaches, springing back on mouse-leave — a subtle, modern hover interaction.

## What it does
A `mousemove` listener calculates cursor offset from the button's center and writes it to `--x`/`--y` CSS custom properties, which drive a `translate()` transform with a smooth `transition`.

## How to use it
1. Add `magnetic` class and `data-magnetic` attribute to any button.
2. Include the small JS listener snippet (works with any number of buttons on the page).

```html
<button class="btn magnetic" data-magnetic>Hover near me</button>