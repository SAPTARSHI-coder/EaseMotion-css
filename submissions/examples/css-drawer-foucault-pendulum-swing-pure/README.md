# CSS Drawer: Foucault Pendulum Swing

A hardware-accelerated, JavaScript-free drawer/sidebar component featuring physics-based rotation that mimics the swing and momentum of a Foucault pendulum.

## Features
- Pure CSS and HTML implementation. The drawer toggle mechanism relies entirely on the CSS Checkbox Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **Pendulum Mechanics**: The `.drawer-panel` has its `transform-origin` set to `100% 0%` (the absolute top-right corner). This acts as the pivot point for the pendulum. A small visual `.pivot-hinge` is placed there to ground the effect.
  - **Swing Animation**: By default, the drawer is rotated `90deg` out of frame. When opened via the hidden checkbox, it triggers the `pendulum-swing` `@keyframes` animation. Instead of a simple ease, the keyframes explicitly define overshoot angles (`-15deg`, `5deg`, `-2deg`, `0deg`) to simulate gravity, momentum, and friction as the heavy drawer settles into its final vertical resting place.
  - **Page Content Filter**: To focus attention on the swinging drawer, the `.page-content` transitions into a blurred, dimmed state (`filter: blur(4px) brightness(0.6)`) when the drawer opens.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a dark, sepia-toned base (`#1a1918`) with metallic gold accents (`#d4af37`), complementing the classical physics theme.
- Fully accessible semantic structure using `<aside>` and `<nav>` tags. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the pendulum rotation keyframes are disabled, and the drawer falls back to a standard, instantaneous 2D slide-in translation.

## Usage
Open `demo.html` in your browser. Click the "Release Pendulum" button to trigger the pure CSS drawer. Notice how the drawer swings down from the top right corner, overshooting its final resting place slightly before settling, mimicking physical mass.

## Files
- `demo.html`: The HTML structure defining the checkbox hack setup, the page content, the overlay, and the drawer panel with its visual hinge.
- `style.css`: The styling, the `transform-origin` pivot setup, the keyframe animation defining the physics overshoots (`pendulum-swing`), and the fallback logic for reduced motion.
