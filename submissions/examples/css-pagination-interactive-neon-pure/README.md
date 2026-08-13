# Interactive Pagination: Neon

A visually striking, JavaScript-free pagination component featuring glowing neon hover states, active page indicators, and smooth scale-in background animations.

## Features
- Pure CSS and HTML implementation. The complex hover interactions and glows are achieved entirely using CSS transitions and box-shadows.
- **Component Architecture & Styling Mechanics**: 
  - **Scale-in Hover Background**: Instead of a simple `background-color` change on hover, each `.page-link` contains a `::before` pseudo-element. This element is a colored circle positioned dead-center `translate(-50%, -50%)` and scaled down to `scale(0)`. On hover, it transitions to `scale(1.5)`, creating a smooth, expanding circular fill effect that covers the square button.
  - **Neon Glow Effects**: The intense neon look is achieved using layered `box-shadow` and `text-shadow` properties. 
    - Hovering over a standard link triggers a cyan outer glow (`0 0 10px`, `0 0 20px`) and a subtle inner glow (`inset 0 0 10px`).
    - The `.active` page uses a deep purple theme. It lacks the hover background fill, instead opting for a permanent, intense text-shadow that makes the number itself appear as a light source.
  - **Tactile Feedback**: The `:active` pseudo-class (triggered when the user physically clicks the mouse down) applies `transform: scale(0.9)`, providing a satisfying "press" animation.
- **Theming**: Configured via CSS Custom Properties. The palette features high-contrast neon Cyan and Purple against a pitch-black/deep-blue radial background. Note: Because neon aesthetics rely heavily on dark backgrounds for contrast, this component enforces a dark theme universally, ignoring the user's OS light-mode preference to maintain stylistic integrity.
- Fully accessible semantic structure. Uses `<nav aria-label="...">` and standard `<ul>`/`<li>`/`<a>` tags. The active page is denoted with `aria-current="page"`, and the prev/next arrows use `aria-label` with `aria-hidden="true"` on the visual symbols. Honors the `prefers-reduced-motion` accessibility standard by disabling the scaling and pulsing animations if requested by the OS.

## Usage
Open `demo.html` in your browser. Hover over the pagination numbers to see the cyan circular background expand and the neon borders glow. Click on a link to see the tactile `scale(0.9)` press effect.

## Files
- `demo.html`: The HTML structure defining the semantic pagination list and ARIA attributes.
- `style.css`: The styling, the complex `box-shadow` layering for neon glows, the `::before` expanding circle animation, and the active state styling.
