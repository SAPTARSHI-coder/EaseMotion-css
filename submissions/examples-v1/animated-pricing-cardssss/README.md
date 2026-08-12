# Animated Pricing Cards Example

This is a self-contained example demonstrating how to create modern, animated pricing cards using pure CSS, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎨 **Animated Gradient Border:** The "Popular" plan features a smoothly animated gradient border using CSS masks.
- ⚡ **Hover Lift Effect:** Cards smoothly translate up on hover with enhanced shadows.
- ✓ **Animated Checkmarks:** Feature checkmarks scale up on card hover.
- 💫 **Pulse Animations:** The "Most Popular" badge and CTA button have subtle pulse effects.
- 🎬 **Staggered Entrance:** Cards fade in with staggered delays using EaseMotion utilities.
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` for users who prefer less animation.
- 🚫 **Zero JavaScript:** Entirely built with HTML and CSS.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>` (already included in `demo.html`).
2. Link the `style.css` file.
3. Copy the pricing card HTML structure and customize the content, prices, and features.

## Customization
- Change the gradient colors by modifying the `linear-gradient` values in `style.css`.
- Adjust animation speeds by changing the duration values (e.g., `3s`, `2s`).
- Modify the hover lift distance by changing `translateY(-8px)` to your preferred value.

## Techniques Used
- **CSS Masks:** Used for the animated gradient border effect on the popular card.
- **Background Animation:** `background-size` and `background-position` animation for smooth gradient movement.
- **Transform Transitions:** Smooth hover effects using `transform` and `box-shadow`.
- **Keyframe Animations:** Pulse effects for badge and button.