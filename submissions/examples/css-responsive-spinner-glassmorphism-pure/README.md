# Responsive Spinner: Glassmorphism

A highly polished, JavaScript-free loading overlay component featuring a premium frosted glass aesthetic and a dual-ring CSS animation.

## Features
- Pure CSS and HTML implementation. The entire overlay and spinner are styled and animated without any external libraries.
- **Component Architecture & Styling Mechanics**: 
  - **Glassmorphism Overlay**: The loading state is represented by an absolute positioned `.glass-spinner-overlay`. It uses `backdrop-filter: blur(8px)` combined with a highly translucent white background (`rgba(255,255,255,0.1)`) to blur out the content beneath it. An inset `box-shadow` creates a subtle inner border, a hallmark of premium glassmorphism design.
  - **Dual-Ring Spinner**: The spinner itself requires no extra HTML elements. It leverages the `::before` and `::after` pseudo-elements on the `.glass-spinner` container to create two distinct rings:
    - **Outer Ring**: A solid white ring that uses a simple linear rotation (`animation: spin 1s linear infinite`).
    - **Inner Ring**: A slightly smaller, inset ring with partial transparency (`rgba(255,255,255,0.2)`). It spins in the opposite direction and utilizes a custom bouncy `cubic-bezier(0.68, -0.55, 0.265, 1.55)` timing function, creating an asynchronous, mechanical feel to the loading animation.
- **Theming**: Configured via CSS Custom Properties. The variables `--glass-bg`, `--glass-border`, and `--glass-blur` allow you to easily tweak the opacity and intensity of the frost effect. Spinner size, thickness, and colors are also parameterized for easy integration into any design system.
- Fully accessible semantic structure. The overlay utilizes `aria-busy="true"` and `aria-label="Loading"` to inform screen readers of the active loading state. Honors the `prefers-reduced-motion` accessibility standard by disabling the spin animations and presenting a static, semi-transparent ring if requested by the OS.

## Usage
Open `demo.html` in your browser. Watch the background blobs float gently to see the live backdrop blur behind the main container. Inside the simulated container, the glassmorphism overlay blurs the background image and text while the CSS dual-ring spinner animates smoothly in the center.

## Files
- `demo.html`: The HTML structure defining the simulated container, background image, and the glass overlay with accessibility attributes.
- `style.css`: The styling, the `backdrop-filter` glassmorphism properties, and the `@keyframes` logic for the dual-ring spinner.
