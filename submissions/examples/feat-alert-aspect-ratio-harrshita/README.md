# Alert CSS aspect-ratio & Intrinsic Sizing

## Description
This PR adds CSS `aspect-ratio` and intrinsic sizing keywords (`fit-content`, `max-content`, `min-content`) to the `alert` component. This eliminates the need for brittle padding-top percentage hacks to maintain aspect ratios and allows the component to size itself naturally based on its content.

## Key Properties Used
- `aspect-ratio: 16 / 9`: Maintains media slots at a perfect 16:9 proportion.
- `aspect-ratio: 1`: Keeps avatar slots as perfect squares/circles.
- `width: fit-content`: Component hugs its content without overflowing.
- `width: max-content`: Labels never break mid-word when space is available.
- `min-width: min(280px, 100%)`: Prevents the component from being too narrow.

## Changes
- `style.css`: 80+ lines with aspect-ratio and intrinsic sizing implementations.
- `demo.html`: Grid demo showing two cards with perfectly maintained proportions.
- `README.md`: Describes the feature and key CSS properties used.
\nFixes #55606\n