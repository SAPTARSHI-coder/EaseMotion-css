# Expand Badge Mixin (SCSS)

## Description
This SCSS mixin provides an interactive "Expand" animation state for badges. When a user hovers over or focuses on the badge, it smoothly scales up, providing immediate interactive feedback. This pattern is excellent for badges that double as clickable filters or tags.

## Installation
Copy the `_expand-badge.scss` file into your SCSS project's mixins or utilities directory, or import it directly into your stylesheet.

## Usage
Import the mixin and include it in your badge's CSS class. You can customize the animation duration and the scale factor via parameters.

```scss
@import 'path/to/_expand-badge.scss';

// Default usage (0.2s duration, scales to 1.1)
.badge-tag {
    background-color: #f3f4f6;
    color: #374151;
    cursor: pointer;
    @include ease-expand-badge-mixin-ag();
}

// Custom usage (0.3s duration, scales to 1.05)
.badge-category {
    background-color: #e0e7ff;
    color: #4338ca;
    cursor: pointer;
    @include ease-expand-badge-mixin-ag(0.3s, 1.05);
}
```

```html
<!-- Remember to use a button or anchor if the badge is interactive -->
<button class="badge-tag">Technology</button>
<a href="#" class="badge-category">Design</a>
```

## Accessibility Considerations
- **Semantic HTML:** If the badge is meant to be interacted with (triggering the hover/focus effect), it must be an interactive element like a `<button>` or an `<a>` tag, not just a `<span>`.
- **Keyboard Navigation:** The mixin applies the expand effect on `:focus` as well as `:hover` to ensure keyboard users receive the same feedback.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the scaling transition is completely disabled (`transform: scale(1) !important`). As a safe fallback for interactivity, the badge applies a subtle `filter: brightness(0.9)` on hover/focus instead of scaling.
