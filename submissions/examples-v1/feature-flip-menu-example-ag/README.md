# Flip Menu Entrance Example

## Description
This is a standard HTML/CSS/JS example demonstrating a 3D "flip in" entrance animation for a dropdown menu. When toggled, the menu swings down from a top hinge, adding depth to the interface compared to a standard opacity fade.

## Files
- `demo.html`: Contains the structural markup for a dropdown menu and vanilla JS for toggle behavior and ARIA management.
- `style.css`: Contains styling for the menu and the `@keyframes ease-flip-menu-enter-ag` animation.

## How It Works
1. The `.dropdown-wrapper-ag` has `perspective: 1200px` applied so that its children can be manipulated in 3D space.
2. The `.flip-menu-ag` has `transform-origin: top center` so the rotation occurs from its top edge, acting like a hinge attached to the button.
3. Upon opening (via the `.is-open-ag` class), the `ease-flip-menu-enter-ag` animation is applied. The keyframes animate `rotateX(-90deg)` to `rotateX(0deg)`.
4. It utilizes a custom spring-like cubic-bezier (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`) so the menu swings slightly past 0 degrees before settling, giving it a playful, physical feel.

## Accessibility Considerations
- Standard dropdown ARIA attributes (`aria-expanded`, `aria-controls`, `aria-hidden`, and `role="menu"`).
- Keyboard support is standard (though full arrow-key navigation requires additional JS not included in this simple CSS-focused demo).
- **Reduced Motion**: Disables the 3D flip via `@media (prefers-reduced-motion: reduce)`. The entrance animation is replaced by a safe, fast opacity fade.
