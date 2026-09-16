# Hover Loader: Minimalist

A stark, high-contrast CSS interaction that smoothly transitions from a call-to-action button into a bouncing loading state entirely via hover mechanics.

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Component Architecture & Styling Mechanics**: 
  - **Minimalist / Swiss Aesthetics**: Embraces a strict monochrome palette (black and white). The default state is a solid black button with white text. On hover, the colors invert seamlessly to a transparent background with black loader dots, providing a crisp, sophisticated interaction.
  - **Spatial Layering**: The button contains two overlapping layers: `.btn-text` and `.loader-dots`. The loader dots are absolutely positioned and hidden slightly below the button (`transform: translateY(20px)` and `opacity: 0`).
  - **The Transition Choreography**: When the button is hovered:
    1. The background and text colors invert.
    2. The `.btn-text` slides up and fades out (`transform: translateY(-20px); opacity: 0;`).
    3. The `.loader-dots` slide up into place and fade in (`transform: translateY(0); opacity: 1;`).
    4. The hover state *triggers* the infinite `bounce` animation on the dots. We apply `animation-delay` offsets (`0s`, `0.15s`, `0.3s`) to the individual dots via `:nth-child` to create the wave effect. The animation only runs while the button is hovered.
- Fully accessible semantic structure. The component uses a native `<button>` element with an `aria-label` explaining the hover interaction. Focus states are handled properly, and it honors the `prefers-reduced-motion` accessibility standard by disabling the slide transitions and replacing the bouncing animation with a subtle opacity blink.

## Usage
Open `demo.html` in your browser. You will see a solid black "Submit Request" button. Hover over the button to see the text slide away, replaced by three bouncing loading dots.

## Files
- `demo.html`: The HTML structure defining the layers for the text and the loader dots.
- `style.css`: The styling, the transition choreography, and the staggered keyframe animations.
