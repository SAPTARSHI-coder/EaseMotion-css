# Animated Progress Bars Submission

## 1. What does this do?
It provides animated progress bars that fill up smoothly when scrolled into view, using EaseMotion CSS utilities and a minimal Intersection Observer script.

## 2. How is it used?
Wrap your progress bars in the `.progress-bar` container and add the `.ease-progress-fill` class to the fill element. Set the `data-width` attribute to the percentage value.

## 3. Why is it useful?
- Progress bars are essential for dashboards, skill sections, and form validations.
- Demonstrates how EaseMotion entrance animations (`ease-slide-up`) pair with scroll-triggered animations.
- Uses Intersection Observer for performance (only animates when visible).
- Fully accessible: respects `prefers-reduced-motion` to prevent unwanted movement.
- Maintainer can easily standardize this as `.ease-progress-[YOUR_INITIALS]` in the core library.