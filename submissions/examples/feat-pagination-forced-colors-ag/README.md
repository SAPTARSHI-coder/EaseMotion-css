# Pagination Forced Colors Mode Support

## Description
This submission enhances the `pagination` component with full support for the
`forced-colors: active` CSS media query, ensuring the component remains fully
accessible and visible when users enable Windows High Contrast Mode or
other forced-color themes.

Without this query, components that rely on background colors or box-shadows
for boundaries often become invisible because the OS strips these properties
away. This fix maps component states to standard CSS system colors like
`CanvasText`, `Highlight`, and `GrayText`.

## Accessibility Standards
- WCAG 2.1 Success Criterion 1.4.1: Use of Color (Level A)
- WCAG 2.1 Success Criterion 1.4.11: Non-text Contrast (Level AA)

## Changes
- `style.css`: 90+ lines. Base styles define the default layout and colors.
  The `@media (forced-colors: active)` block overrides colors using CSS
  system colors, ensuring borders and text adapt correctly.
- `demo.html`: Full HTML5 boilerplate with testing instructions and examples
  of both active and disabled component states.
- `README.md`: Documents the accessibility rationale and testing steps.

## How to Test
1. Open `demo.html` in Chrome or Edge.
2. Open DevTools, press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac).
3. Type "Emulate CSS forced-colors" and select "forced-colors: active".
4. Observe that the component borders, text, and hover states now use the
   strict high-contrast system colors.

Fixes #57875
