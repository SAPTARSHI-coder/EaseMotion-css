# `ease-dark-mode-toggle` — CSS-Only Sun/Moon Morphing Toggle

A high-performance, pure-CSS dark mode toggle switch optimized for the EaseMotion CSS framework. This component implements modern layout design systems, scaling matrices, and a highly smooth SVG icon-morphing architecture driven completely by an accessible HTML checkbox toggle hack.

## How the Checkbox Hack Operates
By using a hidden checkbox element paired with an adjacent sibling combinator (`:checked + .ease-toggle-track`), the browser maintains component states intrinsically. Toggling this checkbox instantly updates custom property tokens across the layout framework without executing costly JavaScript DOM manipulations.

## Integration Guide
To link this module directly to incoming v1.1 global token frameworks, route your theme parameters through the variable hooks exposed below:

```css
/* Connect custom hooks to your existing layout rules */
body {
  background-color: var(--ease-toggle-bg, #ffffff);
  transition: background-color 0.3s ease;
}
