# Animated Scroll Progress Indicator

This submission resolves issue #38770.

## Overview
This submission introduces a purely CSS-driven scroll progress indicator using the modern `animation-timeline: scroll(root)` feature. It completely eliminates the need for JavaScript scroll event listeners, which are notoriously bad for performance (triggering layout thrashing on the main thread).

## Features
- **Zero-JavaScript Scroll Tracking**: Hardware-accelerated native CSS scroll timeline.
- **Gradient Progress**: The progress bar features a beautiful gradient that fills up as the user reads.
- **Reading Time Layout**: The demo includes a mock article layout with an estimated reading time to provide context for the progress bar.
- **Graceful Fallback**: Browsers that do not support `animation-timeline` simply will not see the progress bar, ensuring no broken layouts.

## Files
- `demo.html`: A mock blog article with the progress indicator fixed to the top of the viewport.
- `style.css`: Contains the keyframes and `animation-timeline` declarations.
