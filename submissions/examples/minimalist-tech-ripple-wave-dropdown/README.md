# CSS Ripple-Wave Dropdown (Minimalist Tech)

A pure CSS interactive dropdown component designed for Minimalist Tech Layouts. It features a fluid "Ripple-Wave" entrance animation, where the background of the menu expands radially from the trigger point, followed by a staggered, cascading reveal of the list items.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Aesthetic**: Clean layout, sharp `Inter` typography, simple iconography, and a pill-shaped avatar trigger button.
- **State Management**: The opening and closing of the dropdown is handled entirely via a hidden checkbox hack (`<input type="checkbox">`). A `<label>` acts as the trigger button.
- **The Ripple-Wave Entrance Effect**: 
- A dedicated utility class `.ripple-wave` handles the animation on the dropdown menu container.
- The effect is achieved by placing a small, hidden circular `div` (`.ripple-background`) in the top-right corner of the menu, beneath the text content but above the menu's actual background.
- When triggered, an `@keyframes` animation (`ripple-expand`) scales this circular `div` up by 40x, causing it to rapidly expand like a water ripple and fill the entire bounds of the menu container (which has `overflow: hidden` applied to clip the excess).
- Immediately following the ripple expansion, the interior `.menu-item` elements cascade down into place.
- **Cascading List Items**: We utilize staggered `animation-delay` utility classes (`.list-delay-1` through `.list-delay-4`) incremented by `0.05s`. This ensures the text items fade in and translate down sequentially after the background has formed.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the radial ripple expansion and the staggered list cascades are completely disabled, safely falling back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock User Settings avatar button. Click the button to toggle the dropdown. Watch as the white background ripples outwards from the top right, followed by the menu items swiftly cascading down into place. Click the button again to close it.

## Files
- `demo.html`: The HTML structure for the dropdown, detailing the pure CSS checkbox hack setup and the hidden `.ripple-background` element.
- `style.css`: The styling, minimalist tech design tokens, the `transform: scale` keyframes driving the radial expansion, and the staggered keyframe delays for the list items.
