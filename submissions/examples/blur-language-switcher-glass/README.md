# Blur Language Switcher (Pure CSS)

A premium, Glassmorphism-inspired Language Switcher dropdown. It uses `backdrop-filter` to create a beautiful frosted glass effect and relies entirely on pure CSS for state management (opening, closing, and animating) without a single line of JavaScript.

## Features
- 🪞 **Authentic Glassmorphism**: Utilizes `backdrop-filter: blur(16px)` layered over translucent backgrounds to dynamically blur whatever elements are behind the dropdown.
- 🎛️ **Pure CSS State**: Uses the hidden checkbox hack (`:checked`) combined with an invisible screen-overlay label to handle opening the menu and closing it when clicking away.
- 📐 **Smooth Entry**: Features a combined fade, slide, and scale transform transition governed by a snappy `cubic-bezier` curve.
- ♿ **Accessible**: Implements `prefers-reduced-motion` to disable background animations and drop the sliding transitions in favor of simple opacity toggles. Fully keyboard navigable via `:focus-visible`.

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--glass-bg` | `rgba(255...0.15)` | The base translucency of the button and dropdown. |
| `--glass-blur` | `blur(16px)` | The intensity of the frosted glass effect. |
| `--anim-duration`| `0.3s` | Speed of the dropdown opening/closing. |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. 
*Note: For the glassmorphism effect to be visible, ensure your application has a background (images, gradients, or colorful shapes) behind the navigation bar.*