# Bounce Menu Mixin (SCSS)

## Description
This SCSS mixin provides a highly energetic "Bounce" entrance animation designed for dropdown menus, popovers, or floating command palettes. It slides down from a slightly raised position, overshoots its target, and bounces back into place. This is a classic "Attention Seeker" pattern that adds a playful and physical feel to the UI.

## Installation
Copy the `_bounce-menu.scss` file into your SCSS project's mixins or utilities directory, or import it directly into your stylesheet.

## Usage
Import the mixin and include it in your menu's CSS class. Note that this mixin is designed for the *entrance* animation of the menu (e.g., when a dropdown class is added or a React component mounts).

```scss
@import 'path/to/_bounce-menu.scss';

// Default usage (0.7s duration, transforming from top center)
.dropdown-menu {
    position: absolute;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    
    // Apply the mixin when the menu is active/open
    &.is-open {
        @include ease-bounce-menu-mixin-ag();
    }
}

// Custom usage (faster bounce)
.tooltip-popover.is-open {
    @include ease-bounce-menu-mixin-ag(0.4s);
}
```

## Accessibility Considerations
- **Semantic HTML & ARIA:** Dropdown menus should utilize appropriate roles (like `role="menu"`) and be paired with a trigger using `aria-expanded` and `aria-haspopup`.
- **Keyboard Navigation:** Ensure the menu contents are focusable and navigable via the keyboard when the menu is active.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the bouncy entrance animation is completely disabled (`animation: none !important`). The menu instantly renders in its final, fully visible state (`opacity: 1`, `transform: none`), preventing jarring motion while ensuring the menu is fully usable.
