# CSS Animated Hamburger to Close

A pure CSS interactive menu icon utilizing a hidden checkbox state to drive smooth, hardware-accelerated transform animations between a hamburger and an 'X', built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or CSS class toggling).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with appropriate icon contrast.
- **Component Architecture (Documented in Code)**: 
  - **The Checkbox Hack**: The open/closed state of the menu is stored in a hidden `<input type="checkbox">`. The clickable hamburger area is a `<label>` linked to this checkbox via the `for` attribute. Clicking the hamburger actually checks/unchecks the invisible box.
  - **CSS Transforms**: The three lines of the hamburger are built using CSS spans (`.line`). When the checkbox is checked (`.menu-checkbox:checked ~ .menu-btn .line`), CSS sibling selectors target the spans and apply specific transforms:
    - The top line rotates `45deg` and translates down to the center.
    - The middle line fades out (`opacity: 0`).
    - The bottom line rotates `-45deg` and translates up to the center.
  - **Hardware Acceleration**: By exclusively animating `transform` and `opacity`, the animation is handled by the GPU, ensuring a buttery-smooth 60fps interaction without triggering expensive layout repaints in the browser.
- Fully accessible semantic structure. The invisible checkbox has `aria-hidden="true"`, while the label receives focus (`tabindex="0"`) and acts as a standard toggle button (`role="button"`) with an explicit `aria-label`. Honors the `prefers-reduced-motion` accessibility standard by disabling the rotational transition and instantly swapping states for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the hamburger icon to watch it transform smoothly into a close ('X') icon, and click again to reverse it.

## Files
- `demo.html`: The HTML structure containing the hidden checkbox state and the three animated span lines.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented rotational transform logic.
