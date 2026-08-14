# Scroll-Triggered Stagger Animation Utilities

This submission provides CSS utility classes for creating beautiful staggered entry animations when elements are scrolled into the viewport.

## Bug / Feature Description
A common pattern in modern web design is having lists or grids of items animate sequentially (staggered) as they come into view. Managing `transition-delay` manually for each item is tedious. This feature adds parent/child utility classes that automatically calculate delays using CSS `:nth-child()` rules combined with CSS variables.

## Fix / Implementation Details
- Created `.ease-stagger-group` to act as a wrapper, storing the `--ease-stagger-delay` CSS variable.
- Created `.ease-stagger-item` for the initial invisible state (opacity 0, transformed).
- Handled staggered transition delays automatically for up to 10 children using `:nth-child()`.
- Added modifiers like `.ease-stagger-item-scale` and `.ease-stagger-item-left/right`.
- Provided a tiny vanilla JavaScript IntersectionObserver snippet in the demo to dynamically toggle the `.ease-is-visible` state.

## How to Test
1. Open `demo.html` in your browser.
2. Scroll down the page.
3. Observe the grid of cards animating in a sequential "wave" order rather than all at once.
4. Scroll further to see the scale-based stagger effect which uses an overridden `--ease-stagger-delay` variable for slower delays.
