# Shake Menu Example

## Description
This is a standard HTML/CSS example demonstrating a "shake" animation applied to a menu item. This interactive state is highly effective for communicating to users that a specific option is locked, disabled, or unavailable. When the user hovers over or focuses on the disabled item, it briefly shakes horizontally to provide negative feedback.

## Installation
Open `demo.html` in any modern web browser to view the example. The required styles and keyframes are defined in `style.css`.

## Usage
To use this effect in your own project, apply the `.ease-shake-menu-ag` class to the target element (such as a disabled anchor tag or button).

```html
<a href="#" class="ease-shake-menu-ag">Locked Option</a>
```

Ensure the keyframes are included in your stylesheet:
```css
.ease-shake-menu-ag:hover,
.ease-shake-menu-ag:focus {
    animation: easeShakeMenuAnimationAg 0.4s ease-in-out;
}

@keyframes easeShakeMenuAnimationAg {
    /* See style.css for full keyframes */
}
```

## Accessibility Considerations
- **Semantic HTML & ARIA:** The menu utilizes `role="menu"`, `role="none"`, and `role="menuitem"` for proper screen reader navigation. The disabled item uses `aria-disabled="true"` and `tabindex="-1"`.
- **Color Indication:** During the shake animation, the text color temporarily changes (e.g., to red) to provide an additional visual cue beyond just motion, which is helpful for users who might miss the quick animation.
- **Reduced Motion:** A `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the shake animation is disabled entirely, and only the color change fallback occurs on hover/focus.
