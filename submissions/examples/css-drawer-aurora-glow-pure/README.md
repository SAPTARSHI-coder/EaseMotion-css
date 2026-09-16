# CSS Drawer: Aurora Glow

A hardware-accelerated, JavaScript-free sidebar UI element. Features a vibrant, animated gradient aurora that blooms behind a heavily frosted glass drawer panel.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the open/close state logic or the background animations.
- **Component Architecture**: 
  - **The Pure CSS Checkbox Hack**: The entire drawer system's open/close state is managed by a hidden `<input type="checkbox">` at the root of the document. When the user clicks the "Open Drawer" button (which is actually a `<label>`), it checks the box. The CSS general sibling combinator (`~`) then slides the drawer into view and fades in the overlay.
  - **The Aurora Engine**: At the very back of the `.drawer-panel` sits the `.aurora-engine`. It uses multiple `radial-gradient` backgrounds layered on top of each other. A CSS `@keyframes` animation shifts the `background-position` over time, causing the vibrant colors to fluidly mix and swirl like the aurora borealis.
  - **The Glassmorphism UI**: Directly in front of the engine sits the `.drawer-content-glass`. This is where the actual navigation content lives. Crucially, it applies a heavy `backdrop-filter: blur(30px) saturate(150%)`. This filter physically diffuses the harsh, vibrant gradients of the aurora engine behind it, creating a beautiful, soft, glowing glass effect that reacts dynamically as the gradients shift.
  - **The Interactive Overlay**: A `.drawer-overlay` covers the rest of the page when the drawer is open. Because it is also a `<label>` linked to the hidden checkbox, clicking anywhere outside the drawer automatically closes it.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). Note: This component is designed to look most striking in dark mode environments where the aurora glow can contrast heavily.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the drawer slide animation is swapped for a simple fade, and the ambient aurora background animation is disabled.

## Usage
Open `demo.html` in your browser. Click the "Open Drawer" button. Notice the vibrant gradients swirling behind the frosted glass panel. Click the overlay or the "X" button to close the drawer. All of this state management is handled purely by CSS.

## Files
- `demo.html`: The HTML structure defining the hidden checkbox, the interactive overlay, the aurora engine, and the glassmorphism UI container.
- `style.css`: The styling, the `backdrop-filter` logic, the multi-stop `radial-gradient` aurora animations, and the `~` sibling selector logic that drives the drawer's slide transitions.
