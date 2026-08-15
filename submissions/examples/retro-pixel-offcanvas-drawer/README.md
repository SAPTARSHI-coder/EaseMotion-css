# Dynamic Offcanvas Drawer (Retro Pixel Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Retro Pixel Offcanvas Drawer**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/retro-pixel-offcanvas-drawer/`.

## Feature Overview

The Retro Pixel Drawer provides a nostalgic, 8-bit inspired overlay UI perfect for gamified applications or retro-themed designs. It features chunky borders, a pixelated dot-matrix backdrop overlay, blocky shadows, and a chunky `steps()` based CSS transition to simulate low-framerate retro animations.

### Included CSS

1. **Zero JS State Management (`Checkbox Hack`):** This drawer requires absolute zero JavaScript to open and close. It utilizes a visually hidden `<input type="checkbox">` and the general sibling combinator (`~`) to toggle the CSS `transform` properties of the drawer panel. The trigger button and the backdrop overlay are both `<label>` elements pointing to that checkbox.
2. **Pixelated Backdrop Overlay:** When the drawer is triggered, a fixed position overlay immediately covers the screen. It uses a `radial-gradient` background image pattern to create a dot-matrix screen-door effect, simulating low-res CRT darkening.
3. **Stepped "Low FPS" Animation:** The drawer slides in from the right edge, but instead of a smooth ease, it uses `transition: transform 0.3s steps(6, end)`. This forces the animation to jump across frames, creating a choppy, authentic retro feel.
4. **Blinking Menu Cursors:** Hovering over menu items inside the drawer triggers an infinite CSS `steps()` animation on a cursor icon (`>`), mimicking a blinking terminal or game menu cursor.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation utilizing the checkbox hack.
- **Accessible Native Keyboarding:** The checkbox input is visually hidden but remains in the DOM and receives native keyboard focus. A high-contrast dashed outline is applied to the trigger button when navigating via keyboard.
- **ARIA Attributes:** Employs `aria-hidden` on the input, `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` on the drawer to provide proper context to screen readers.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. All bounding translations and blinking animations are safely stripped out. The drawer will instantly snap open/closed for users with vestibular disorders.
- **Responsiveness:** The drawer has a `max-width` constraint but acts as `width: 100%` on mobile devices, taking up the full screen.
