# CSS Dual-handle Range Slider

A pure CSS implementation of a two-handle slider for selecting min-max ranges.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **Overlapping Inputs**: The component utilizes two native `<input type="range">` elements, absolutely positioned exactly on top of each other within a relative `.slider-wrapper` container. The first input acts as the Minimum handle, and the second as the Maximum handle.
  - **Pointer Events Logic**: Natively, two overlapping elements would block interaction with the one underneath. To solve this purely in CSS, both `input[type="range"]` elements are given `pointer-events: none`. This allows mouse clicks to pass completely through their invisible tracks.
  - **Interactive Thumbs**: We then specifically target the slider thumbs (`::-webkit-slider-thumb` and `::-moz-range-thumb`) and re-apply `pointer-events: auto`. This ensures that *only* the circular handles are draggable, allowing the user to interact with either the min or max thumb independently, regardless of which input is rendered "on top".
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep slate track with vibrant blue thumbs. Includes smooth scale transformations on hover and active states.
- Fully accessible semantic structure. Because it uses native HTML range inputs, it inherits built-in keyboard navigation (Arrow keys, Home/End) and screen reader support. Both inputs are explicitly labeled via `aria-label`. Honors the `prefers-reduced-motion` accessibility standard by disabling the thumb hover scale transitions for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Drag the left and right handles independently to set a range.

## Files
- `demo.html`: The HTML structure defining the dual range inputs and wrapper.
- `style.css`: The styling, the critical `pointer-events` logic, and the cross-browser thumb selectors.
