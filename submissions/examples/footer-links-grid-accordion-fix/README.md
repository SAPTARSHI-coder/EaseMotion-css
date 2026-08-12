# Footer Links — Grid + Accordion Overlap Fix

Fixes #57054: footer navigation links overlapping, overflowing the viewport, or losing readability on small screens.

## How this differs from a typical fix

A common fix uses flex-wrap on the footer with a single max-width: 600px breakpoint switching to a vertical stack. That works, but:

- flex-based columns can end up uneven widths depending on content length
- a long list of footer columns stacked vertically on mobile can push real page content far down the page with a wall of links

This submission instead:

- Uses CSS Grid with repeat(auto-fit, minmax(180px, 1fr)) for the column layout, columns are genuinely equal-width and self-adjust to however many fit the available space, with no manual breakpoint math deciding the column count.
- Collapses each footer column into a native details accordion on screens 640px wide or less, so link groups are tucked away by default and expandable on demand, a common accessible real-world footer pattern. No JavaScript required.
- Uses a custom plus/minus indicator instead of relying on the browser default disclosure triangle, which renders inconsistently across browsers.

## Usage

1. Copy style.css into your project.
2. Structure your footer as in demo.html: footer containing one or more details.footer-column, each with a summary.footer-column__heading and a div.footer-column__links of anchor tags.
3. Leave the open attribute on each details for desktop, it has no visual effect above 640px since the accordion styling only applies in the mobile media query. Collapsing only takes effect on narrow screens.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--footer-bg` | `#1f2937` | Footer background color |
| `--footer-text` | `#d1d5db` | Link text color |
| `--footer-heading` | `#ffffff` | Column heading color |
| `--footer-hover` | `#60a5fa` | Link hover/focus color |
| `--footer-col-min` | `180px` | Minimum column width before columns reflow (grid auto-fit) |
| `--footer-gap` | `28px` | Gap between columns |
| `--footer-padding` | `40px 32px` | Footer internal padding |

## Accessibility

- details/summary is natively keyboard-operable (Enter/Space to toggle) and announced correctly by screen readers, unlike a JS-driven accordion needing manual ARIA wiring.
- Links remain focusable and their hover state also applies on focus-visible.
- Transitions are disabled under prefers-reduced-motion: reduce.

## Responsive Behavior

- Desktop/tablet: columns arranged via CSS Grid auto-fit, reflowing naturally as space allows.
- Mobile (640px or less): single column, each footer section collapses into an accordion with a custom plus/minus toggle indicator.
