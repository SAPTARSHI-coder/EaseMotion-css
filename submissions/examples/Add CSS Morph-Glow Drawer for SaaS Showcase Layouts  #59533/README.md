# CSS Morph-Glow Drawer for SaaS Showcase

A purely CSS-driven interactive drawer (off-canvas menu) component tailored for SaaS dashboard showcases.

## Features

- **Pure CSS/HTML**: Relies entirely on the "Checkbox Hack" (`:checked`) for state management. Zero JavaScript required.
- **Morphing Drawer**: The drawer shape morphs from a rounded semi-circle to a rigid rectangle as it slides in, giving a fluid, dynamic feel.
- **Glow Effects**: Includes pulsing glow elements, glowing buttons with morphing border-radii, and neon text shadows.
- **Responsive**: Adapts gracefully to all viewport sizes using CSS Grid for the layout and percentage-based sizing for the drawer on mobile.
- **Accessible**: Includes `prefers-reduced-motion` media queries to disable animations for users who prefer it.
- **Modern Design**: Utilizes CSS variables for easy theming, backdrop-filters for overlay blur, and smooth cubic-bezier transitions.

## Usage

1. Open `demo.html` in your web browser.
2. Hover over the metric cards to see the 3D lift effect and glowing shadow.
3. Hover over the buttons to see the border morph and background fill effect.
4. Click the buttons to trigger the CSS Checkbox Hack, opening the respective side drawers.
5. Observe the morphing edge of the drawer as it slides in.
6. Click the overlay background or the 'x' button to close the drawer.

## Customization

You can easily adjust the theme by modifying the CSS custom properties in `style.css`:

```css
:root {
  --bg-dark: #0f172a;
  --accent-color: #38bdf8;
  --accent-glow: rgba(56, 189, 248, 0.5);
  --drawer-width: 400px;
  /* ... */
}
```

## Structure

- `demo.html`: The SaaS layout and hidden inputs for drawer state.
- `style.css`: The styling, morphing effects, and animation definitions.
