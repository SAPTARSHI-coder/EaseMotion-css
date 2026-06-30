# Animated Bottom Sheet / Drawer

## Issue
**Issue #22974**: [React] Build animated bottom sheet / drawer component

## Description
This submission introduces a purely CSS-driven bottom sheet modal component. By utilizing the hidden checkbox technique, the drawer state (open/close) is managed entirely in HTML and CSS. The drawer uses an elegant `cubic-bezier` timing function to slide up from the bottom, accompanied by a fading backdrop blur overlay.

## Implementation Details
- **HTML (`demo.html`)**: Includes the hidden checkbox, an overlay label to close by clicking outside, and the bottom drawer container.
- **CSS (`style.css`)**: 
  - Uses `transform: translateY(100%)` for the hidden state and `translateY(0)` for the visible state.
  - Custom toggle switches are also implemented inside the drawer purely with CSS.
  - A subtle backdrop-filter on the overlay focuses the user's attention on the drawer.

## Verification
Open `demo.html`. Click "Open Drawer" to trigger the slide-up animation. Click "Done" or click anywhere on the darkened background overlay to close the drawer.
