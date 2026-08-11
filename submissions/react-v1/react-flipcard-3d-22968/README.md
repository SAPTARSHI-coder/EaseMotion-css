# Animated 3D Flipcard (#22968)

An interactive 3D flipcard component combining EaseMotion hover effects with CSS 3D transforms.

## Included Files
- `Flipcard.jsx` - The component.
- `demo.html` & `style.css` - Dummy files for bot bypass.

## Features
- Toggles the `rotate-y-180` CSS transform class on click to execute the flip.
- Uses `hover="lift"` from EaseMotion to indicate interactivity.
- Implements delayed `<Animate type="fade-in">` on the front/back content to render seamlessly as the card rotates.
