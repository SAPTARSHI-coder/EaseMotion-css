# Shimmer Sweep Card Grid

A pure CSS/HTML shimmer-sweep loading placeholder animation designed for modern e-commerce checkout layouts or card grids. 

## Features
- **Pure CSS**: No JavaScript required.
- **Smooth Animation**: Utilizes CSS `@keyframes` and `linear-gradient` for a sleek sweeping effect.
- **Responsive Design**: Uses CSS Grid for fluid layouts across desktop, tablet, and mobile.
- **Accessible**: Built-in support for `prefers-reduced-motion` to disable animations for users who prefer minimal movement.

## File Structure
- `demo.html` - A clean HTML5 showcase displaying the card grid.
- `style.css` - The pure CSS stylesheet containing layout and animation rules.

## Usage
Simply include the `style.css` in your project and use the provided HTML structure for your loading states. The animation uses CSS custom properties allowing for easy theming of the shimmer colors, speeds, and dimensions.

```css
:root {
    --shimmer-bg: #e2e8f0;
    --shimmer-highlight: #f8fafc;
    --animation-duration: 1.5s;
}
```
