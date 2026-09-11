# CSS Keyboard Key Component

A realistic 3D mechanical keyboard key UI element. Uses multi-layered styling and transform animations to simulate tactile depth and press mechanics, built entirely without JavaScript.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI where the keycaps resemble dark grey mechanical switches with appropriate ambient shadowing.
- **Component Architecture (Documented in Code)**: 
  - **The Base Shell (`.kbd-key`)**: We utilize a semantic `<button>` element for the base. This element does not move. Its background color serves as the dark "skirt" or bottom edge of the 3D keycap. It also casts the drop shadow onto the page.
  - **The Inner Face (`.kbd-key-content`)**: This `<span>` sits inside the button and represents the top face of the keycap where the text is printed. It is initially pushed upwards using `transform: translateY(-6px)`. This offset reveals the dark background of the parent button beneath it, creating the illusion of 3D thickness.
  - **The Press Interaction (`:active`)**: When the user clicks the button (or presses Enter/Space while focused), the `:active` pseudo-class triggers on the parent button. We then target the inner `.kbd-key-content` and set its transform to `translateY(0)`. This moves the top face down to meet the base, completely hiding the "skirt" and perfectly simulating a physical bottom-out press.
- Fully accessible semantic structure. By utilizing standard `<button>` elements, we automatically inherit proper keyboard navigation (tabbing) and activation (Enter/Space keys). Explicit `aria-label`s are used to announce the key's function clearly to screen readers. Honors the `prefers-reduced-motion` accessibility standard by disabling the physical press movement, falling back to a static state.

## Usage
Open `demo.html` in your browser. Click the keyboard keys, or navigate to them via the `Tab` key and press `Space` or `Enter` to trigger the mechanical press animation.

## Files
- `demo.html`: The HTML structure demonstrating the semantic `<button>` layout with the inner content span.
- `style.css`: The styling, CSS Custom Property theming blocks, and the 3D `translateY` interaction logic.
