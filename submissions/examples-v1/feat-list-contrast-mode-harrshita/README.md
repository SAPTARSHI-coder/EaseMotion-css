# List Contrast Mode Support

## Description
This PR adds `@media (prefers-contrast: more)` and `@media (prefers-contrast: less)` support to the `list` component using CSS Custom Properties. When a user enables Increase Contrast in their OS accessibility settings, the component automatically switches to a maximum 21:1 contrast ratio palette (pure black/white), far exceeding WCAG AAA requirements.

## Usage
Include the component as usual. It will automatically react to the OS-level contrast preference without requiring JavaScript.

## Changes
- `style.css`: 70+ lines adding contrast media query blocks with CSS variable overrides.
- `demo.html`: Demo with testing instructions for OS contrast settings.
- `README.md`: Describes the feature and WCAG compliance details.
\nFixes #55419\n