# Image CSS `:has()` Advanced Parent Selectors

## Description
This PR implements the modern CSS `:has()` pseudo-class for the `image` component. This powerful selector allows the parent container to style itself based on the state or presence of its children, completely eliminating the need for JavaScript state-management just to toggle "active" or "focused" classes on wrappers.

## Key `:has()` Features Used
- `:has(:checked)`: Highlights the entire parent card when a child checkbox is checked.
- `:has(:focus-visible)`: Outlines the parent container when a child receives keyboard focus, dramatically improving accessibility.
- `:hover:not(:has(:checked))`: Provides subtle hover hints only when the card is not already selected.
- Structure queries: Adjusts parent padding if a specific child element (like an icon) is present.

## Changes
- `style.css`: 90+ lines of CSS utilizing `:has()` for interactive parent styling.
- `demo.html`: Interactive checkbox cards demonstrating zero-JS parent state changes.
- `README.md`: Describes the feature and selector logic.
\nFixes #55932\n