# CSS Nav: 3D Perspective Tilt

A responsive **3D Perspective Tilt navigation** component built entirely with HTML and Vanilla CSS.

Navigation cards rise from the surface and tilt in perspective when hovered or focused, creating a lightweight three-dimensional interaction.

## ✨ Features

- 3D perspective navigation
- Tilt-style hover interaction
- Depth and elevation effect
- Layered shadows
- CSS `transform-style: preserve-3d`
- Native keyboard focus support
- Responsive navigation grid
- Dark-mode compatible
- Light-mode compatible
- Reduced-motion support
- Hardware-friendly transforms
- No JavaScript
- No external dependencies

## 🎯 Interaction

Each navigation card uses CSS transforms to simulate depth.

On hover/focus:

- The card moves upward
- Perspective rotation is applied
- Shadow depth increases
- Content moves forward on the Z axis
- Accent lighting becomes visible
- The bottom depth line expands

Alternating cards use opposite tilt directions to make the navigation feel more dynamic.

## 🛠️ CSS Techniques

The component uses:

- `perspective`
- `perspective-origin`
- `transform`
- `rotateX()`
- `rotateY()`
- `translateY()`
- `translateZ()`
- `transform-style: preserve-3d`
- CSS gradients
- Box shadows
- CSS transitions

Example:

```css
.nav-card:hover {
  --lift: -14px;
  --tilt-x: 4deg;
  --tilt-y: -5deg;

  transform:
    translateY(var(--lift))
    rotateX(var(--tilt-x))
    rotateY(var(--tilt-y))
    translateZ(0);
}