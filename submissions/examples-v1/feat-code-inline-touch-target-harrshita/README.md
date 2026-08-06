# Code-Inline Touch Target Optimization

## Description
This PR adds native OS-level touch optimizations to the `code-inline` component by enforcing a strict WCAG 2.5.5 compliant `min-height: 44px` and `min-width: 44px` on the component and all nested interactive elements. It utilizes `touch-action: manipulation` to prevent 300ms tap delays on mobile.

## Usage
Include the component as usual. All interactive hitboxes will be guaranteed to be accessible for touchscreen users.

## Changes
- `style.css`: 60+ lines adding min-height, min-width, and touch-action css properties.
- `demo.html`: Demo testing layout with nested interactable elements.
- `README.md`: Describes the feature.
\nFixes #55147\n