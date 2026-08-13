# Interactive Spinner: Neumorphism

A pure CSS loading spinner wrapped in a Neumorphic (soft UI) button shell, featuring stateful CSS animations that react to hover and click interactions.

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Component Architecture & Styling Mechanics**: 
  - **Neumorphism Aesthetics**: Built on a solid `#e0e5ec` base color. The visual extrusion is achieved by applying two opposing box shadows: a light shadow on the top-left (`-9px -9px 16px rgba(255,255,255, 0.5)`) and a dark shadow on the bottom-right (`9px 9px 16px rgb(163,177,198,0.6)`).
  - **Masked Conic Gradient**: The actual spinning element (`.spinner-ring`) is created using a `conic-gradient()` that sweeps from transparent to an accent blue. Instead of layering a solid circle over it, we use CSS masks (`mask-image: radial-gradient(transparent 55%, black 56%)`) to hollow out the center, creating a true ring.
  - **Interactive State Transitions**:
    - **Hover**: The `.spinner-trigger:hover` state accelerates the `animation-duration` of the ring from 2s to 0.8s and applies a CSS `filter: drop-shadow()` to make the accent color glow.
    - **Active (Click)**: The `.spinner-trigger:active` state reverses the shadow logic. It changes the outer track's `box-shadow` from external to `inset`, simulating the physical button being pressed down into the surface. Concurrently, it switches the spin animation to run in reverse.
- Accessible semantic structure. Uses a native `<button>` with an `aria-label` to ensure the interaction is accessible. Honors the `prefers-reduced-motion` standard by removing the spin animation entirely and defaulting to a solid static ring for users who request reduced motion.

## Usage
Open `demo.html` in your browser. You will see a soft, extruded circular button with a slowly rotating blue ring. 
- **Hover** over the button to see the spinner accelerate and glow.
- **Click and hold** the button to see the neumorphic shadows invert (deboss) and the spinner reverse direction.

## Files
- `demo.html`: The HTML structure defining the nested layers (trigger > track > ring > hub).
- `style.css`: The styling, the neumorphic shadow logic, and the interactive keyframe animations.
