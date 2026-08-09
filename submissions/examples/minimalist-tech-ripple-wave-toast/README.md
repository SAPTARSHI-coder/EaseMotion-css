# CSS Ripple-Wave Toast (Minimalist Tech)

A pure CSS toast notification component designed for Minimalist Tech Layouts. It focuses on a visually striking "Ripple-Wave" entrance animation, where a colored wave expands outwards from the notification icon across the entire toast background.

## Features
- Pure CSS and HTML (No JavaScript required for the ripple or entrance animations).
- **Minimalist Tech Aesthetic**: Clean panel layout, perfectly aligned iconography, solid icon background accents, and inline action buttons.
- **The Ripple-Wave Animation System**: 
- **The Engine**: Inside each `.toast`, we place a purely decorative `.ripple-element`. This element is initially a tiny (`1px` by `1px`), invisible dot centered exactly behind the toast's icon wrapper. 
- **The Expansion**: When triggered, a specific `@keyframes` animation (`ripple-expand`) is applied to the `.ripple-element`. It uses a massive `transform: scale(800)` to rapidly expand the circular dot outwards. Because the parent `.toast` has `overflow: hidden`, the expanding circle creates a perfect "wave" washing across the background.
- **The Polish**: The wave uses a crisp `cubic-bezier(0.16, 1, 0.3, 1)` easing curve so it explodes quickly but finishes smoothly. It simultaneously transitions from `opacity: 1` to `0`, causing the wave to dissipate right as it reaches the edges of the toast.
- **Z-Indexing**: Proper stacking contexts (`z-index: 10` for content, `z-index: 1` for the ripple) ensure the text and icons remain perfectly legible *above* the wash of color.
- **Cascading Delays**: We utilize staggered `animation-delay` utility classes (`.delay-1`, `.delay-2`). Crucially, we apply a slightly longer delay to the `.ripple-element` itself (`0.15s` vs `0.1s`), ensuring the toast fades in first, and *then* the ripple triggers, making it look like the icon initialized the wave.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Trigger Toasts" button to allow users to easily re-trigger the entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the expansive decorative ripple animation is completely disabled and hidden (`display: none`). The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock group of "Network Events". Upon load, they will fade in and immediately trigger a colored ripple wave expanding from their icons. You can click the "Trigger Toasts" button to toggle the state and watch the Ripple-Wave sequence run again.

## Files
- `demo.html`: The HTML structure for the toasts, detailing the pure CSS checkbox hack setup for the trigger button, the placement of the decorative `.ripple-element`, and the application of the staggered delay classes.
- `style.css`: The styling, minimalist tech design tokens, the `overflow/z-index` logic necessary to contain the ripple, and the massive `scale(800)` keyframe driving the wave effect.
