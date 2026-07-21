# Scroll Progress Direction Control and Custom Styling Variables

This submission extends the existing CSS Scroll-Driven Animations by adding multi-directional progress indicators (Top, Right, Radial) and implementing a fully customizable CSS Variable token system.

## Bug / Feature Description
A top horizontal reading progress bar isn't always suitable for every design. Documentation sites often prefer vertical scroll indicators tied to a right-aligned Table of Contents. Floating Action Buttons (FABs) often prefer a circular/radial progress ring. Furthermore, developers need an easy way to theme these indicators without rewriting keyframes.

## Fix / Implementation Details
- Introduced `--ease-scroll-progress-color`, `--ease-scroll-progress-bg`, `--ease-scroll-progress-size`, and `--ease-scroll-progress-radius` as configurable root variables.
- Added `.ease-scroll-progress-top` for the standard horizontal X-axis scaling.
- Added `.ease-scroll-progress-right` for vertical Y-axis scaling.
- Added `.ease-scroll-progress-radial` which ingeniously uses CSS `@property` syntax to allow `conic-gradient()` angles to be animated smoothly by the scroll timeline, masked into a ring.

## How to Test
1. Open `demo.html` in a supported modern browser (Chrome 115+, Edge 115+).
2. Begin scrolling down the page.
3. Observe the Top horizontal bar (pink).
4. Observe the Right vertical bar (pink).
5. Observe the Bottom Right floating button with the radial progress ring (green, overriding the default variable).
6. Verify all three indicators perfectly sync with your scroll position without utilizing any JavaScript.
