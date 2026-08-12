# CSS Ripple-Wave Tooltip (Minimalist Tech)

A pure CSS interactive tooltip component designed for Minimalist Tech Layouts. It features a fluid "Ripple-Wave" entrance animation, where a secondary background color expands radially from the tooltip's pointer, followed by a soft, delayed reveal of the text content.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Aesthetic**: Clean layout, sharp `Inter` typography, distinct accent-colored indicator dots, and a dark slate tooltip container for high contrast.
- **State Management**: The tooltip visibility is handled entirely via CSS `:hover` and `:focus-within` pseudo-classes on a wrapper element (`.tooltip-wrapper`), ensuring accessibility for keyboard navigation.
- **The Ripple-Wave Entrance Effect**: 
- A dedicated utility class `.ripple-wave-tooltip` handles the hover interactions and triggers the child animations.
- The effect is achieved by placing a small, hidden circular `div` (`.ripple-bg`) near the bottom-center of the tooltip container, positioned right above the little directional arrow/pointer.
- When the wrapper is hovered, an `@keyframes` animation (`ripple-expand-tooltip`) scales this circular `div` up by 35x. Because the tooltip container has `overflow: hidden` applied, this rapid radial expansion fills the entire rectangular bounds of the tooltip like a wave.
- A split-second after the ripple expansion begins (`0.15s` delay), the interior `.tooltip-inner` text content gently fades in and translates upwards (`content-reveal`). This timing creates the illusion that the ripple wave is "washing over" and revealing the text.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the radial ripple expansion and the translated text reveal are completely disabled, safely falling back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock row of "Status Indicators". Hover your mouse over any of the colored icons. The tooltip will appear, the darker background will ripple outwards from the pointer at the bottom, and the text will softly fade in. Move your mouse away to hide the tooltip. You can also use the `Tab` key to navigate to the indicators and trigger the tooltips via keyboard focus.

## Files
- `demo.html`: The HTML structure for the tooltips, detailing the `.tooltip-wrapper` setup and the required `.ripple-bg` inner element.
- `style.css`: The styling, minimalist tech design tokens, the `transform: scale` keyframes driving the radial ripple expansion from the bottom-center origin, and the delayed content reveal keyframes.
