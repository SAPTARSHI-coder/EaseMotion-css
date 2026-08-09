# Drawer CSS Scroll Snap Optimization

## Description
This PR adds CSS Scroll Snap support to the `drawer` component, enabling precise hardware-accelerated scroll-stopping at component boundaries. It uses `scroll-snap-type: x mandatory`, `scroll-snap-align: start`, and `scroll-snap-stop: always` to deliver a native app-like scrolling experience without any JavaScript.

## Key Properties Used
- `scroll-snap-type`: Enables snapping on the scroll container.
- `scroll-snap-align`: Defines snap points on child cards.
- `scroll-snap-stop`: Prevents fast swipes from skipping multiple cards.
- `overscroll-behavior-x: contain`: Keeps scroll momentum within the component.
- `scrollbar-width: none`: Hides the scrollbar for a clean UI.

## Changes
- `style.css`: 70+ lines of scroll-snap and overscroll optimization CSS.
- `demo.html`: Interactive demo with 5 snap cards for testing.
- `README.md`: Describes the feature and all key CSS properties.
\nFixes #55421\n