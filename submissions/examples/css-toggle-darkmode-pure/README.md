# CSS Toggle: Dark Mode Theme

A highly polished, JavaScript-free toggle switch specifically designed as a Sun/Moon Dark Mode theme switcher. It features a tactile stretching animation and utilizes modern CSS `:has()` for global theme control.

## Features
- Pure CSS and HTML implementation. The interactive state and the global theme switching are managed entirely without JavaScript.
- **Component Architecture & Styling Mechanics**: 
  - **The Checkbox Hack**: The toggle relies on a visually hidden `<input type="checkbox">` wrapped inside a `<label>`. Clicking anywhere on the label toggles the checkbox state. 
  - **Global Theme Switching via `:has()`**: The most powerful feature of this demo is the use of the modern CSS `:has()` relational pseudo-class. By placing `.theme-container:has(.toggle-input:checked)` in the CSS, we can detect if the toggle inside the container is checked. If it is, we override the global CSS Custom Properties (`--app-bg`, `--app-text`, etc.) to switch the entire application's UI to dark mode seamlessly.
  - **Tactile Stretch Animation**: When the user clicks and holds the toggle (`:active`), the circular thumb dynamically stretches its `width`, creating a satisfying squishy, tactile feel before it slides across the track.
  - **Layered Icons**: The sun and moon SVG icons are layered inside the track. Their opacities are transitioned smoothly depending on the `:checked` state, giving clear visual feedback of the active mode.
- **Theming**: Configured via CSS Custom Properties. The transition between the light slate theme and the deep navy dark theme is handled via CSS variables, ensuring smooth color interpolations across the entire UI.
- Fully accessible semantic structure. Uses `<label>` and a visually hidden `<input type="checkbox">`. It includes a high-contrast `:focus-visible` outline for keyboard navigation. Honors the `prefers-reduced-motion` accessibility standard by disabling the sliding and color fading animations if requested by the OS.

## Usage
Open `demo.html` in your browser. Click the toggle to watch the thumb slide, the icons fade, and the entire page background smoothly transition from Light Mode to Dark Mode using pure CSS. Click and hold the toggle to see the tactile stretching animation on the thumb.

## Files
- `demo.html`: The HTML structure defining the checkbox hack, SVG icons, and the wrapping theme container.
- `style.css`: The styling, the `:has()` global theme switching logic, and the complex tactile animation mechanics.
