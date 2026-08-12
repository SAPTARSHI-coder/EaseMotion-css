# CSS Blur-Entrance Drawer (Minimalist Tech)

A pure CSS interactive drawer component designed for Minimalist Tech Layouts. It features a sophisticated "Blur-Entrance" animation, providing a cinematic, soft-focus feel as the drawer enters the viewport, combined with staggered interior content animations.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- State management is natively handled via the hidden checkbox hack (`input[type="checkbox"]` paired with `<label>`), allowing the drawer to be toggled open and closed without JS event listeners.
- **The Blur-Entrance Effect**: The `.drawer` element is initially positioned slightly off-screen (`transform: translateX(10%)`) and heavily blurred (`filter: blur(10px)`). When triggered, it simultaneously translates into place and resolves the blur to `0px`. This mimics the feeling of a camera rapidly pulling focus on a fast-moving object.
- **Staggered Content Entrance**: The interior `.schema-block` elements leverage the `:checked` sibling selector combined with CSS `transition-delay` to slide up sequentially after the drawer has opened.
- Includes a premium frosted-glass background on the drawer itself using `backdrop-filter: blur(20px)`.
- Clean, structured aesthetic utilizing the `Inter` font for UI and `JetBrains Mono` for the technical API documentation layout.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial translation, the blur filter, and the staggered interior sliding are entirely stripped. The complex interaction gracefully falls back to a safe, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock API dashboard. Click the "View Details" button to trigger the pure CSS drawer. Observe how the drawer seems to snap into focus as it enters the screen, followed by the content blocks cascading upwards sequentially. Click the overlay background or the "X" button to close the drawer.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical `<input type="checkbox">` and `<label>` pairing required for the CSS-only drawer trigger.
- `style.css`: The styling, frosted glass effects, and the combined `filter: blur()` and `transform` CSS transitions driving the entrance mechanics.
