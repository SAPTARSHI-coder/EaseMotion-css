# Liquid Fill Button Effect (`ease-liquid-qz`)

## Description
This submission introduces a **Liquid Fill Button** effect to the EaseMotion CSS framework. Upon hovering, the button fills with two overlapping, rotating "liquid" waves, creating a dynamic and fluid motion effect, while the text color adapts for high contrast.

## Features
- Zero dependencies (Pure CSS)
- Uses standard CSS variables and keyframes for smooth performance
- Follows the naming convention (`ease-liquid-qz`) to prevent conflicts
- Fully accessible and responsive

## How to Use
Apply the `ease-liquid-qz` class to any `<button>` element. The HTML structure requires a `.btn-text` wrapper for the text and two `.liquid-wave` elements for the background motion.

```html
<button class="ease-liquid-qz">
    <span class="liquid-wave"></span>
    <span class="liquid-wave wave-2"></span>
    <span class="btn-text">Hover Me</span>
</button>