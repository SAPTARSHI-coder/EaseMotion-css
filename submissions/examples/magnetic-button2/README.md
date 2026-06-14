# Magnetic Button Effect

Buttons that subtly pull toward the cursor on hover, creating a magnetic attraction effect. Lightweight vanilla JavaScript with CSS styling.

## Demo

Open `demo.html` in any modern browser and move your cursor near the buttons.

## Features

- 🧲 **Magnetic pull** — button moves toward cursor within radius
- ⚙️ **Configurable** — `data-magnetic-strength` and `data-magnetic-radius`
- 📏 **Proximity based** — closer cursor = stronger pull
- 🔍 **Scale effect** — slight scale up near cursor
- 🎨 **Multiple variants** — outline, ghost, rounded, icon, large
- 🚫 **Disabled state** — no effect, visual only
- ♿ **Accessible** — respects `prefers-reduced-motion`
- 🪶 **Lightweight** — minimal JS, no dependencies

## Usage

### Basic

```html
&lt;a href="#" class="magnetic" data-magnetic&gt;
  &lt;span&gt;Hover Me&lt;/span&gt;
&lt;/a&gt;