# CSS 3D Slider with Gradient

A hardware-accelerated, JavaScript-free custom `<input type="range">` featuring tactile 3D depth, vibrant gradients, and cross-browser styling support.

## Features
- Pure CSS and HTML implementation. No JavaScript is required for the styling, hover interactions, or active/dragging states.
- **Component Architecture & Styling Mechanics**: 
  - **Resetting Native Styles**: The foundation relies on `-webkit-appearance: none;` on the `.slider-3d` input. This strips away the browser's default OS styling for the slider, allowing us to build it from scratch using pseudo-elements.
  - **Cross-Browser Pseudo-Elements**: Because browsers implement the shadow DOM for inputs differently, the styling is duplicated across vendor-specific selectors: `::-webkit-slider-runnable-track` (for Chrome/Safari/Edge) and `::-moz-range-track` (for Firefox), as well as their respective `-thumb` counterparts.
  - **3D Depth Construction**: 
    - The *track* uses deep `inset` box-shadows (`inset 0 3px 6px rgba(...)`) to make it look like a physical groove carved into the background.
    - The *thumb* uses a complex stack of standard and `inset` box-shadows. The standard outer shadow (`0 4px 6px ...`) lifts it off the track, while the inset shadows (`inset 0 2px 0 rgba(255,255,255,1), inset 0 -2px 0 rgba(0,0,0,0.1)`) create a bevel effect that mimics light hitting the top edge and shadow on the bottom edge of a physical dial.
  - **Tactile Feedback**: On `:active` (when the user clicks and drags), the thumb scales down slightly (`transform: scale(0.95)`) and its drop-shadow reduces, perfectly simulating the physical action of pressing a button down into the track.
- **Theming**: Configured via CSS Custom Properties. The palette features a vibrant, multi-stop linear gradient for the track. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`, which swaps the gradients to a darker, more metallic aesthetic.
- Fully accessible semantic structure. Because it relies on a real `<input type="range">`, it is perfectly accessible to screen readers, keyboards (using arrow keys to adjust value), and touch devices. It also includes `:focus-visible` styling for keyboard navigation outlines.

## Usage
Open `demo.html` in your browser. Click and drag the thumb on the slider. Notice the inset shadows on the track that give it depth, the 3D bevel on the thumb, and the satisfying "squish" animation when you press down on it to adjust the value. Toggle Dark Mode to see the metallic theme.

## Files
- `demo.html`: The HTML structure defining the range input and its container.
- `style.css`: The styling, the complex `box-shadow` layering, the cross-browser pseudo-selectors, and the active/hover state transitions.
