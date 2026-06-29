# Magnetic Button Hover

## Feature overview
A polished, self-contained interactive button that subtly moves toward the cursor while hovering. The magnetic effect is limited to a natural 15–20px range, uses CSS transforms and transitions for smooth motion, and disables motion on touch devices.

## Preview description
A centered demo page showcases a modern CTA button with a glowing shadow and responsive layout. When the user moves the cursor over the button, it follows the pointer direction gently, then returns gracefully to the center on mouse leave.

## File structure
- `demo.html` — demo page with the button markup and JavaScript interaction.
- `style.css` — visual styling, responsive layout, shadow, and glow styles.
- `README.md` — feature overview, usage details, and customization notes.

## How it works
1. The script detects whether the device supports touch input and disables the magnetic movement on those devices.
2. When the pointer moves over the button, the cursor position is measured relative to the button center.
3. The cursor offset is normalized and clamped, then multiplied by a maximum translation value.
4. The button is moved using `transform: translate3d(...)`, and CSS transitions keep the motion smooth at 60fps where possible.
5. On `mouseleave`, the button resets back to its original position.

## Customization options
- `MAX_MOVEMENT` in `demo.html` adjusts how far the button moves toward the cursor.
- Change the button text, gradient, or shadow values in `style.css` to match your brand.
- Update the panel background or typography in `style.css` for different presentation styles.
- Add additional buttons or supporting content around the CTA to expand the demo.
