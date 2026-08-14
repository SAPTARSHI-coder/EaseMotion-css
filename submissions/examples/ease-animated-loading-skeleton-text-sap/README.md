# ease-animated-loading-skeleton-text-sap

A paragraph-shaped skeleton loader with shimmering lines of varying width, mimicking a title + body text block while content loads.

## Usage
1. Include `style.css`.
2. Add markup: a `.sk-line.title` + several `.sk-line.w-*` lines of decreasing width, mimicking natural paragraph line lengths.

## Customization
- Line widths (`.w-100`/`.w-90`/`.w-75`/`.w-60`) — add more width classes for different paragraph shapes.
- Shimmer speed/gradient colors.
- Line height/spacing for different text sizes.

## Notes
- Varying line widths (rather than uniform full-width bars) is what makes the skeleton read as realistic paragraph text rather than a generic loading block.
- Same `background-position` shimmer technique as other skeleton components in this library.
- Respects `prefers-reduced-motion`: shimmer animation is disabled, lines display as flat static gray placeholders.