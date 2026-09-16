# CSS Modal: Neumorphic Soft Shadow

A smooth, tactile JavaScript-free modal utilizing the CSS checkbox hack and twin CSS box-shadows to simulate physical extrusion from the background.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **Neumorphism (Soft UI)**: The foundational aesthetic is achieved by ensuring the background color of the modal card (`var(--bg-base)`) perfectly matches the background color of the page. 
  - **Twin Drop Shadows**: To create the illusion of extrusion (a physical object pushing up from the surface), the modal card utilizes two distinct drop shadows applied simultaneously: `box-shadow: 20px 20px 40px var(--shadow-dark), -20px -20px 40px var(--shadow-light)`. 
  - **Tactile Buttons**: The primary "Accept" button uses the standard extruded shadow style. The `:active` state swaps the standard shadow for an `inset` shadow, perfectly simulating a physical button being pressed down into the device. The secondary "Dismiss" button permanently uses the inset shadow to visually demote its hierarchy.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The neumorphic effect requires carefully calculated shadow colors. The component fully supports the OS-level system theme (`prefers-color-scheme: dark`), dynamically swapping the base gray/blue to a deep slate, and recalculating the light/dark shadow hex codes to ensure the physical extrusion illusion remains intact in low light.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by removing the modal pop-in transition for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Extrude Modal" button to trigger the checkbox hack and reveal the modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the extruded elements.
- `style.css`: The styling, the `:checked` sibling selector logic, the twin `box-shadow` setups, and the inset `:active` states.
