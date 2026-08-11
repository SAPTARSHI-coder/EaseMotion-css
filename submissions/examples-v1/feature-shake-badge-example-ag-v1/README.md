# Shake Badge Example

## Description
This is a standard HTML/CSS example demonstrating a "shake" animation applied to a badge. This is an effective "Attention Seeker" that quickly draws the user's eye. It can be used as a hover effect to indicate interactivity, or as an infinite animation (e.g., to indicate a loading state or a critical alert that requires immediate attention).

## Installation
Open `demo.html` in any modern web browser to view the example. The required styles and keyframes are defined in `style.css`.

## Usage
To use this effect, apply the `.ease-shake-badge-ag` class to your badge element.

```html
<span class="ease-shake-badge-ag">Error</span>
```

By default, the animation triggers on hover. To make the badge shake infinitely (e.g., for a loading indicator), add the `.ease-shake-infinite-ag` modifier class:

```html
<span class="ease-shake-badge-ag ease-shake-infinite-ag">Loading...</span>
```

Ensure the keyframes and state classes are included in your stylesheet:

```css
.ease-shake-badge-ag:hover {
    animation: easeShakeBadgeAnimationAg 0.5s ease-in-out;
}

.ease-shake-infinite-ag {
    animation: easeShakeBadgeAnimationAg 2s ease-in-out infinite;
}

@keyframes easeShakeBadgeAnimationAg {
    /* See style.css for full keyframes (horizontal translation) */
}
```

## Accessibility Considerations
- **Semantic HTML & ARIA:** Use `role="status"` and `aria-label` to ensure screen readers announce the badge's content or state, especially if it acts as a loading or error indicator.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the shake animation is disabled entirely. For the infinite state, a visual fallback (a dashed border and inverted colors) is provided so the user can still recognize the distinct state without the motion.
