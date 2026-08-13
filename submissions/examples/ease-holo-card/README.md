# Pure CSS 3D Holographic Foil Trading Card

## Abstract

This module provides a pure CSS implementation of an interactive 3D holographic foil trading card. By combining CSS 3D perspective transforms with multi-layered blend modes and dynamic keyframe animations, it creates an iridescent sheen and dynamic lighting response without requiring JavaScript runtime calculation or GPU-heavy WebGL shaders.

## Color-Dodge Compositing

The holographic foil layer is rendered on the `::before` pseudo-element using a wide multi-stop rainbow `linear-gradient` with an expanded `background-size` (300% 300%).

```css
mix-blend-mode: color-dodge;
```

Mathematically, `color-dodge` divides the bottom color (the base artwork) by the inverted top color (the holographic rainbow gradient):

$$\text{Result} = \frac{\text{Base}}{1 - \text{Blend}}$$

This mathematical relationship ensures that light and high-contrast areas of the underlying artwork (`.ease-card-art`) drastically amplify the spectral highlights, while dark region tones constrain the saturation. As `@keyframes ease-holo-sweep` animates the `background-position`, the rainbow refraction sweeps across the card, producing a realistic metallic foil sheen dynamically driven by the underlying image contrast.

## Specular Reflections

The specular shine layer is decoupled from the holographic foil refraction and assigned to the `::after` pseudo-element:

- **Foil Layer (`::before`)**: Handles full-spectrum color dispersion using `mix-blend-mode: color-dodge` and animated linear gradients.
- **Specular Layer (`::after`)**: Simulates direct environmental glare using `mix-blend-mode: overlay` combined with a radial white gradient (`radial-gradient`).

On mouse hover (`:hover`), the radial gradient origin transitions smoothly from `0% 0%` (top-left) to `100% 100%` (bottom-right). Synchronized with the 3D rotation (`rotateX(10deg) rotateY(-15deg) translateZ(20px)`), this origin shift creates the convincing illusion of a stationary light source reflecting across a tilting physical surface.
