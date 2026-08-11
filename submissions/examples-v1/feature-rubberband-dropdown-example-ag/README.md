# RubberBand Dropdown Example

## Description
This is a standard HTML/CSS example demonstrating a "rubberband" animation applied to a dropdown menu. When triggered, the dropdown stretches and squashes along its X and Y axes before settling, simulating the physical properties of a rubber band snapping into place. This is a highly dynamic "Attention Seeker" that adds a playful and responsive feel to the interface.

## Installation
Open `demo.html` in any modern web browser to view the example. The required styles and keyframes are defined in `style.css`.

## Usage
The effect is achieved by defining a keyframe animation that manipulates the `transform: scale3d()` property and applying it when the dropdown becomes visible.

```css
/* Applying the animation */
.dropdown-container:hover .dropdown-menu {
    visibility: visible;
    opacity: 1;
    animation: easeRubberBandAnimationAg 1s;
}

/* The Keyframes */
@keyframes easeRubberBandAnimationAg {
    0% { transform: scale3d(1, 1, 1); }
    30% { transform: scale3d(1.25, 0.75, 1); }
    40% { transform: scale3d(0.75, 1.25, 1); }
    50% { transform: scale3d(1.15, 0.85, 1); }
    65% { transform: scale3d(0.95, 1.05, 1); }
    75% { transform: scale3d(1.05, 0.95, 1); }
    100% { transform: scale3d(1, 1, 1); }
}
```

## Accessibility Considerations
- **Semantic HTML & ARIA:** The trigger button uses `aria-haspopup="true"` and `aria-expanded="false"`. The dropdown list uses `role="menu"` and items use `role="menuitem"`.
- **Keyboard Navigation:** The dropdown opens on `:hover` and `:focus-within`, ensuring keyboard accessibility.
- **Reduced Motion:** A `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the rubberband animation is disabled, and the dropdown appears instantly via opacity changes, preventing potential discomfort from the highly elastic movement.
