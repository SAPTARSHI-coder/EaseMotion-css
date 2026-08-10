# CSS Reveal Nav on Hover

A minimalist navigation bar that hides completely off-screen until the user moves their mouse near the top edge of the viewport. Built entirely without JavaScript event listeners.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Hidden Nav**: The `.proximity-nav` is positioned `fixed` to the top of the viewport. However, it is entirely pushed off-screen using `transform: translateY(-100%)`.
  - **The Invisible Proximity Trigger**: To detect when the mouse gets "close" to the top of the screen without Javascript, a CSS pseudo-element (`::after`) is attached to the nav bar. This pseudo-element is configured to extend exactly 50px below the bottom edge of the nav (`top: 100%; height: 50px`). Because it technically belongs to the nav element, it catches mouse hover events.
  - **The Reveal**: When the user's mouse enters the invisible 50px trigger zone at the top of the screen, the `:hover` pseudo-class activates on the `.proximity-nav`. The CSS ruleset then applies `transform: translateY(0)`, smoothly sliding the navigation bar back onto the screen.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep slate glassmorphism bar in dark mode and a crisp white frosted glass bar in light mode using `backdrop-filter: blur(10px)`.
- Fully accessible semantic structure. Uses `<nav>`, `<ul>`, and `<header>` tags. Includes `focus-within` fallback logic: if a user relies on keyboard navigation (Tab), tabbing into the hidden navigation links will trigger `:focus-within` and automatically reveal the nav bar, ensuring accessibility is not compromised by the hover-only design. Honors the `prefers-reduced-motion` accessibility standard by disabling the slide animation for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Move your mouse to the very top edge of the viewport to trigger the proximity reveal.

## Files
- `demo.html`: The HTML structure defining the nav wrapper and content.
- `style.css`: The styling, the critical `::after` proximity trigger, and the `focus-within` accessibility fallback.
