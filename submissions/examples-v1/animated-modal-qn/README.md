# Animated Modal/Popup Component

## Description

A modern, fully-featured modal/popup component with smooth animations and transitions. It features a backdrop blur effect, scale and fade animations for the modal content, an animated close button with rotation effect, and a bouncing icon animation. Built entirely with pure CSS using the checkbox hack for state management, requiring absolutely zero JavaScript.

## Files

- `demo.html`: Contains the HTML structure using a hidden checkbox, overlay, modal container, and content sections (header, body, footer).
- `style.css`: Contains the backdrop blur, modal animations, close button effects, and responsive design.

## How to use

1. Open `demo.html` in your browser and click "Open Modal" to see the smooth animations.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Add a hidden checkbox with a unique ID
   - Create a label with `for` attribute matching the checkbox ID as the trigger button
   - Add a label with the same `for` attribute as the overlay (clicking overlay closes modal)
   - Create the modal container with header, body, and footer sections
   - Add close buttons as labels with the same `for` attribute
4. **Customization:**
   - **Backdrop Blur:** Change the `blur(8px)` value in `.modal-overlay-qn` to adjust blur intensity.
   - **Animation Speed:** Modify the `0.4s` transition durations to make animations faster or slower.
   - **Colors:** Change the gradient colors in `.modal-icon-qn` and `.modal-btn-primary-qn`.
   - **Size:** Adjust `max-width: 500px` in `.modal-content-qn` to make the modal wider or narrower.
   - **Close Button:** The close button rotates 90 degrees on hover. Remove or modify the `transform: rotate(90deg)` if desired.

## Features

- **Backdrop Blur:** Modern frosted glass effect behind the modal
- **Smooth Animations:** Scale and fade transitions with cubic-bezier easing
- **Animated Close Button:** Rotates and changes color on hover
- **Bouncing Icon:** Icon in the header has a bouncy entrance animation
- **Click Outside to Close:** Clicking the overlay closes the modal
- **Fully Responsive:** Adapts beautifully to mobile screens
- **Accessible:** Proper semantic HTML and ARIA labels

## Use Cases

- Confirmation dialogs
- Alert messages
- Contact forms
- Newsletter signups
- Product details
- Terms and conditions
- Image galleries
- Video players

## Note

This demo uses the checkbox hack for pure CSS functionality. In a real application, you would typically use JavaScript to:

1. Add/remove classes to show/hide the modal
2. Handle form submissions
3. Manage focus trapping for accessibility
4. Add keyboard navigation (ESC key to close)
