# Image Comparison Slider Submission

## 1. What does this do?
It provides an interactive before/after image comparison slider that allows users to drag and compare two images side-by-side. Perfect for photo editing showcases, real estate comparisons, design iterations, and product transformations.

## 2. How is it used?
Wrap your two images in the `.image-comparison` container. The first image (`.comparison-before`) sits at the bottom, and the second image (`.comparison-after`) is clipped using CSS `clip-path`. The slider handle (`.comparison-slider`) controls the clip-path position via JavaScript.

## 3. Why is it useful?
- Essential for photo editing portfolios, real estate, and design showcases
- Fully interactive with drag-to-compare functionality
- Works with mouse and touch events (mobile-friendly)
- Smooth animations with EaseMotion hover effects
- Accessible with proper ARIA labels and keyboard support
- Includes `prefers-reduced-motion` support for accessibility
- Responsive design that works on all screen sizes
- Maintainer can easily standardize this as `.ease-comparison-[YOUR_INITIALS]` in the core library.