# CSS Rotate-Fade Feature Grid (Glassmorphism UI)

A pure CSS interactive feature grid component designed for Glassmorphism UI Layouts. It features a dynamic "Rotate-Fade" icon replacement animation on hover, transitioning smoothly from a primary illustrative icon to a secondary action-oriented icon.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Glassmorphism Aesthetic**: The feature cards (`.glass-card`) utilize `backdrop-filter: blur(16px)` layered over large, vividly colored, ambient background orbs (`.bg-orb`). Each card uses a distinct neon accent color mapped to its icon.
- **The Rotate-Fade Effect**: 
- Inside the `.icon-container` of each card, there are two absolutely positioned icon wrappers: `.icon-primary` and `.icon-secondary`.
- By default, the `.icon-primary` is visible (`opacity: 1`) and upright (`rotate(0deg)`), while the `.icon-secondary` is invisible (`opacity: 0`), shrunk (`scale(0.5)`), and rotated counter-clockwise (`rotate(-90deg)`).
- When a user hovers over the card, the primary icon rotates 90 degrees clockwise while shrinking and fading out. Simultaneously, the secondary icon rotates clockwise into its upright 0-degree position, scales up, and fades in.
- This creates a seamless, 3D-like spinning replacement effect using purely 2D CSS transforms.
- **Card Hover Interactions**: Hovering over the card also elevates it (`transform: translateY(-8px)`), lightens its background to simulate interaction depth, and significantly intensifies the neon box-shadow glowing from the icon container based on its specific assigned color class (e.g., `.color-rose`, `.color-emerald`).
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the card elevation and the complex rotational scaling are completely disabled. The icon replacement safely falls back to a simple, immediate opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a mock Ecosystem Integrations grid. Hover your mouse over any of the six feature cards. You will observe the card lift slightly, the glowing box shadow intensify, and the primary icon perform a slick rotate-fade transition into a secondary arrow icon.

## Files
- `demo.html`: The HTML structure for the layout, detailing the grid implementation and the dual-icon `.icon-primary` / `.icon-secondary` setup required inside each card.
- `style.css`: The styling, glassmorphism tokens, distinct color classes, and the complex transform logic driving the rotate-fade mechanics.
