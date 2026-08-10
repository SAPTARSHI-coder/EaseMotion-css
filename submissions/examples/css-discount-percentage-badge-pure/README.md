# CSS Discount Percentage Badge

An animated pricing component featuring a bouncing discount badge and a clean, pure CSS strikethrough effect for original pricing, built entirely without JavaScript.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI where the badge color and shadow are slightly adjusted to maintain high visibility and contrast against dark backgrounds.
- **Component Architecture (Documented in Code)**: 
  - **The Strikethrough**: While it's possible to create custom strikethrough lines using CSS pseudo-elements (e.g., `::after`), it is best practice to use the semantic `<s>` HTML tag combined with standard `text-decoration` properties (`text-decoration: line-through`, `text-decoration-thickness`). This ensures screen readers correctly interpret the text as deleted/replaced.
  - **The Badge Animation**: The badge uses a `@keyframes` animation (`badgePulse`) to draw attention. The animation combines `transform: scale()` with `transform: rotate()` to create a dynamic, physical "pop" effect. The animation is heavily weighted to the beginning of the cycle (`0%` to `30%`), leaving a long resting period (`30%` to `100%`) so it isn't constantly distracting the user.
- Fully accessible semantic structure. The prices utilize explicit `aria-label`s to clearly announce "Original price" and "Current price" to screen readers, preventing confusion when reading out the raw numbers. Honors the `prefers-reduced-motion` accessibility standard by disabling the pulse animation entirely for motion-sensitive users, leaving the badge in its static, slightly rotated state.

## Usage
Open `demo.html` in your browser to view the pricing layout and the attention-grabbing badge animation.

## Files
- `demo.html`: The HTML structure demonstrating the semantic `<s>` tag and the `aria-label` setups for pricing.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `@keyframes` pulse logic.
