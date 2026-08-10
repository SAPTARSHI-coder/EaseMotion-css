# Tada Skeleton Example

## Description
This is a standard HTML/CSS example demonstrating a "Tada" hover effect on skeleton loading placeholders. Skeletons usually have a passive pulse animation; this example adds an interactive, playful "tada" scale-and-wiggle animation when the user hovers over them, making the loading state slightly more engaging.

## Files
- `demo.html`: Contains the structural markup for a profile card skeleton.
- `style.css`: Contains the basic skeleton pulse and the `@keyframes ease-tada-hover-ag` animation applied on `:hover` and `:focus-visible`.

## How It Works
1. Elements with the `.tada-skeleton-ag` class undergo a slow, standard opacity pulse (`skeleton-pulse-ag`) by default.
2. When the user hovers or focuses the element, the `animation` property is overridden with `ease-tada-hover-ag`.
3. The "Tada" animation scales the element down slightly, then scales it up while alternating rotation between `-3deg` and `3deg`, before settling back to normal.

## Accessibility Considerations
- `aria-label` is provided on the skeleton shapes so screen readers can announce them as loading placeholders.
- `tabindex="0"` allows keyboard users to focus the skeleton elements to trigger the animation.
- **Reduced Motion**: Disables both the passive pulse and the active tada animations. On hover, the skeletons simply darken using a standard color transition instead of moving.
