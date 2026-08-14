# CSS Glass Effect: Bouncing Spring

A hardware-accelerated, JavaScript-free glassmorphism UI element. Features a highly elastic `cubic-bezier` hover animation that simulates real-world spring physics.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the spring physics or the glass refraction.
- **Component Architecture**: 
  - **Ambient Background**: True glassmorphism requires a colorful, dynamic background to refract. This scene uses absolute-positioned `.orb` elements with `filter: blur()` floating slowly behind the main UI.
  - **Glassmorphism Core**: The `.glass-card-spring` element achieves the frosted glass look using a translucent `background-color`, a heavy `backdrop-filter: blur(16px)`, a thin semi-transparent `border` to catch the light, and a subtle inner `box-shadow` for volume.
  - **Bouncing Spring Physics**: Standard CSS transitions (like `ease` or `ease-in-out`) look mechanical and rigid. To create an organic "bouncing spring" effect on hover, this component uses a custom CSS `cubic-bezier(0.34, 1.56, 0.64, 1)` timing function. 
  - **The Elasticity**: Notice the Y-value in the bezier curve (`1.56`) exceeds `1.0`. This mathematically forces the CSS transition to "overshoot" the final target value (`transform: scale(1.05)`) and rubber-band back down into place, perfectly simulating physical elasticity without any JS physics libraries.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The glass opacities, highlight strengths, and shadow depths automatically adjust to remain legible and beautiful against both light and dark backgrounds.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the exaggerated elastic bezier curve is swapped out for a standard, fast, linear transition to prevent motion sickness.

## Usage
Open `demo.html` in your browser. Hover over the glass card (and the icon inside it) to trigger the highly elastic, rubber-band spring physics.

## Files
- `demo.html`: The HTML structure defining the ambient background orbs and the glassmorphism card UI.
- `style.css`: The styling, the glassmorphism blur and border logic, and the custom `cubic-bezier` transition that drives the bouncing spring physics.
