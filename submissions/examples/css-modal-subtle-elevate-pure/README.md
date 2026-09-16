# CSS Modal: Subtle Elevate

A minimalist, JavaScript-free modal utilizing the CSS checkbox hack, featuring a highly refined, understated pop-in animation and soft drop shadows to simulate delicate physical elevation.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **Micro-Interaction Entrance**: Unlike modals with dramatic bounces or 3D swings, this component focuses on quiet, professional design. The modal starts at `scale(0.97)` and `translateY(12px)`. When opened, it smoothly transitions to `scale(1)` and `translateY(0)` using a very clean `cubic-bezier(0.16, 1, 0.3, 1)` easing curve that prevents harsh snapping.
  - **Soft Elevation Shadows**: The illusion of elevation is achieved via a complex, multi-layered `box-shadow`. It uses a wide, heavily blurred radius with extremely low opacity (`rgba(0, 0, 0, 0.08)`) combined with a slightly tighter shadow. This mimics the soft ambient light occlusion of a piece of paper resting gently above a surface.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal fully supports the OS-level system theme (`prefers-color-scheme: dark`). *Crucially, shadows in dark mode require completely different color values to remain visible. The CSS variables automatically swap the 8% opacity shadows for much heavier 50-70% opacity shadows when a dark OS theme is detected.*
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the scale/translate transitions and instantly displaying the modal for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Elevate Context" button to trigger the checkbox hack and reveal the subtly elevated modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the semantic modal content.
- `style.css`: The styling, the `:checked` sibling selector logic, the multi-layered `box-shadow` variables, and the refined `cubic-bezier` timing functions.
