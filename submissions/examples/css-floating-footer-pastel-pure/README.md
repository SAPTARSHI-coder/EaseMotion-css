# Floating Footer: Pastel Style

A pure CSS, fixed-position floating footer that embodies a soft, pastel aesthetic with pill-shaped rounded corners and subtle hover animations.

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Component Architecture & Styling Mechanics**: 
  - **Floating Placement**: Utilizes `position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);` to center the footer horizontally and float it above the page content.
  - **Pastel Aesthetics**: Employs a low-saturation color palette (`--pastel-pink`, `--pastel-blue`, `--pastel-yellow`, `--pastel-green`) paired with a soft, tinted drop shadow (`rgba(212, 228, 247, 0.6)`) to create a dreamy, lightweight feel.
  - **Pill Shape**: Uses `border-radius: 100px` on the `.footer-inner` container to create the distinctive pill-shaped floating bar.
  - **Entrance Animation**: Features a custom `float-up` `@keyframes` animation with a spring-like `cubic-bezier` easing curve to gracefully introduce the footer on page load.
  - **Interactive Hover Effects**: 
    - The main container subtly lifts up (`translateY`) and casts a deeper shadow on hover.
    - Navigation links feature an animated underline that scales in from the left and scales out to the right using `transform-origin` manipulation.
- **Responsive Layout**: The footer gracefully collapses into a vertical stack on mobile screens (below `768px`) by changing the `flex-direction` to column and adjusting the `border-radius`.
- Accessible semantic structure using `<header>`, `<main>`, `<footer>`, and `<nav>`. Honors the `prefers-reduced-motion` standard by disabling animations and transitions.

## Usage
Open `demo.html` in your browser. Scroll the page to observe how the footer remains fixed at the bottom of the viewport. Hover over the navigation links and subscribe button to see the interactive animations.

## Files
- `demo.html`: The HTML structure defining the page content and the fixed floating footer component.
- `style.css`: The styling, pastel color variables, fixed positioning logic, and responsive breakpoints.
