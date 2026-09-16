# CSS Subtle Input Focus Glow

A pure CSS form interaction featuring a soft, animated glow ring that expands outward when an input field receives focus, built without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for focus state management).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI where the glow opacity is slightly increased for better visibility against dark backgrounds.
- **Component Architecture (Documented in Code)**: 
  - **The Wrapper Technique**: The standard browser `outline` property cannot be animated smoothly (it lacks transition support for `outline-offset` or `outline-width` in many browsers). To create a smooth, blooming glow, we wrap the `<input>` in a `.input-wrapper` `<div>`.
  - **Pseudo-element Bloom**: We apply a `::before` pseudo-element to the `.input-wrapper`. This pseudo-element holds the actual colored `box-shadow` that acts as the glow. It is initially scaled down (`transform: scale(0.98)`) and invisible (`opacity: 0`).
  - **Focus-Within Trigger**: When the user clicks or tabs into the input field, the `.input-wrapper` triggers the `:focus-within` pseudo-class. This state scales the `::before` element to `scale(1)` and fades it in, creating a hardware-accelerated "bloom" animation.
  - **Custom Easing**: The animation utilizes a slight `cubic-bezier(0.175, 0.885, 0.32, 1.275)` curve to give the expanding ring a subtle, satisfying "bounce" as it settles into place.
- Fully accessible semantic structure. The inputs have proper `<label>` elements associated via the `for` attribute. We explicitly disable the default browser focus ring (`outline: none;`) *only* because we are replacing it with a highly visible, custom focus indicator (the glow), ensuring keyboard accessibility is maintained and enhanced. Honors the `prefers-reduced-motion` accessibility standard by disabling the scale/bounce animation for motion-sensitive users, replacing it with a simple fade.

## Usage
Open `demo.html` in your browser. Click into the various input fields (or use the `Tab` key) to trigger the soft focus glow animation.

## Files
- `demo.html`: The HTML structure containing the form layout and the essential input wrapper elements.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:focus-within` animation architecture.
