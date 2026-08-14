# CSS Snowglobe Background

A self-contained animated snowglobe scene created entirely with HTML and CSS.

## Features

- Pure CSS animation
- Falling snow effect
- CSS-generated moon with crater details
- Layered mountain scenery
- CSS evergreen trees
- Glass highlight effect
- Responsive design
- No JavaScript required
- Respects `prefers-reduced-motion`

## Files

- `demo.html` — Demo page and snowglobe structure
- `style.css` — Complete styling and animations

## How to Use

1. Copy the HTML structure from `demo.html`.
2. Include `style.css` in your project.
3. Place the `.snowglobe` component wherever the animated scene is needed.
4. Customize the CSS variables to change the colors.

## Customization

The main colors can be changed using the variables at the beginning of `style.css`:

```css
:root {
  --sky-top: #101d3d;
  --sky-bottom: #263f72;
  --snow: #ffffff;
  --mountain-back: #49658c;
  --mountain-front: #2f486d;
  --tree-dark: #102d35;
  --tree-light: #1c4a4b;
}