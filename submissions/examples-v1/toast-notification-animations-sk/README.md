# Toast Notification Animations

## What does this do?
This example implements a modern, flexible toast notification system with multiple entrance and exit animations, stacking behavior, and auto-dismissal with progress indicators.

## How is it used?
1. **Include Files**: Link `style.css` and include `script.js` in your project.
2. **Trigger Toast**: Call `Toast.show()` with your desired options:
   ```javascript
   Toast.show({
     type: 'success', // success, error, warning, info
     title: 'Hello!',
     message: 'This is a notification.',
     position: 'top-right', // top-right, top-left, bottom-right, bottom-left
     animation: 'slide-right' // slide-right, slide-left, fade-scale
   });
   ```

## Why is it useful?
Real-time feedback is crucial for a good user experience. This system provides a reusable pattern for informative notifications that don't interrupt the user's flow. It handles the complexity of stacking multiple toasts and animating their entrance/exit smoothly.

## Tech Stack
- HTML
- CSS (Native Animations, Transitions)
- JavaScript (DOM Manipulation, Event Handling)
- EaseMotion CSS (Core Variables, Utilities, Components)

## Preview
Open `demo.html` directly in your browser and click the control buttons to trigger various toast notifications.

## Contribution Notes
- Uses EaseMotion design tokens for consistency.
- High-performance GPU-accelerated animations.
- Full `prefers-reduced-motion` support.
- Fully responsive and works across all screen sizes.
