# Gradient Hover Navbar

A highly polished, modern Navbar component built with pure CSS. It demonstrates advanced CSS hover effects using pseudo-elements, `transform-origin` manipulation, and rich gradients.

## Features

- **Directional Gradient Underlines**: 
  - The navigation links (`.nav-link`) feature an animated gradient underline. 
  - By dynamically shifting the `transform-origin` between `left` on hover and `right` on exit, the underline smoothly slides in from the left and slides out to the right, creating a fluid, continuous motion.
- **Gradient Border Button**: 
  - The "Get Started" button achieves a true CSS gradient border without using complex border-image hacks.
  - It utilizes a pseudo-element (`::before`) sitting underneath the button (`z-index: -1`) with a gradient background. The button itself masks the center with a solid color, creating a perfect gradient border ring.
  - On hover, the button's solid background becomes `transparent`, allowing the full gradient to fill the button seamlessly.
- **Glassmorphism Base**: The entire navbar container floats as a pill shape with a semi-transparent background and `backdrop-filter: blur(12px)` for a sleek modern aesthetic.

## Usage
Include `demo.html` and `style.css` in your project. The gradient colors can be globally adjusted by modifying the CSS variables in the `:root` pseudo-class.
