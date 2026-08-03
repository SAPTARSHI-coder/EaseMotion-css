# Glow Badge Mixin (SCSS)

## Description
This SCSS mixin provides a soft glowing entrance animation designed specifically for badges (e.g., "New", "Update", "Unread"). It scales the badge up from slightly smaller while fading in a `box-shadow` glow, providing a polished and noticeable "Attention Seeker" entrance that isn't overly disruptive.

## Installation
Copy the `_glow-badge.scss` file into your SCSS project's mixins or utilities directory, or import it directly into your stylesheet.

## Usage
Import the mixin and include it in your badge's CSS class. You can customize the animation duration and the glow color via parameters.

```scss
@import 'path/to/_glow-badge.scss';

// Default usage (0.6s duration, blue glow)
.badge-new {
    background-color: #3b82f6;
    color: white;
    @include ease-glow-badge-mixin-ag();
}

// Custom usage (1s duration, red glow for errors)
.badge-error {
    background-color: #ef4444;
    color: white;
    @include ease-glow-badge-mixin-ag(1s, rgba(239, 68, 68, 0.7));
}
```

```html
<span class="badge-new">New Feature</span>
<span class="badge-error">3 Errors</span>
```

## Accessibility Considerations
- **Semantic HTML:** Use appropriate HTML elements (like `<span>` or `<mark>`) for badges. If the badge conveys status important to the surrounding context, ensure it is readable by screen readers.
- **Color Contrast:** Ensure the badge's background color and text color meet WCAG contrast guidelines (at least 4.5:1 for normal text). The glow shadow itself is decorative.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the scaling and fading animation is completely disabled (`animation: none !important`). The badge instantly renders in its final state with the glow shadow applied, ensuring no jarring movement occurs.
