# CSS Zoom-In Feature Grid (Glassmorphism UI)

A pure CSS interactive feature grid component designed for Glassmorphism UI Layouts. It focuses on a cinematic, slow "Zoom-In" background interaction that creates a premium sense of depth without overwhelming the user interface.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Glassmorphism Aesthetic**: The feature cards (`.glass-card`) utilize `backdrop-filter: blur(16px)` layered over glowing, ambient background orbs (`.bg-orb`).
- **The Zoom-In Effect**: 
- We use a dedicated, absolutely positioned `.zoom-layer` inside each card, placed strictly behind the content layer (`z-index: 1`).
- The `.feature-card` acts as the container and uses `overflow: hidden` so the zoomed background never spills out of the rounded card edges.
- Each `.zoom-layer` is styled with a distinct subtle radial gradient (e.g., `.bg-image-1`, `.bg-image-2`).
- Upon hovering the card, the `.zoom-layer` smoothly and slowly scales up (`transform: scale(1.2)`) using a deliberate `0.8s` duration and a custom cubic-bezier curve. Simultaneously, it slightly increases its opacity and blur radius (`filter: blur(4px)`).
- This creates an elegant, cinematic parallax feeling where the card's background physically pushes forward, adding dynamic depth to the glassmorphism.
- **Card Hover Interactions**: Hovering over the card also elevates it (`transform: translateY(-8px)`), brightens the border, and sharply scales/colors the icon wrapper (`transform: scale(1.1)`), drawing the user's eye to the primary content while the background slowly expands.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the card elevation, icon scaling, and the background zoom scaling are completely disabled. The interactions safely fall back to subtle, immediate CSS opacity and border color changes.

## Usage
Open `demo.html` in your browser. You will see a mock "Explore Capabilities" feature grid. Hover your mouse over any of the six feature cards. You will observe the card lift, the icon snap to attention, and the blurred background layer smoothly and slowly zoom inward, creating a premium sense of depth behind the glass surface.

## Files
- `demo.html`: The HTML structure for the layout, detailing the grid implementation and the hidden `.zoom-layer` required inside each card to achieve the depth effect.
- `style.css`: The styling, glassmorphism tokens, radial gradient backgrounds, and the slow `0.8s` cubic-bezier transition logic driving the zoom mechanics.
