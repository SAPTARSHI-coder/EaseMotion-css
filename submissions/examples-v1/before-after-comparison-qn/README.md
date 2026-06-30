# Animated Before/After Image Comparison

## Description

A modern, interactive image comparison component that reveals the "after" image with a smooth wipe effect on hover. It features an animated slider handle that moves across the image, "Before" and "After" labels with glassmorphism styling, and a smooth `clip-path` animation. Perfect for showcasing transformations, photo edits, design changes, and product comparisons. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files

- `demo.html`: Contains the HTML structure with two stacked images, labels, and a slider handle.
- `style.css`: Contains the clip-path animation, slider movement, and hover effects.

## How to use

1. Open `demo.html` in your browser and hover over the image to see the comparison effect.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Wrap everything in a `.comparison-container-qn` div
   - Add the "before" image in `.comparison-before-qn`
   - Add the "after" image in `.comparison-after-qn`
   - Include the `.comparison-slider-qn` with the handle
   - Add labels with `.comparison-label-qn`
4. **Customization:**
   - **Images:** Replace the `src` attributes in the `<img>` tags with your own images.
   - **Animation Speed:** Adjust the `0.6s` transition duration in `.comparison-after-qn` and `.comparison-slider-qn`.
   - **Slider Position:** The slider moves from left to right on hover. To change the direction, modify the `clip-path` values and `transform` properties.
   - **Label Style:** Change the `background`, `color`, and `padding` in `.comparison-label-qn`.
   - **Handle Size:** Modify the `width` and `height` in `.slider-handle-qn`.

## Features

- **Smooth Wipe Effect:** Uses `clip-path: inset()` for a hardware-accelerated reveal animation
- **Animated Slider Handle:** Moves across the image in sync with the reveal
- **Glassmorphism Labels:** Semi-transparent labels with backdrop blur
- **Hover Interaction:** Cursor changes to `ew-resize` to indicate interactivity
- **Responsive Design:** Adapts to mobile screens
- **Accessibility:** Respects `prefers-reduced-motion` user preference

## Technical Details

- The "after" image uses `clip-path: inset(0 100% 0 0)` to start fully hidden
- On hover, it transitions to `clip-path: inset(0 0 0 0)` to reveal the image
- The slider handle uses `transform: translateX()` to move across the container
- Both animations use the same timing function for perfect synchronization
- `clip-path` is hardware-accelerated for smooth performance

## Use Cases

- Photo editing before/after comparisons
- Design mockup presentations
- Product transformation showcases
- Real estate property renovations
- Fitness progress photos
- Art restoration displays
- Filter/effect demonstrations
- Website redesign comparisons
