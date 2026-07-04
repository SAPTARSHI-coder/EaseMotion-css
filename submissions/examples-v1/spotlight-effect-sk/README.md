# Interactive Spotlight Effect

## What does this do?
This example implements a premium "spotlight" hover effect where a radial gradient follows the user's cursor within a card or container. It creates a modern, immersive feel frequently seen on SaaS and high-end landing pages.

## How is it used?
1. **HTML Structure**: Wrap your content in a `.spotlight-card` and include a `.spotlight-layer` div.
2. **JavaScript**: Include `script.js` to handle the mouse tracking and update the CSS variables (`--mouse-x`, `--mouse-y`).
3. **CSS**: Use `style.css` which defines the radial gradient utilizing the variables updated by the script.

## Why is it useful?
Standard hover effects (like growing or lifting) are static. The spotlight effect adds a layer of interactivity that makes the interface feel more responsive and high-end by directly reacting to the user's micro-movements.

## Tech Stack
- HTML
- CSS (Radial Gradients, CSS Variables)
- JavaScript (Mouse Event Tracking)
- EaseMotion CSS (Core Variables & Utilities)

## Preview
Open `demo.html` directly in your browser and move your cursor over the cards to see the spotlight in action.

## Contribution Notes
- **GPU Accelerated**: Uses opacity transitions for smooth performance.
- **Accessibility**: Includes `prefers-reduced-motion` support.
- **Responsive**: Works in grid layouts and includes a touch-device awareness skeleton.
