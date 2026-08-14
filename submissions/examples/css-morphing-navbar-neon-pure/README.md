# Morphing Navbar: Neon

A visually striking, JavaScript-free responsive navigation bar featuring a morphing hamburger icon, a staggered dropdown animation, and an intense neon aesthetic.

## Features
- Pure CSS and HTML implementation. The mobile menu toggle and animations are managed entirely through the "Checkbox Hack".
- **Component Architecture & Styling Mechanics**: 
  - **Hamburger to X Morph**: The mobile menu button consists of three `span` elements (lines) acting as the hamburger icon. When the hidden `<input type="checkbox">` is checked, the CSS adjacent sibling selector rotates the top and bottom lines by 45 degrees (`transform: rotate(45deg)`) and fades/slides the middle line out (`opacity: 0; transform: translateX(20px)`), creating a seamless morph into an 'X' shape. The color also transitions from Cyan to Pink.
  - **Staggered Menu Reveal**: On mobile, the dropdown menu smoothly expands its height. To make it feel premium, the individual navigation links (`.nav-item`) fade and slide in one by one. This staggered delay is achieved dynamically by assigning a CSS variable style inline (`style="--i: 1;"`, `--i: 2`, etc.) in the HTML, and multiplying it in the CSS: `transition-delay: calc(0.1s * var(--i));`.
- **Theming**: Configured via CSS Custom Properties. The palette features intense neon Cyan and Pink glows created using stacked `text-shadow` and `box-shadow` techniques over a dark, blurred glassmorphism background. Typography uses the Google Font `Teko` to complete the aggressive, futuristic look. Because neon aesthetics rely heavily on dark backgrounds for contrast, this component enforces a dark theme universally.
- Fully accessible semantic structure. Uses `<nav>` and standard lists. The hamburger label uses `aria-label="Toggle Navigation"` for screen readers. Honors the `prefers-reduced-motion` accessibility standard by disabling the morphing and sliding animations if requested by the OS.

## Usage
Open `demo.html` in your browser. On a desktop screen, you will see a sleek top navigation bar. Resize your browser window to a mobile width (below 768px) to see the hamburger menu appear. Click the hamburger to watch it seamlessly morph into an 'X' while the neon-styled links cascade down in a staggered animation.

## Files
- `demo.html`: The HTML structure defining the checkbox hack, the three hamburger lines, and the inline `--i` variables for the staggered animation.
- `style.css`: The styling, the complex `transform` math for the morphing icon, the `transition-delay` logic, and the intense neon glows.
