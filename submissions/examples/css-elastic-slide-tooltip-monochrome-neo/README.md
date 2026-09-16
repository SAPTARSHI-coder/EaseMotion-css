# CSS Elastic Slide Tooltip - Monochrome Neo Layouts

A pure CSS animated tooltip component designed for monochrome neo-style interfaces.

## Features

- Pure CSS animation
- Elastic slide transition effect
- Minimal monochrome design
- Responsive layout
- Keyboard accessible
- CSS custom property controls


## Usage

Open `demo.html` directly in any browser.

Hover or focus on buttons to display the animated tooltip.


## Customization

Animation values can be changed using CSS variables:

```css
:root {
    --tooltip-time: 0.45s;
    --tooltip-scale: 1;
    --tooltip-easing: cubic-bezier(.68,-0.55,.27,1.55);
}