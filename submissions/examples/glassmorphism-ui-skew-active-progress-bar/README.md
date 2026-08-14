# CSS Skew-Active Progress Bar (Glassmorphism UI)

A pure CSS progress bar component designed for Glassmorphism UI Layouts. It features a stunning frosted glass background and a highly kinetic "Skew-Active" entrance animation that gives the data metrics a sense of speed and fluidity.

## Features
- Pure CSS and HTML (Zero JavaScript required for state or animations).
- **Glassmorphism Aesthetic**: 
- A deep, dark background with three enormous, slowly floating animated "blobs" of vibrant color (Blue, Purple, Pink).
- The main card uses `backdrop-filter: blur(16px)` combined with a semi-transparent background color (`rgba(30, 41, 59, 0.4)`) to create the signature frosted glass effect over the floating blobs.
- Subtle inner shadows and semi-transparent borders give the UI physical depth.
- **The Skew-Active Animation System**: 
- The entrance sequence is split into two synchronized `@keyframes`.
- First, the entire `.progress-widget` fades in and slides up (`widget-fade-in`).
- Second, the `.progress-fill` triggers (`skew-fill-in`). It starts completely empty (`width: 0`), heavily distorted (`transform: skewX(-30deg)`), and anchored to the left (`transform-origin: left`). 
- As it expands, it uses a bouncy `cubic-bezier` to whip across the track, snapping back to a flat `0deg` skew as it hits its target width. The skewing creates an aggressive, kinetic illusion of speed.
- The target width of each bar is defined dynamically via an inline CSS custom property (`style="--target-width: 84%;"`), keeping the CSS perfectly reusable and separated from the data logic.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Refresh Metrics" button to allow users to easily re-trigger the cascading entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the aggressive skewing, bouncing, and spatial translations are completely disabled. The widgets safely fall back to a simple opacity fade, and the progress bars fill using a basic linear expansion.

## Usage
Open `demo.html` in your browser. You will see a "System Resources" dashboard utilizing a rich frosted glass aesthetic. Upon load, the widgets will slide up sequentially, and the glowing neon progress bars will aggressively whip across the tracks to their target widths. You can click the "Refresh Metrics" button to toggle the state and watch the sequence run again.

## Files
- `demo.html`: The HTML structure for the glassmorphism layout (including the background blobs), the checkbox hack setup for the replay button, and the application of the inline `--target-width` CSS variables.
- `style.css`: The styling, glassmorphism design tokens (blurs, transparency, gradients), and the specific `@keyframes` driving the two-part skew-active entrance logic.
