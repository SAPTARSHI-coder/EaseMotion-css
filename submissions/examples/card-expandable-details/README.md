# Card with Expandable Details

A project card with a thumbnail image, title, subtitle, description, and a "Show Details" button. Clicking the button smoothly expands the details section via `max-height` transition. The button text toggles between Show/Hide.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser and click "Show Details" to expand the extra information section.

## Accessibility notes

The toggle is a `<button>` element with visible text feedback. The details are hidden via `max-height` and overflow, not `display: none`, preserving screen reader access when expanded.
