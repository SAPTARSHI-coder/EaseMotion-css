# CSS Blinking LED Status

Pure CSS pulsating status indicators utilizing multi-layered shadows and generic keyframe animations to simulate glowing hardware LED lights, built without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript or external SVGs required).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with slightly brightened LEDs for better contrast against dark backgrounds.
- **Component Architecture (Documented in Code)**: 
  - **Dynamic Variable Animation**: Instead of writing separate `@keyframes` for green, yellow, and red LEDs, we wrote a single `@keyframes ledPulse` animation. This animation controls the `box-shadow` spread using the `--led-glow` custom property. The color modifier classes (e.g., `.led-green`) simply redefine the `--led-color` and `--led-glow` variables, making the system highly DRY and extensible.
  - **3D Hardware Effect**: The base `.led` class utilizes an `inset` box shadow to create a highlight on the top left and a shadow on the bottom right, mimicking the physical glass curvature of a real diode.
  - **Timing Modifiers**: Additional utility classes (`.pulse-fast`, `.pulse-slow`) allow for overriding the `animation-duration`, providing visual cues for urgency (e.g., a critical red error pulses faster than a yellow warning).
- Fully accessible semantic structure. The LEDs themselves are hidden from screen readers via `aria-hidden="true"`, as the adjacent text (e.g., "Offline", "Operational") provides the necessary semantic context. Honors the `prefers-reduced-motion` accessibility standard by disabling the pulse animation for motion-sensitive users, replacing it with a static, softly glowing state.

## Usage
Open `demo.html` in your browser to view the different colored LEDs pulsing at different frequencies based on their simulated status.

## Files
- `demo.html`: The HTML structure containing the semantic status list and LED indicator elements.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented, DRY keyframe animation logic.
