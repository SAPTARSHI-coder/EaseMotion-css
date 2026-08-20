# Liquid Fill Button

## Feature overview
A polished liquid fill button that starts with a transparent border and animates a wave of color upward on hover. The animation is designed to feel smooth, lightweight, and visually refined.

## Preview description
The demo shows a centered modern CTA button with a subtle border and clean typography. On hover, a liquid wave rises from the bottom and fills the button, while the text stays crisp and readable.

## File structure
- `demo.html` — semantic demo page with the button markup.
- `style.css` — pure CSS styling, wave effect, and responsive layout.
- `README.md` — feature overview, usage notes, and customization guidance.

## How the liquid animation works
- The button uses `::before` as the fill layer and `::after` as the liquid wave highlight.
- Both pseudo-elements are absolutely positioned inside the button and start translated below the visible button area.
- On hover, the `::before` layer animates upward to fill the button, while the `::after` wave moves up slightly to create a curved liquid effect.
- CSS transitions handle the smooth rising and draining motion, so the button returns to a transparent state when the cursor leaves.

## Customization options
- `--accent` — sets the liquid color.
- `--transition-duration` — controls how quickly the liquid rises and drains.
- `--button-radius` — adjusts the button roundness.
- `--wave-height` — changes the height and softness of the liquid wave highlight.
- `--border` — updates the initial button border color.

## Browser compatibility
This component uses modern CSS features like pseudo-elements, transforms, transitions, and gradients. It works well in current versions of Chrome, Firefox, Edge, and Safari. For older browsers without full transform support, the button still remains functional with a simple hover highlight.
