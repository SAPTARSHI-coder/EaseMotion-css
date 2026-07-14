# ease-history-timeline-scroll

A vertical history timeline component that animates items as they scroll into view.

## Usage
Open demo.html in a browser. Wrap your timeline items in the `.ease-timeline` container. Use IntersectionObserver in JS (as shown in the demo) to toggle the `active` class when items scroll into view.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --timeline-color | #3b82f6 | Accent color for dots and dates |
| --timeline-bg | #e2e8f0 | Line color |

## Notes
CSS handles the smooth `translateY` and `opacity` transition when the `active` class is applied.
