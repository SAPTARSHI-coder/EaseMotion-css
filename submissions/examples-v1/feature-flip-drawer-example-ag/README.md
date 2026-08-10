# Flip Drawer Example

## Description
This is a standard HTML/CSS/JS example demonstrating a "Flip" entrance animation for a side drawer (sidebar). Instead of the traditional slide-in, this drawer uses CSS 3D transforms (`rotateY`) and `perspective` to swing open like a door hinged on the right edge of the screen.

## Files
- `demo.html`: Contains the layout, the drawer markup, and vanilla JS to toggle ARIA attributes and the `.is-open-ag` class.
- `style.css`: Contains the perspective wrapper and the 3D flip transition applied to the `.flip-drawer-ag`.

## How It Works
1. A `.drawer-container-ag` wraps the drawer and provides `perspective: 1000px` to establish 3D space.
2. The `.flip-drawer-ag` defaults to `transform: rotateY(90deg)` with `transform-origin: right center`. This makes the drawer sit completely edge-on and invisible.
3. When the `.is-open-ag` class is added, the drawer transitions to `rotateY(0deg)`, swinging open smoothly.
4. JS toggles this class along with ARIA attributes.

## Accessibility Considerations
- Toggles `aria-expanded` on the trigger button.
- Updates `aria-hidden` on the drawer to correctly manage screen reader visibility.
- Note: In a full implementation, focus trapping should be added.
- **Reduced Motion**: Disables the 3D `rotateY` transform via `@media (prefers-reduced-motion: reduce)`. The drawer gracefully falls back to a simple opacity fade-in, toggling `display: none` to `flex`.
