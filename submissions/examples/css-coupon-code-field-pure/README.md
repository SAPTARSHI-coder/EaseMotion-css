# CSS Coupon Code Field

A pure CSS interactive coupon code input featuring an animated scissors icon that snips while typing, and a fully functional validation success state using native HTML5 and CSS pseudo-classes, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for animation or validation logic).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), providing a sleek dark mode variant.
- **Component Architecture (Documented in Code)**: 
  - **Animated Scissors**: By utilizing the `:focus-within` pseudo-class on the parent wrapper, we trigger a custom `@keyframes` animation (`snipTop` and `snipBottom`) on the individual SVG line elements inside the scissors icon. This creates a realistic cutting motion when the user interacts with the field.
  - **CSS Validation State**: The input utilizes the native HTML5 `pattern="SUMMER2026"` attribute. We leverage the CSS `:valid` pseudo-class (and the modern `:has()` selector) to detect when the user types the exact correct code. 
  - When valid, CSS automatically hides the helper text, reveals the success message, turns the border solid green, and halts the scissors animation—all without a single line of JS.
- Fully accessible with `aria-label` tags for screen readers, and `prefers-reduced-motion` support that disables the scissors animation and state-swap transitions for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click into the input field to watch the scissors begin snipping. Type `SUMMER2026` into the field to trigger the pure CSS success validation state.

## Files
- `demo.html`: The HTML structure containing the semantic form, animated SVG scissors, and validation feedback messages.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:focus-within` and `:valid` pseudo-class techniques.
