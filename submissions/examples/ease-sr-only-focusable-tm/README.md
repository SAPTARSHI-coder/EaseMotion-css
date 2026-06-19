# ease-sr-only-focusable

## What does this do?
The ease-sr-only-focusable utility provides a screen-reader-only element that becomes visible on keyboard focus. Used for accessible skip navigation links and hidden-but-focusable labels.

## How is it used?
Add the class to any element that should be visually hidden but accessible to keyboard users:

    <a href="#main" class="ease-sr-only-focusable">Skip to main content</a>

## Why is it useful?
This utility is essential for WCAG 2.1 AA accessibility compliance. It enables skip navigation links without cluttering the visual interface for mouse users.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html in your browser. Tab to the "Skip to main content" link to see the focus state.

## Contribution Notes
- Class naming follows the ease-* convention
- Uses CSS custom properties for theming
