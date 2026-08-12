# Glassmorphism Surface Utility (`.ease-glass`)

A modular utility class that turns any container into a frosted-glass surface featuring translucency, backdrop blur, inner highlights, and a hover elevation motion.

## Features
- **Composable Utility:** Drop `.ease-glass` onto any standard HTML element.
- **Hardware-Accelerated Blur:** Uses `backdrop-filter: blur()` for seamless OS-like dynamic glass surfaces.
- **Hover Lift:** Smooth CSS transition for slight elevation and border highlighting.

## Usage

Simply attach the `.ease-glass` class to your HTML element:

```html
<div class="ease-glass my-card">
  <h3>Glass Surface</h3>
  <p>Frosted glass effect with backdrop blur.</p>
</div>