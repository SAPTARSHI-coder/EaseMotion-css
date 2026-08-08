# Page Transition Overlay Utilities

Resolves Issue #59861.

This submission introduces full-screen CSS page transition utilities that developers can easily integrate into single-page applications (SPAs) or multi-page apps to mask route changes.

## Implementation Details
- Uses `body::before` to create a fixed full-screen overlay, eliminating the need to add extra empty `<div>` elements to the DOM.
- The `animation` swaps `transform-origin` perfectly halfway through (at 50%), allowing the overlay to scale in from one side, and scale out towards the opposite side seamlessly.
- Provides `ease-transition-sweep-right` and `ease-transition-curtain-drop` animations.
- Provides optional `.ease-duration-fast` and `.ease-duration-slow` modifiers to override the default animation duration.
- The default overlay color can be customized easily using the CSS variable `--ease-transition-color` (defaults to a dark slate `#0f172a`).

## Included Files
- `style.css`: Contains the generic `.ease-page-transition` base utility and its directional modifier classes.
- `demo.html`: An interactive demonstration of the transitions in action, including speed modifiers and a custom color implementation via CSS variables.

## Usage
Simply append `.ease-transition-sweep-right` to the `<body>` element when a route change begins. The animation will play out completely over 1.2s by default. You can use JavaScript logic within an SPA router to trigger this class immediately prior to fetching the next view.
