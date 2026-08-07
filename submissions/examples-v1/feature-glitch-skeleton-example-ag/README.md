# Glitch Skeleton Example (Standard)

## Description
A standard HTML/CSS example demonstrating a "Glitch" loading indicator applied to a skeleton layout. Instead of a smooth, sweeping shimmer (shimmer effect), this applies a stepped gradient sweep and intermittent opacity flickering to simulate a digital glitch while loading content.

## Files
- `demo.html`: The markup for a profile card skeleton layout.
- `style.css`: Uses `steps()` in the sweeping animation and a specific opacity keyframe sequence to create the erratic, glitchy feel.

## Accessibility
- Container has `aria-busy="true"` and an `aria-label` to announce the loading state to screen readers.
- **Reduced Motion**: Completely disables the rapid, stepped glitch sweep and the erratic opacity flickering. Replaces it with a very slow, standard opacity pulse (`skeleton-safe-pulse-ag`) to safely convey the loading state.
