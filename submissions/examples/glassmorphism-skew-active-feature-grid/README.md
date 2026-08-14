# CSS Skew-Active Feature Grid (Glassmorphism UI)

A pure CSS interactive feature grid component designed for Glassmorphism UI Layouts. It focuses on a dramatic, high-energy "Skew-Active" background interaction that abruptly slides in on hover, creating dynamic emphasis.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Glassmorphism Aesthetic**: The feature cards (`.glass-card`) utilize `backdrop-filter: blur(16px)` layered over glowing, ambient background orbs (`.bg-orb`).
- **The Skew-Active Effect**: 
- Inside each card, behind the text content but above the glass base (`z-index: 1`), is an absolutely positioned `.skew-bg` layer.
- By default, this layer is severely skewed (`transform: skewX(-30deg)`) and positioned entirely off-screen to the left (`left: -150%`).
- When a user hovers over the card, the `.skew-bg` rapidly slides in (`left: 0`) using a sharp cubic-bezier curve while simultaneously un-skewing slightly (`transform: skewX(-10deg)`). This creates a fast, aggressive entrance that feels highly dynamic.
- Each `.skew-bg` is tied to a specific color class (e.g., `.color-emerald`, `.color-cyan`) ensuring the background wash matches the icon theme.
- **Card Hover Interactions**: Hovering over the card elevates it (`transform: translateY(-8px)`). Additionally, we use the `:has()` selector and the general sibling combinator (`~`) to dynamically colorize the icon wrapper's border, shadow, and text color to match the incoming skewed background, while giving the icon itself a slight contrary skew (`transform: skewX(-5deg)`) for extra pop.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the aggressive sliding skew, the card elevation, and the contrary icon skew are completely disabled. The interactions safely fall back to subtle, immediate CSS opacity fades and border color changes.

## Usage
Open `demo.html` in your browser. You will see a mock Product Solutions grid. Hover your mouse over any of the six feature cards. You will observe the card lift, the icon snap to a matching neon color with a slight tilt, and a dramatic colored background layer slide in from the left on a sharp diagonal axis.

## Files
- `demo.html`: The HTML structure for the layout, detailing the grid implementation and the hidden `.skew-bg` layer with specific color utility classes required inside each card.
- `style.css`: The styling, glassmorphism tokens, and the complex transform/skew logic and sibling CSS selectors driving the aggressive hover mechanics.
