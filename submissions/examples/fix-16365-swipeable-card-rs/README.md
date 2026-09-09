# Fix: Swipeable / Draggable Card Component

## Description
This adds a CSS-only swipeable card container utilizing native `scroll-snap` for smooth, touch-friendly horizontal scrolling.

## How it works
- The container uses `scroll-snap-type: x mandatory` and `overflow-x: auto`.
- Each child card uses `scroll-snap-align: center` so they snap neatly into view when the user scrolls or swipes.
