# Accessibility: Prefers Reduced Motion (#89178)

## Overview
This submission resolves issue #89178 by implementing a `@media (prefers-reduced-motion: reduce)` query to ensure EaseMotion respects system-level accessibility preferences.

## Implementation Details
It globally targets all elements and pseudo-elements, forcing `animation-duration` and `transition-duration` to a near-zero value (`0.01ms`) and restricting the iteration count to `1` when the user prefers reduced motion.

## How to Test
1. Open `demo.html` in a browser.
2. The purple box should be spinning.
3. Enable "Reduce Motion" in your OS accessibility settings (e.g., macOS: Accessibility > Display > Reduce motion; Windows: Accessibility > Visual effects > Animation effects).
4. Refresh the page. The animation should be disabled.
