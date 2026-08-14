# Image Comparison Slider Submission

## 1. What does this do?
It provides an interactive image comparison slider with draggable handle, smooth reveal animations, and support for both horizontal and vertical orientations. Perfect for before/after comparisons, photo editing showcases, design transformations, and product comparisons.

## 2. How is it used?
Wrap two images (before and after) in `.comparison-container` with `.comparison-wrapper`. Add `.comparison-handle` for the draggable slider. JavaScript handles drag interactions and updates the clip-path to reveal the after image. Supports mouse, touch, and keyboard navigation.

## 3. Why is it useful?
- Essential component for before/after comparisons
- Smooth draggable handle with visual feedback
- Horizontal and vertical comparison modes
- Touch support for mobile devices
- Keyboard accessible (Arrow keys for precise control)
- Click anywhere to move handle
- Before/After labels with blur effect
- Multiple comparisons in grid layout
- Responsive design for all screen sizes
- Accessible with `prefers-reduced-motion` support
- Easy to customize handle styles and animations
- Maintainer can easily standardize this as `.ease-comparison-[YOUR_INITIALS]` in the core library.