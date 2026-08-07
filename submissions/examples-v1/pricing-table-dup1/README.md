# 💰 Animated Pricing Table UI

A premium, interactive 3-tier pricing section demonstrating layout, card components, hover motion, and looping badge animations built with **EaseMotion CSS**.

## ✨ Features

- **Responsive Grid:** Sleek CSS Grid layout (`.pricing-grid`) that scales dynamically from mobile screens up to wide desktops.
- **EaseMotion Transition Classes:** 
  - `ease-fade-in` for clean page entry loading.
  - `ease-slide-up` for staggered card elevations on initial page load.
  - `ease-hover-grow` for smooth card hover scale feedback.
  - `ease-btn-hover` for card primary CTA button GPU-accelerated lift + glow effect.
  - `ease-bounce` for dynamic infinite bounce on the Recommended badge.
  - `ease-pulse` for subtle, organic pulse attention-grabbing on the discount tag.
  - `ease-delay-X` (`75ms`, `100ms`, `150ms`, `200ms`, `300ms`, `400ms`) for staggering section loading sequence.
- **Interactive Switcher:** Smooth Yearly / Monthly pricing toggle updating tier price values dynamically with scale transition animations.
- **Premium Background Mesh:** A beautiful dark-theme mesh gradient that floats slowly using keyframe loops, showcasing the framework's theme variables.

## 📁 File Structure

- `demo.html` - HTML document defining structural layout, card elements, billing selector, and interactive script.
- `style.css` - Custom style parameters defining custom gradient background, badge coordinates, and scale modifications.
- `README.md` - Documentation of this example.

## 🚀 How to Run

This example is completely self-contained and loads EaseMotion CSS via CDN (with a local fallback option).

1. Clone or download this folder.
2. Ensure `demo.html` and `style.css` are in the same folder.
3. Open `demo.html` directly in any web browser.
4. Interact with the Monthly/Yearly toggle and observe the smooth hover and loop animations!
