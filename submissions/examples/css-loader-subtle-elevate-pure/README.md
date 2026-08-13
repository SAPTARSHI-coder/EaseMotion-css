# CSS Loader: Subtle Elevate

A premium, minimalist loading animation featuring gentle Y-axis lifts and expanding, diffused shadows to simulate subtle physical elevation.

## Features
- Pure CSS and HTML implementation without any JavaScript.
- **Component Architecture**: 
  - **The Gentle Lift**: The loader consists of three simple dots (`.elevate-dot`). The core animation (`@keyframes gentle-lift`) translates them up the Y-axis by a small amount (`-10px`). 
  - **Dynamic Drop Shadows**: The key to the "elevation" illusion is the accompanying shadow. In the resting state, the shadow is tight and close (`0 2px 4px`). As the dot lifts, the shadow expands, blurs further out, and drops lower (`0 8px 12px`), perfectly mimicking a light source casting a shadow from an object moving away from the surface.
  - **Premium Easing**: Instead of a basic `ease` or `linear` timing, the animation uses a custom cubic-bezier curve (`cubic-bezier(0.25, 1, 0.5, 1)`). This causes the dots to snap up slightly faster and ease down very gently, simulating gravity and weight.
  - **Staggered Wave**: The three dots share the exact same animation but utilize staggered `animation-delay` values (`0s`, `0.2s`, `0.4s`) to create a smooth, continuous wave effect.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`). In dark mode, the shadows are significantly darkened and intensified (`rgba(0, 0, 0, 0.8)`) because subtle shadows often get lost on dark backgrounds.
- Fully accessible semantic structure. The decorative dots are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing the wave animation, locking the dots into a static, staggered elevation layout for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the subtle elevate loading animation.

## Files
- `demo.html`: The HTML structure defining the wrapper and the three elevate dots.
- `style.css`: The styling, the dynamic `box-shadow` elevation logic, and the custom cubic-bezier timing keyframes.
