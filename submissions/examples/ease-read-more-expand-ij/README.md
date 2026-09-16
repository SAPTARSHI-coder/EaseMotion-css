# Read More Expand

Expandable text card with a smooth max-height transition and a fade gradient at the cutoff point. Click "Read More" to reveal hidden content and "Show Less" to collapse it back.

## Features

- Smooth expand/collapse animation using max-height
- Fade gradient overlay on collapsed state via `::after` pseudo-element
- Accessible with `aria-expanded` attribute
- Multiple examples on one page
- Customizable via root CSS variables

## Usage

Toggle `data-expanded` attribute on `.rme-content`. JavaScript sets `max-height` to `scrollHeight` for accurate animation. CSS transitions max-height and controls the fade overlay.
