# Pulse Dropdown Example

## Description
This is a standard HTML/CSS example demonstrating a "pulse" entrance animation applied to a dropdown menu. When the dropdown is triggered, instead of simply appearing or sliding down, it scales up slightly past its normal size and settles back down. This creates a subtle "bouncing" or "pulsing" effect that makes the interface feel highly responsive and lively.

## Installation
Open `demo.html` in any modern web browser to view the example. The required styles and keyframes are defined in `style.css`.

## Usage
The effect is achieved by defining a keyframe animation that manipulates the `transform: scale()` property and applying it when the dropdown becomes visible.

```css
/* Applying the animation */
.dropdown-container:hover .dropdown-menu {
    visibility: visible;
    animation: easePulseEntranceAnimationAg 0.4s ease-out forwards;
}

/* The Keyframes */
@keyframes easePulseEntranceAnimationAg {
    0% {
        opacity: 0;
        transform: scale(0.95);
    }
    50% {
        opacity: 1;
        transform: scale(1.02); /* Pulse slightly larger */
    }
    100% {
        opacity: 1;
        transform: scale(1); /* Settle at normal size */
    }
}
```

## Accessibility Considerations
- **Semantic HTML & ARIA:** The trigger button uses `aria-haspopup="true"` and `aria-expanded="false"`. The dropdown list uses `role="menu"` and items use `role="menuitem"` to ensure compatibility with screen readers.
- **Keyboard Navigation:** The dropdown is designed to open not just on `:hover`, but also on `:focus-within`, ensuring that keyboard users tabbing through the interface can access the menu items.
- **Reduced Motion:** A `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the pulse scaling animation is disabled entirely, and the dropdown simply toggles opacity to appear instantly without motion.
