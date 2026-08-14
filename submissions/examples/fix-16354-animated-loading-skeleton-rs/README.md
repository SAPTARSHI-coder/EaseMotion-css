# Animated Loading Skeleton Component

This submission adds CSS utility classes to build animated skeleton loaders, significantly improving the perceived performance of a web application while data is fetching.

## Bug / Feature Description
Instead of showing a boring static spinner while content loads, modern applications display "Skeletons"—blocks representing the layout of the incoming data, animated to show that the app is actively working.

## Fix / Implementation Details
- **`.ease-skeleton`**: Implements the classic "Shimmer" effect. It works by setting an oversized `linear-gradient` background and animating `background-position` from 100% to -100%. This is highly performant and creates a beautiful sweeping shine.
- **`.ease-skeleton-pulse`**: Implements the simpler "Pulse" effect. Instead of a moving gradient, it animates the `opacity` of the block.
- **Modifiers**: Added `.ease-skeleton-circle` for avatars.

## How to Test
1. Open `demo.html` in your browser.
2. In the first column, observe the sweeping "Shimmer" effect moving from left to right across the mock list items.
3. In the second column, observe the gentle "Pulse" fading effect on the mock card component.
