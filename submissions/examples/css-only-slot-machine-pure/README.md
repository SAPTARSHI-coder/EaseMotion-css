# CSS-only Slot Machine

A fully functional, interactive one-armed bandit slot machine using pure CSS. Achieved using CSS `@keyframes`, the checkbox hack, and sibling combinators without requiring JavaScript.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Checkbox Hack**: A hidden `<input type="checkbox">` acts as the master state controller. The main "PULL LEVER" button is actually a `<label>` tied to this checkbox.
  - **The Reel Mechanics**: Each of the three reels is a container with `overflow: hidden`. Inside is a `.reel-strip` containing emoji symbols. The symbols are duplicated so that the strip is twice as long as the unique set.
  - **The Spin Animation**: When the hidden checkbox is checked, the general sibling combinator triggers CSS `@keyframes` on the `.reel-strip` elements (`.machine-toggle:checked ~ .slot-machine .reel-strip`). The animation translates the strip upwards (`translateY(-720px)`), which is exactly the height of the 6 unique symbols. Because the sequence repeats, landing 6 symbols down looks exactly like landing on the starting position, creating a seamless loop effect.
  - **Staggered Stopping**: Each reel is given a different animation duration (2s, 2.5s, 3s) and uses a custom `cubic-bezier` timing function. The `cubic-bezier(0.2, 0.8, 0.2, 1.1)` causes the animation to "overshoot" slightly and snap back into place, simulating the mechanical spring action of a physical slot machine reel locking into position.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- Fully accessible semantic structure. The hidden checkbox uses `aria-hidden="true"` as the state is visually represented by the slot machine and button text. Honors the `prefers-reduced-motion` accessibility standard by disabling the spin animation for motion-sensitive users, immediately jumping to the final keyframe state.

## Usage
Open `demo.html` in your browser. Click the "PULL LEVER" button to watch the reels spin and lock into place. Click the "RESET" button to reset the machine.

## Files
- `demo.html`: The HTML structure defining the sibling checkbox control, the duplicated symbol strips, and the glossy overlay.
- `style.css`: The styling, staggered animation timings, and the critical mathematical translation logic.
