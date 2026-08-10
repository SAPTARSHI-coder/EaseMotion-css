# Skeleton Loading Shimmer Effect

## Description
A modern, pure CSS skeleton loading animation. It creates a "shimmer" or "sweep" effect across placeholder blocks (like avatars, titles, and text lines) to indicate that content is currently loading. This provides a much smoother user experience than traditional loading spinners and requires zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for the skeleton card, avatar, and text placeholders.
- `style.css`: Contains the base styling for the placeholders and the `shimmer-qn` keyframe animation.

## How to use
1. Open `demo.html` in your browser to see the effect.
2. Copy the HTML and CSS into your project.
3. Apply the `.skeleton-avatar-qn`, `.skeleton-title-qn`, and `.skeleton-text-qn` classes to your placeholder `div` elements.
4. **Customization:**
   - Change the base background color of the placeholders by modifying the `background-color` (currently `#e0e0e0`).
   - Adjust the speed of the shimmer by changing the `1.5s` duration in the `animation` property.
   - Change the intensity of the light sweep by adjusting the `rgba(255, 255, 255, 0.6)` value in the `linear-gradient`.