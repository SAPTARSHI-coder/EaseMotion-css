# Skeleton Loading Collection

## What does this do?
This example provides a comprehensive collection of skeleton loading placeholders for common UI patterns. It covers text, avatars, content cards, image galleries, and list items, with both shimmer and pulse animation variants.

## How is it used?
1. **Include Styles**: Link `style.css` in your project.
2. **Apply Classes**: Use the provided layout classes along with EaseMotion's core skeleton animations:
   - **Shimmer**: `.ease-skeleton-shimmer`
   - **Pulse**: `.ease-skeleton-pulse`
   - **Shapes**: `.skeleton-text`, `.skeleton-avatar`, `.skeleton-img`
   - **Layouts**: `.skeleton-content-card`, `.skeleton-profile-item`, `.skeleton-gallery`

## Why is it useful?
Skeleton screens improve perceived performance by showing users a preview of the layout while data is still loading. This collection provides ready-to-use patterns for the most common web layouts, saving developers from manually building placeholders for every new component.

## Tech Stack
- HTML
- CSS (Native Transitions & Animations)
- EaseMotion CSS (Core Variables, Animations, Utilities)

## Preview
Open `demo.html` directly in your browser to see the various skeleton loading placeholders in action.

## Contribution Notes
- Fully responsive layouts.
- Integrated with EaseMotion's core skeleton animations.
- Adaptive to light/dark mode via `prefers-color-scheme`.
- Accessibility: Respects `prefers-reduced-motion` settings.
