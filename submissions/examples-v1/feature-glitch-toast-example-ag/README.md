# Glitch Toast Example (Standard)

## Description
A standard HTML/CSS toast notification component that implements a "Glitch" Hover Effect. When the user hovers over the toast, it rapidly shifts and generates color-shifted pseudo-elements, simulating a digital glitch or error state. This is highly effective for critical error alerts.

## Files
- `demo.html`: Contains the toast markup with an icon and text.
- `style.css`: Contains the dark-theme toast styling and the `@keyframes toast-glitch-anim-ag` hover effect utilizing `::before` and `::after` layers for the chromatic aberration glitch style.

## Accessibility
- Uses `role="alert"` so assistive technologies announce it when it appears.
- **Reduced Motion**: Disables the rapid shifting and flashing pseudo-elements completely. Uses a static `scale(1.02)` transform on hover instead to provide simple interactive feedback without triggering photosensitive or motion-sensitive issues.
