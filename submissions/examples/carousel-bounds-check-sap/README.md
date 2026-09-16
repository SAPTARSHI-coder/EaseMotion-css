# Carousel Slide Index Bounds Check Engine

A zero-dependency helper utility and Vitest test suite engineered for the **EaseMotion CSS** boilerplate to safely sanitize and validate slide indices for HTML/CSS carousels.

## What does this do?
Calculates and normalizes target slide indices, ensuring out-of-bounds requests are safely clamped or looped within valid slide ranges (`0` to `totalSlides - 1`).

## How is it used?
```javascript
import { checkSlideIndex, ClampMode } from './easemotion/helpers/carousel-bounds.js';

// Clamp mode (default): Out-of-bounds indices are bounded
checkSlideIndex(-1, 5); // Returns 0
checkSlideIndex(10, 5); // Returns 4

// Loop mode: Out-of-bounds indices wrap around
checkSlideIndex(-1, 5, { mode: ClampMode.LOOP }); // Returns 4
checkSlideIndex(5, 5, { mode: ClampMode.LOOP });  // Returns 0