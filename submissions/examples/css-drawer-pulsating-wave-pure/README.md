# CSS Drawer: Pulsating Wave

A hardware-accelerated, JavaScript-free drawer/sidebar component featuring rhythmic, pulsating wave animations and glowing active states.

## Features
- Pure CSS and HTML implementation. The drawer toggle mechanism relies entirely on the CSS Checkbox Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **The Drawer Mechanics**: A hidden `<input type="checkbox">` controls the state of the entire system. When checked, the `.drawer-panel` translates into view (`transform: translateX(0)`), the `.drawer-overlay` fades in, and the main `.page-content` slightly shifts left to accommodate the drawer.
  - **Pulsating Edge Decorator**: The left edge of the drawer features a `.drawer-wave-edge` element. This element uses a gradient background and an intense `box-shadow`. It only begins animating (`edge-pulse`) when the drawer is open, scaling its shadow spread and opacity to simulate a wave of energy pulsing along the border.
  - **Active Item Pulse**: The currently active navigation item (`.nav-item.active`) features an absolute-positioned `.active-pulse` pseudo-element. This uses a `radial-gradient` that continuously scales up and fades out via an infinite `@keyframes` animation, creating a gentle ripple effect behind the text.
  - **Pulsating Button & Avatar**: The trigger button and user avatar feature ring-pulse animations. These are achieved by animating the `box-shadow` spread from `0px` to `20px` while simultaneously dropping the opacity to `0`, creating outward-expanding rings.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a deep dark mode base (`#0a0a0f`) with high-energy cyan and purple accents for the wave effects.
- Fully accessible semantic structure using `<aside>` and `<nav>` tags. Honors the `prefers-reduced-motion` accessibility standard by disabling all continuous pulse animations and drawer slide transitions for users who prefer less motion.

## Usage
Open `demo.html` in your browser. Click the "Open Menu" button to trigger the pure CSS drawer. Notice the pulsating wave effects on the button (before opening), the drawer edge (after opening), and the active navigation item. Click the overlay or the "×" button to close it.

## Files
- `demo.html`: The HTML structure defining the checkbox hack setup, the page layout, the overlay, and the drawer panel.
- `style.css`: The styling, the checkbox hack transition logic, and the multiple `@keyframes` animations driving the various pulsating wave effects (`button-pulse`, `edge-pulse`, `inner-pulse`, `status-pulse`).
